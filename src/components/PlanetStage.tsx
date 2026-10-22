import React from 'react';
import { SECTIONS } from '../data/portfolioData';

interface PlanetStageProps {
  rotation: number;
  activeSectorIndex: number;
  isRotating?: boolean;
  onSelectSector: (index: number) => void;
}

export const PlanetStage: React.FC<PlanetStageProps> = ({
  rotation,
  activeSectorIndex,
  isRotating = false,
  onSelectSector,
}) => {
  return (
    <div className="planet-stage-container" aria-label="Interactive Planetary Stage">
      {/* Planetary atmospheric corona / horizon aura */}
      <div className="planet-atmosphere-glow" />
      <div className="planet-ionosphere-ring" />

      {/* The Anchored Rotating Planet */}
      <div
        className="planet-anchor"
        style={{
          transform: `translateX(-50%) rotate(${rotation}deg)`,
        }}
      >
        <img
          src="/assets/earth-crew.png"
          alt="Earth with orbiting astronaut crew"
          className="earth-image"
          draggable={false}
        />

        {/* 4 Interactive click hotspots positioned on the 4 astronauts */}
        {SECTIONS.map((sec, idx) => {
          const angleDeg = idx * 90;
          const isActive = activeSectorIndex === idx;
          return (
            <button
              key={sec.id}
              type="button"
              className={`astronaut-hotspot hotspot-${idx} ${
                isActive ? 'hotspot-active' : ''
              }`}
              style={{
                transform: `rotate(${angleDeg}deg) translateY(-48%)`,
              }}
              onClick={() => onSelectSector(idx)}
              title={`Jump to Sector 0${idx + 1}: ${sec.title}`}
              aria-label={`Jump to Sector 0${idx + 1}: ${sec.title}`}
            >
              <span
                className="hotspot-pin"
                style={{
                  transform: `rotate(-${angleDeg + rotation}deg)`,
                }}
              >
                <span className="hotspot-pulse" />
                <span className="hotspot-num">0{idx + 1}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Horizon vignette to blend lower planet edge */}
      <div className="planet-bottom-shadow" />
    </div>
  );
};

