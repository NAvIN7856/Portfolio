import React, { useState, useEffect, useCallback } from 'react';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { PlanetStage } from './components/PlanetStage';
import { ContentPanel } from './components/ContentPanel';
import { CosmicHeader } from './components/CosmicHeader';
import { SectorDial } from './components/SectorDial';
import { cosmicAudio } from './utils/audio';

const SECTION_IDS = [
  'section-information',
  'section-skills',
  'section-projects',
  'section-experience',
];

export const App: React.FC = () => {
  const [activeSectorIndex, setActiveSectorIndex] = useState<number>(0);
  const [currentRotation, setCurrentRotation] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  // Sync scroll position with active sector and rotation angle
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      setScrollProgress(progress);

      let currentIdx = 0;
      const scrollThreshold = window.innerHeight * 0.35;

      for (let i = 0; i < SECTION_IDS.length; i++) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= scrollThreshold) {
            currentIdx = i;
          }
        }
      }

      setActiveSectorIndex(currentIdx);
      setCurrentRotation(currentIdx * -90);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSector = useCallback((targetIndex: number) => {
    const targetId = SECTION_IDS[targetIndex];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        try {
          cosmicAudio.playSectorBlip(targetIndex);
        } catch {
          // ignore audio failure if blocked
        }
      }
    }
  }, []);

  // Keyboard navigation shortcuts (1-4, J/K, ArrowUp/ArrowDown)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        handleSelectSector(idx);
      } else if (e.key.toLowerCase() === 'j') {
        handleSelectSector(Math.min(SECTION_IDS.length - 1, activeSectorIndex + 1));
      } else if (e.key.toLowerCase() === 'k') {
        handleSelectSector(Math.max(0, activeSectorIndex - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSectorIndex, handleSelectSector]);

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
      {/* Dynamic Starfield Canvas (fixed background) */}
      <StarfieldCanvas rotation={currentRotation} />

      {/* Top Cosmic HUD Header */}
      <CosmicHeader
        activeSectorIndex={activeSectorIndex}
        rotation={currentRotation}
        onSelectSector={handleSelectSector}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Radar Dial & Orbital Telemetry Widget */}
      <SectorDial
        activeSectorIndex={activeSectorIndex}
        rotation={currentRotation}
        onSelectSector={handleSelectSector}
        scrollProgress={scrollProgress}
      />

      {/* Anchored Planetary Stage in bottom background */}
      <div className="fixed-planet-backdrop">
        <PlanetStage
          rotation={currentRotation}
          activeSectorIndex={activeSectorIndex}
          isRotating={false}
          onSelectSector={handleSelectSector}
        />
      </div>

      {/* Main Single-Page Scroll Content Flow */}
      <div className="page-scroll-container">
        <ContentPanel onNavigateSection={handleSelectSector} />
      </div>
    </div>
  );
};

