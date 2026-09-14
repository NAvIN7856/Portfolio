import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Compass, Radio, Terminal, Sparkles, ExternalLink } from 'lucide-react';
import { SECTIONS } from '../data/portfolioData';

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

  return (
    <header className="cosmic-header">
      {/* Brand & Mission Status */}
      <div className="header-brand-group">
        <div className="status-indicator">
          <span className="status-beacon" />
          <span className="status-ping" />
        </div>
        <div className="brand-titles">
          <div className="brand-logo">
            <span className="brand-name">NAVIN</span>
            <span className="brand-tag">MISSION ORBITAL</span>
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
          const labels = ['MISSION', 'EXPEDITION', 'PAYLOADS', 'SIGNAL'];
          return (
            <button
              key={sec.id}
              type="button"
              className={`nav-sector-btn ${isActive ? 'nav-sector-active' : ''}`}
              onClick={() => onSelectSector(idx)}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="nav-index">0{idx + 1}</span>
              <span className="nav-label">{labels[idx]}</span>
              {isActive && <span className="nav-glow-underline" />}
            </button>
          );
        })}
      </nav>

      {/* Action Controls & Sound */}
      <div className="header-actions">
        <button
          type="button"
          className={`sound-toggle-btn ${soundEnabled ? 'sound-active' : ''}`}
          onClick={onToggleSound}
          title={soundEnabled ? 'Mute Atmospheric Audio' : 'Enable Space Audio'}
          aria-label="Toggle Cosmic Audio"
        >
          {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span className="sound-status-label">{soundEnabled ? 'AUDIO ON' : 'AUDIO OFF'}</span>
        </button>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link-btn"
          title="Open GitHub Profile"
        >
          <span>GITHUB</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </header>
  );
};
