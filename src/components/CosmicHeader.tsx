import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Compass, Sparkles, ExternalLink, FileText, Radio } from 'lucide-react';
import { SECTIONS, PROFILE } from '../data/portfolioData';
import { SkillIcon } from './SkillIcon';

interface CosmicHeaderProps {
  activeSectorIndex: number;
  rotation: number;
  onSelectSector: (index: number) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const CosmicHeader: React.FC<CosmicHeaderProps> = ({
  activeSectorIndex,
  rotation,
  onSelectSector,
  soundEnabled,
  onToggleSound,
}) => {
  const [missionTime, setMissionTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const utcString = now.toUTCString().split(' ')[4] || '00:00:00';
      setMissionTime(`MET ${utcString} UTC`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLabels = ['01 ABOUT', '02 SKILLS', '03 PROJECTS', '04 EXPERIENCE'];

  return (
    <header className="cosmic-header" role="banner" aria-label="Flight Deck Navigation">
      {/* Brand & Mission Status */}
      <div className="header-brand-group">
        <div className="status-indicator" title="Orbital Uplink Active">
          <span className="status-beacon" />
          <span className="status-ping" />
        </div>
        <div className="brand-titles">
          <div className="brand-logo">
            <span className="brand-name">{PROFILE.name.toUpperCase()}</span>
            <span className="brand-tag">ORBITAL DOSSIER</span>
          </div>
          <div className="brand-telemetry">
            <span className="telemetry-item">{missionTime}</span>
            <span className="telemetry-divider">•</span>
            <span className="telemetry-item">ALT 408 KM</span>
            <span className="telemetry-divider">•</span>
            <span className="telemetry-item highlight">
              {Math.abs(Math.round(rotation))}° BEARING
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Sector Buttons */}
      <nav className="header-nav" aria-label="Orbital Sector Navigation">
        {SECTIONS.map((sec, idx) => {
          const isActive = activeSectorIndex === idx;
          return (
            <button
              key={sec.id}
              type="button"
              className={`nav-sector-btn ${isActive ? 'nav-sector-active' : ''}`}
              onClick={() => onSelectSector(idx)}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="nav-label">{navLabels[idx]}</span>
              {isActive && <span className="nav-glow-underline" />}
            </button>
          );
        })}
      </nav>

      {/* Action Controls*/}
      <div className="header-actions">
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="header-link-btn primary-uplink"
          title="LinkedIn Profile"
        >
          <SkillIcon name="linkedin" size={13} />
          <span>LINKEDIN</span>
        </a>

        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="header-link-btn primary-uplink"
          title="GitHub Profile"
        >
          <SkillIcon name="github" size={13} />
          <span>GITHUB</span>
        </a>

      </div>
    </header>
  );
};

