import React, { useState, useEffect } from 'react';
import { Compass, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react';
import { SECTIONS } from '../data/portfolioData';

interface SectorDialProps {
  activeSectorIndex: number;
  rotation: number;
  onSelectSector: (index: number) => void;
  scrollProgress?: number;
}

export const SectorDial: React.FC<SectorDialProps> = ({
  activeSectorIndex,
  rotation,
  onSelectSector,
  scrollProgress = 0,
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const normalizedAngle = ((Math.abs(rotation) % 360) + 360) % 360;

  return (
    <aside className="sector-dial-aside" aria-label="Orbital Telemetry & Radar">
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
          <span className="radar-subtext">ORBITAL SECTOR</span>
        </div>

        {/* Global Mission Scroll Progress Ring / Bar */}
        <div className="telemetry-progress-wrapper" title={`Mission Travel: ${Math.round(scrollProgress * 100)}%`}>
          <div
            className="telemetry-progress-fill"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>
      </div>

      {/* Orbit Steppers & Back to Top */}
      <div className="orbit-steppers">
        <button
          type="button"
          className="stepper-btn"
          disabled={activeSectorIndex <= 0}
          onClick={() => onSelectSector(Math.max(0, activeSectorIndex - 1))}
          title="Previous Sector"
          aria-label="Previous Sector"
        >
          <ChevronUp size={16} />
        </button>
        <span className="stepper-counter">
          0{activeSectorIndex + 1} / 0{SECTIONS.length}
        </span>
        <button
          type="button"
          className="stepper-btn"
          disabled={activeSectorIndex >= SECTIONS.length - 1}
          onClick={() => onSelectSector(Math.min(SECTIONS.length - 1, activeSectorIndex + 1))}
          title="Next Sector"
          aria-label="Next Sector"
        >
          <ChevronDown size={16} />
        </button>
      </div>

      {showBackToTop && (
        <button
          type="button"
          className="back-to-top-btn"
          onClick={scrollToTop}
          title="Return to Orbit Origin (Top)"
          aria-label="Return to Top"
        >
          <ArrowUp size={14} />
          <span>TOP</span>
        </button>
      )}
    </aside>
  );
};
