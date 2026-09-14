import React from 'react';
import { Compass, ChevronDown, ChevronUp } from 'lucide-react';
import { SECTIONS } from '../data/portfolioData';

interface SectorDialProps {
  activeSectorIndex: number;
  rotation: number;
  onSelectSector: (index: number) => void;
  onNextSector: () => void;
  onPrevSector: () => void;
}

export const SectorDial: React.FC<SectorDialProps> = ({
  activeSectorIndex,
  rotation,
  onSelectSector,
  onNextSector,
  onPrevSector,
}) => {
  // Normalize angle to 0..360
  const normalizedAngle = ((Math.abs(rotation) % 360) + 360) % 360;

  return (
    <aside className="sector-dial-aside" aria-label="Orbital Position Telemetry">
      {/* Mini orbital radar compass */}
      <div className="radar-compass-wrapper">
        <div className="radar-face">
          <div className="radar-grid" />
          <div
            className="radar-needle"
            style={{ transform: `rotate(${rotation}deg)` }}
          />

          {SECTIONS.map((sec, idx) => {
            const angle = idx * 90;
            const isActive = activeSectorIndex === idx;
            return (
              <button
                key={sec.id}
                type="button"
                className={`radar-sector-node ${isActive ? 'active' : ''}`}
                style={{
                  transform: `rotate(${angle}deg) translate(0, -32px) rotate(-${angle}deg)`,
                }}
                onClick={() => onSelectSector(idx)}
                title={`Sector 0${idx + 1}: ${sec.title}`}
                aria-label={`Sector 0${idx + 1}: ${sec.title}`}
              >
                0{idx + 1}
              </button>
            );
          })}

          <div className="radar-core">
            <Compass size={14} className="radar-icon" />
          </div>
        </div>

        <div className="radar-readout">
          <span className="radar-degrees">{Math.round(normalizedAngle)}°</span>
          <span className="radar-subtext">ORBITAL BEARING</span>
        </div>
      </div>

      {/* Manual Step Controls */}
      <div className="orbit-steppers">
        <button
          type="button"
          className="stepper-btn"
          onClick={onPrevSector}
          title="Previous Orbital Sector"
          aria-label="Previous Orbital Sector"
        >
          <ChevronUp size={16} />
        </button>
        <span className="stepper-counter">
          0{activeSectorIndex + 1} / 0{SECTIONS.length}
        </span>
        <button
          type="button"
          className="stepper-btn"
          onClick={onNextSector}
          title="Next Orbital Sector"
          aria-label="Next Orbital Sector"
        >
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Scroll Prompt Notice */}
      <div className="scroll-indicator-pill">
        <span className="scroll-wheel-icon" />
        <span className="scroll-text">SCROLL TO ROTATE</span>
      </div>
    </aside>
  );
};
