import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { PlanetStage } from './components/PlanetStage';
import { ContentPanel } from './components/ContentPanel';
import { SectorDial } from './components/SectorDial';
import { SECTIONS } from './data/portfolioData';
import { cosmicAudio } from './utils/audio';
import { Volume2, VolumeX } from 'lucide-react';

export const App: React.FC = () => {
  const [activeSectorIndex, setActiveSectorIndex] = useState<number>(0);
  const [targetSectorIndex, setTargetSectorIndex] = useState<number>(0);
  const [targetRotation, setTargetRotation] = useState<number>(0);
  const [currentRotation, setCurrentRotation] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  const activeSectorIndexRef = useRef<number>(0);
  const targetSectorIndexRef = useRef<number>(0);
  const targetRotationRef = useRef<number>(0);
  const currentRotationRef = useRef<number>(0);
  const isRotatingRef = useRef<boolean>(false);
  const soundEnabledRef = useRef<boolean>(false);
  const scrollAccumulatorRef = useRef<number>(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  // Keep refs synchronized
  activeSectorIndexRef.current = activeSectorIndex;
  soundEnabledRef.current = soundEnabled;

  // Initiates smooth rotation to a designated sector
  const startRotationToSector = useCallback((targetIndex: number) => {
    if (targetIndex < 0 || targetIndex >= SECTIONS.length) return;
    if (targetIndex === activeSectorIndexRef.current && !isRotatingRef.current) return;

    targetSectorIndexRef.current = targetIndex;
    setTargetSectorIndex(targetIndex);

    const newTargetRotation = targetIndex * -90;
    targetRotationRef.current = newTargetRotation;
    setTargetRotation(newTargetRotation);

    setIsRotating(true);
    isRotatingRef.current = true;
    scrollAccumulatorRef.current = 0;
  }, []);

  // Smooth LERP animation loop for cinematic rotation
  useEffect(() => {
    const animate = () => {
      const current = currentRotationRef.current;
      const target = targetRotationRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.15) {
        // Smooth cinematic ease (0.07 damping factor)
        const next = current + diff * 0.07;
        currentRotationRef.current = next;
        setCurrentRotation(next);
      } else if (isRotatingRef.current || current !== target) {
        // Astronaut/category has reached its position!
        currentRotationRef.current = target;
        setCurrentRotation(target);

        // Stop the rotation and lock Earth still!
        setIsRotating(false);
        isRotatingRef.current = false;

        const finalSector = targetSectorIndexRef.current;
        setActiveSectorIndex(finalSector);
        activeSectorIndexRef.current = finalSector;

        // Reset newly arrived category content scroll to top
        if (cardRef.current) {
          cardRef.current.scrollTop = 0;
        }

        if (soundEnabledRef.current) {
          cosmicAudio.playSectorBlip(finalSector);
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Wheel listener:
  // - Keeps Earth completely still while category content is being viewed/scrolled
  // - Only after content is finished (at bottom), rotates Earth on scroll to next category
  // - Once next astronaut reaches position, stops rotation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const deltaY = e.deltaY;
      if (Math.abs(deltaY) < 1) return;

      const card = cardRef.current;
      const isOverCard = card && (e.target instanceof Node) && card.contains(e.target);

      // Measure whether the active category card can still scroll down or up
      let canScrollDown = false;
      let canScrollUp = false;

      if (card) {
        const remainingDown = card.scrollHeight - card.clientHeight - card.scrollTop;
        canScrollDown = remainingDown > 10;
        canScrollUp = card.scrollTop > 10;
      }

      // If Earth is actively rotating, prevent browser bounce
      if (isRotatingRef.current) {
        e.preventDefault();
        return;
      }

      // User scrolls DOWN (advancing content or moving forward)
      if (deltaY > 0) {
        if (canScrollDown) {
          if (isOverCard) {
            scrollAccumulatorRef.current = 0;
            return;
          } else {
            if (card) {
              card.scrollTop += deltaY;
            }
            scrollAccumulatorRef.current = 0;
            e.preventDefault();
            return;
          }
        }

        // Category content is fully finished (at bottom or fits on screen)!
        if (activeSectorIndexRef.current < SECTIONS.length - 1) {
          e.preventDefault();
          scrollAccumulatorRef.current += deltaY;
          if (scrollAccumulatorRef.current >= 35) {
            scrollAccumulatorRef.current = 0;
            startRotationToSector(activeSectorIndexRef.current + 1);
          }
        }
      }

      // User scrolls UP (scrolling up within content or moving backward)
      else if (deltaY < 0) {
        if (canScrollUp) {
          if (isOverCard) {
            scrollAccumulatorRef.current = 0;
            return;
          } else {
            if (card) {
              card.scrollTop += deltaY;
            }
            scrollAccumulatorRef.current = 0;
            e.preventDefault();
            return;
          }
        }

        // At top of category content!
        if (activeSectorIndexRef.current > 0) {
          e.preventDefault();
          scrollAccumulatorRef.current += deltaY;
          if (scrollAccumulatorRef.current <= -35) {
            scrollAccumulatorRef.current = 0;
            startRotationToSector(activeSectorIndexRef.current - 1);
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [startRotationToSector]);

  // Touch gesture support (swipe on mobile / tablets)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartYRef.current === null) return;
      if (isRotatingRef.current) {
        e.preventDefault();
        return;
      }

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - touchY;
      const card = cardRef.current;

      const canScrollDown = card ? (card.scrollHeight - card.clientHeight - card.scrollTop > 10) : false;
      const canScrollUp = card ? (card.scrollTop > 10) : false;

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0 && !canScrollDown && activeSectorIndexRef.current < SECTIONS.length - 1) {
          touchStartYRef.current = touchY;
          startRotationToSector(activeSectorIndexRef.current + 1);
        } else if (deltaY < 0 && !canScrollUp && activeSectorIndexRef.current > 0) {
          touchStartYRef.current = touchY;
          startRotationToSector(activeSectorIndexRef.current - 1);
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartYRef.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [startRotationToSector]);

  // Keyboard navigation: Arrow keys & Page keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }

      const card = cardRef.current;
      const canScrollDown = card ? (card.scrollHeight - card.clientHeight - card.scrollTop > 10) : false;
      const canScrollUp = card ? (card.scrollTop > 10) : false;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (canScrollDown && card) {
          card.scrollTop += 120;
        } else {
          startRotationToSector(Math.min(SECTIONS.length - 1, activeSectorIndexRef.current + 1));
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (canScrollUp && card) {
          card.scrollTop -= 120;
        } else {
          startRotationToSector(Math.max(0, activeSectorIndexRef.current - 1));
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        startRotationToSector(Math.min(SECTIONS.length - 1, activeSectorIndexRef.current + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        startRotationToSector(Math.max(0, activeSectorIndexRef.current - 1));
      } else if (e.key === 'Home') {
        e.preventDefault();
        startRotationToSector(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        startRotationToSector(SECTIONS.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [startRotationToSector]);

  const handleToggleSound = () => {
    if (!soundEnabled) {
      cosmicAudio.startAmbience();
      setSoundEnabled(true);
    } else {
      cosmicAudio.stopAmbience();
      setSoundEnabled(false);
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* Dynamic Starfield Backdrop */}
      <StarfieldCanvas rotation={currentRotation} />

      {/* Main Viewport Presentation Shell */}
      <div className="fixed-hero-stage">
        {/* Full-Screen Content Panel */}
        <ContentPanel
          activeSectorIndex={activeSectorIndex}
          isRotating={isRotating}
          targetSectorIndex={targetSectorIndex}
          onNavigate={startRotationToSector}
          cardRef={cardRef}
        />

        {/* Anchored Rotating Earth at Bottom Left */}
        <PlanetStage
          rotation={currentRotation}
          activeSectorIndex={activeSectorIndex}
          isRotating={isRotating}
          onSelectSector={startRotationToSector}
        />
      </div>
    </div>
  );
};
