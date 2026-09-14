import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { CosmicHeader } from './components/CosmicHeader';
import { PlanetStage } from './components/PlanetStage';
import { ContentPanel } from './components/ContentPanel';
import { SectorDial } from './components/SectorDial';
import { SECTIONS } from './data/portfolioData';
import { cosmicAudio } from './utils/audio';

export const App: React.FC = () => {
  const [targetRotation, setTargetRotation] = useState<number>(0);
  const [currentRotation, setCurrentRotation] = useState<number>(0);
  const [activeSectorIndex, setActiveSectorIndex] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  const currentRotationRef = useRef<number>(0);
  const targetRotationRef = useRef<number>(0);
  const prevSectorRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  // Smooth LERP animation loop for cinematic rotation
  useEffect(() => {
    const animate = () => {
      const current = currentRotationRef.current;
      const target = targetRotationRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.02) {
        // Ease with 0.08 lerp factor for smooth cinematic damping
        const next = current + diff * 0.08;
        currentRotationRef.current = next;
        setCurrentRotation(next);
      } else if (current !== target) {
        currentRotationRef.current = target;
        setCurrentRotation(target);
      }

      // Determine active sector based on current rotation
      // Sector 0: 0°, Sector 1: -90°, Sector 2: -180°, Sector 3: -270°
      const normalizedSector = Math.min(
        3,
        Math.max(0, Math.round(Math.abs(currentRotationRef.current) / 90))
      );

      if (normalizedSector !== prevSectorRef.current) {
        prevSectorRef.current = normalizedSector;
        setActiveSectorIndex(normalizedSector);
        if (soundEnabled) {
          cosmicAudio.playSectorBlip(normalizedSector);
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
  }, [soundEnabled]);

  // Scroll listener: maps page scroll directly to rotation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) return;

      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      // Total rotation spanning 4 sectors: 0° -> -270°
      const newTargetRotation = progress * -270;
      targetRotationRef.current = newTargetRotation;
      setTargetRotation(newTargetRotation);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial computation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Keyboard navigation: Arrow keys & Page keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return; // Don't intercept when user is typing in form
      }

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        navigateToSector(Math.min(3, activeSectorIndex + 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        navigateToSector(Math.max(0, activeSectorIndex - 1));
      } else if (e.key === 'Home') {
        e.preventDefault();
        navigateToSector(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        navigateToSector(3);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSectorIndex]);

  // Navigate to sector by smoothly scrolling the document
  const navigateToSector = useCallback((sectorIndex: number) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const targetProgress = sectorIndex / (SECTIONS.length - 1);
    const targetScrollY = targetProgress * maxScroll;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  }, []);

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
      {/* <StarfieldCanvas rotation={currentRotation} /> */}

      {/* Fixed Cosmic HUD Header */}
      <CosmicHeader
        activeSectorIndex={activeSectorIndex}
        rotation={currentRotation}
        onSelectSector={navigateToSector}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Viewport Presentation Shell */}
      <div className="fixed-hero-stage">
        {/* Upper Portion: Portfolio Content Panel */}
        {/* <ContentPanel
          activeSectorIndex={activeSectorIndex}
          onNavigate={navigateToSector}
        /> */}

        {/* Lower Portion: Anchored Giant Rotating Earth */}
        <PlanetStage
          rotation={currentRotation}
          activeSectorIndex={activeSectorIndex}
          onSelectSector={navigateToSector}
        />

        {/* Side Orbital Telemetry Dial */}
        {/* <SectorDial
          activeSectorIndex={activeSectorIndex}
          rotation={currentRotation}
          onSelectSector={navigateToSector}
          onNextSector={() => navigateToSector(Math.min(3, activeSectorIndex + 1))}
          onPrevSector={() => navigateToSector(Math.max(0, activeSectorIndex - 1))}
        /> */}
      </div>

      {/* Scroll Spine Container: defines the virtual height to power scroll-driven rotation */}
      <div className="scroll-spacer-spine" aria-hidden="true" />
    </div>
  );
};
