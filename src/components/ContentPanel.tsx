import React, { useState } from 'react';
import {
  ExternalLink,
  Send,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SECTIONS, PROJECTS, SKILL_CATEGORIES, EXPERIENCES } from '../data/portfolioData';

interface ContentPanelProps {
  activeSectorIndex: number;
  onNavigate: (index: number) => void;
}

export const ContentPanel: React.FC<ContentPanelProps> = ({
  activeSectorIndex,
  onNavigate,
}) => {
  const currentSection = SECTIONS[activeSectorIndex];
  const [activeProjectTab, setActiveProjectTab] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSent(true);
    // Trigger cosmic confetti celebratory burst
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.4 },
      colors: ['#38bdf8', '#818cf8', '#f59e0b', '#10b981'],
    });

    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <main className="content-panel-stage" aria-live="polite">
      {/* Dynamic Content Card */}
      <div className={`content-card sector-card-${activeSectorIndex}`}>
        {/* Section Header Breadcrumb */}
        <div className="card-top-bar">
          <div className="card-badge">
            <span className="badge-glow" />
            <span className="badge-text">{currentSection.badge}</span>
          </div>
          <div className="astronaut-status-tag">
            <span className="astro-dot" />
            <span className="astro-desc">{currentSection.astronautDescription}</span>
          </div>
        </div>

        {/* SECTOR 0: MISSION COMMAND (HOME) */}
        {activeSectorIndex === 0 && (
          <div className="card-body home-section">
            <div className="hero-text-block">
              <span className="hero-greeting">SYSTEMS ONLINE // READY FOR FLIGHT</span>
              <h1 className="hero-heading">
                ARCHITECTING <span className="text-gradient">PLANETARY-SCALE</span> WEB EXPERIENCES
              </h1>
              <p className="hero-lead">
                I am <strong>Navin</strong>, a full-stack engineer and digital architect merging
                rigorous system performance with striking interactive aesthetics. Currently
                operating at the intersection of modern React, WebGL, and scalable cloud telemetry.
              </p>
            </div>

            <div className="hero-stats-row">
              <div className="stat-pill">
                <span className="stat-val">5+</span>
                <span className="stat-lbl">Years in Orbit</span>
              </div>
              <div className="stat-pill">
                <span className="stat-val">42+</span>
                <span className="stat-lbl">Deployments</span>
              </div>
              <div className="stat-pill">
                <span className="stat-val">99.99%</span>
                <span className="stat-lbl">System Uptime</span>
              </div>
              <div className="stat-pill">
                <span className="stat-val">&lt;16ms</span>
                <span className="stat-lbl">Frame Budget</span>
              </div>
            </div>

            <div className="hero-actions-row">
              <button
                type="button"
                className="btn-cosmic-primary"
                onClick={() => onNavigate(2)}
              >
                <span>Inspect Payloads</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                className="btn-cosmic-secondary"
                onClick={() => onNavigate(3)}
              >
                <Terminal size={15} />
                <span>Open Frequency</span>
              </button>
            </div>
          </div>
        )}

        {/* SECTOR 1: EXPEDITION LOG (ABOUT) */}
        {activeSectorIndex === 1 && (
          <div className="card-body about-section">
            <div className="about-header">
              <h2 className="section-title">EXPEDITION LOGBOOK</h2>
              <p className="section-subtitle">
                A track record of engineering scalable platforms, mentoring talent, and shipping
                delightful digital products.
              </p>
            </div>

            <div className="expedition-grid">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="expedition-item">
                  <div className="exp-timeline-tag">{exp.period}</div>
                  <div className="exp-content">
                    <div className="exp-role-row">
                      <span className="exp-role">{exp.role}</span>
                      <span className="exp-org">@ {exp.organization}</span>
                    </div>
                    <p className="exp-desc">{exp.description}</p>
                    <ul className="exp-highlights">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTOR 2: PAYLOAD DEPLOYMENTS (PROJECTS) */}
        {activeSectorIndex === 2 && (
          <div className="card-body projects-section">
            <div className="projects-header-row">
              <div>
                <h2 className="section-title">PAYLOAD DEPLOYMENTS</h2>
                <p className="section-subtitle">
                  Mission-critical applications, distributed engines, and open source libraries.
                </p>
              </div>

              {/* Selector Tabs */}
              <div className="project-tabs">
                {PROJECTS.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`proj-tab-btn ${activeProjectTab === idx ? 'tab-active' : ''}`}
                    onClick={() => setActiveProjectTab(idx)}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Project Highlight View */}
            {PROJECTS[activeProjectTab] && (
              <div className="project-highlight-card">
                <div className="proj-meta-bar">
                  <span className="proj-category">
                    {PROJECTS[activeProjectTab].category}
                  </span>
                  <span className="proj-metrics">
                    <Zap size={12} className="text-solar" />
                    {PROJECTS[activeProjectTab].metrics}
                  </span>
                </div>

                <h3 className="proj-title">{PROJECTS[activeProjectTab].title}</h3>
                <p className="proj-description">
                  {PROJECTS[activeProjectTab].description}
                </p>

                <div className="proj-tags-list">
                  {PROJECTS[activeProjectTab].tags.map((tag) => (
                    <span key={tag} className="proj-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="proj-links-row">
                  <a
                    href={PROJECTS[activeProjectTab].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project-link"
                  >
                    <span>Launch Mission Demo</span>
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={PROJECTS[activeProjectTab].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project-link secondary"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    <span>Inspect Repository</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SECTOR 3: SIGNAL & TELEMETRY (SKILLS & CONTACT) */}
        {activeSectorIndex === 3 && (
          <div className="card-body contact-section">
            <div className="contact-grid-layout">
              {/* Left Column: Tech Stack Matrix */}
              <div className="skills-column">
                <h2 className="section-title-sm">AVIONICS & TECH STACK</h2>
                <div className="skill-groups-wrapper">
                  {SKILL_CATEGORIES.map((cat, i) => (
                    <div key={i} className="skill-category-box">
                      <div className="skill-cat-header">
                        <Cpu size={14} className="cat-icon" />
                        <span className="cat-title">{cat.title}</span>
                      </div>
                      <div className="skill-tags-flow">
                        {cat.skills.map((sk) => (
                          <div key={sk.name} className="skill-badge-chip">
                            <span className="sk-name">{sk.name}</span>
                            <span className="sk-level">{sk.level}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Direct Uplink Form */}
              <div className="form-column">
                <h2 className="section-title-sm">DIRECT TRANSMISSION UPLINK</h2>
                {formSent ? (
                  <div className="transmission-success">
                    <CheckCircle2 size={36} className="text-emerald" />
                    <h4>TRANSMISSION RECEIVED</h4>
                    <p>Packet acknowledged by Commander Navin. Telemetry response en route.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="cosmic-form">
                    <div className="form-input-group">
                      <label htmlFor="form-callsign">CALLSIGN / NAME</label>
                      <input
                        id="form-callsign"
                        type="text"
                        required
                        placeholder="e.g. Commander Sarah"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-input-group">
                      <label htmlFor="form-email">FREQUENCY / EMAIL</label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        placeholder="sarah@orbital-station.space"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-input-group">
                      <label htmlFor="form-payload">DATA PAYLOAD / MESSAGE</label>
                      <textarea
                        id="form-payload"
                        rows={3}
                        required
                        placeholder="Describe mission objectives or collaboration proposals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="btn-cosmic-send">
                      <Send size={14} />
                      <span>Transmit Signal</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
