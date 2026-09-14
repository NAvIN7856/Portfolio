import React from 'react';
import { SECTIONS } from '../data/portfolioData';

interface PlanetStageProps {
  rotation: number;
  activeSectorIndex: number;
  onSelectSector: (index: number) => void;
}

export const PlanetStage: React.FC<PlanetStageProps> = ({
  rotation,
  activeSectorIndex,
  onSelectSector,
}) => {
  const currentSection = SECTIONS[activeSectorIndex];

  return (
    <div className="planet-stage-container" aria-label="Interactive Planetary Stage">
      {/* Planetary atmospheric corona / horizon aura */}
      <div className="planet-atmosphere-glow" />

      {/* Orbital trajectory rings */}
      <div className="orbit-track-ring" />
      <div className="orbit-track-dashed" />

      {/* Apex Astronaut Targeting HUD Beacon */}
      {/* <div className="apex-target-beacon">
        <div className="beacon-pulse" />
        <div className="beacon-ring" />
        <div className="beacon-crosshair">
          <span className="crosshair-h" />
          <span className="crosshair-v" />
        </div>
        <div className="beacon-tag">
          <span className="beacon-dot" />
          <span className="beacon-text">{currentSection.badge}</span>
        </div>
      </div> */}

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
          // Angular positions on the original PNG:
          // Sector 0 (Laptop) is at 12 o'clock (angle 0 rad, top)
          // Sector 1 (Tablet) is at 3 o'clock (angle PI/2, right)
          // Sector 2 (Coin) is at 6 o'clock (angle PI, bottom)
          // Sector 3 (Spacewalk) is at 9 o'clock (angle 3PI/2, left)
          const angleDeg = idx * 90;
          return (
            <button
              key={sec.id}
              type="button"
              className={`astronaut-hotspot hotspot-${idx} ${activeSectorIndex === idx ? 'hotspot-active' : ''
                }`}
              style={{
                transform: `rotate(${angleDeg}deg) translateY(-48%)`,
              }}
              onClick={() => onSelectSector(idx)}
              title={`Rotate to ${sec.title}`}
              aria-label={`Jump to ${sec.title}`}
            >
              <span
                className="hotspot-pin"
                style={{
                  // Counter-rotate the label so it stays legible regardless of planet rotation
                  transform: `rotate(-${angleDeg + rotation}deg)`,
                }}
              >
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
