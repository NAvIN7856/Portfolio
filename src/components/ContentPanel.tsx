import React, { useState } from 'react';
import {
  ExternalLink,
  Send,
  Cpu,
  CheckCircle2,
  ArrowDown,
  ArrowUp,
  Zap,
  Compass,
  Code2,
  Briefcase,
  Sparkles,
  Mail,
  FolderGit2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  SECTIONS,
  PROJECTS,
  SKILL_CATEGORIES,
  EXPERIENCES,
  PROFILE,
} from '../data/portfolioData';

interface ContentPanelProps {
  activeSectorIndex: number;
  isRotating?: boolean;
  targetSectorIndex?: number;
  onNavigate: (index: number) => void;
  cardRef?: React.Ref<HTMLDivElement>;
}

/** Scroll cue that also works from the keyboard. */
const ScrollCue: React.FC<{
  direction: 'up' | 'down' | 'none';
  label: string;
  onActivate?: () => void;
  className?: string;
}> = ({ direction, label, onActivate, className = '' }) => {
  if (direction === 'none') {
    return (
      <div className={`section-scroll-cue end-cue ${className}`}>
        <span className="cue-dot" />
        <span className="cue-text">{label}</span>
      </div>
    );
  }

  return (
    <div
      className={`section-scroll-cue ${direction === 'up' ? 'top-cue' : ''} ${className}`}
      role="button"
      tabIndex={0}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onActivate?.();
        }
      }}
    >
      {direction === 'up' ? (
        <ArrowUp size={14} className="cue-arrow-bounce" />
      ) : (
        <span className="cue-dot" />
      )}
      <span className="cue-text">{label}</span>
      {direction === 'down' && <ArrowDown size={14} className="cue-arrow-bounce" />}
    </div>
  );
};

export const ContentPanel: React.FC<ContentPanelProps> = ({
  activeSectorIndex,
  isRotating = false,
  targetSectorIndex = 0,
  onNavigate,
  cardRef,
}) => {
  const currentSection = SECTIONS[activeSectorIndex];
  const targetSection = SECTIONS[targetSectorIndex] || currentSection;
  const [activeProjectTab, setActiveProjectTab] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const activeProject = PROJECTS[activeProjectTab];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSent(true);
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
    <main className="content-fullscreen-stage" aria-live="polite">
      <div
        ref={cardRef}
        className={`content-fullscreen-viewport sector-view-${activeSectorIndex} ${isRotating ? 'content-transit-active' : ''
          }`}
      >
        {/* Top status strip */}
        <div className="section-meta-header">
          <div className="category-indicator-pill">
            <span className="pill-dot" />
            <span className="pill-title">
              {isRotating
                ? `ORBIT TRANSIT // CATEGORY 0${targetSectorIndex + 1}`
                : currentSection.badge}
            </span>
          </div>
          <div className="astronaut-crew-tag">
            <span className="crew-dot" />
            <span className="crew-desc">
              {isRotating
                ? `Moving to ${targetSection.astronautDescription}`
                : currentSection.astronautDescription}
            </span>
          </div>
        </div>

        {/* Transit overlay while the globe rotates */}
        {isRotating && (
          <div className="fullscreen-transit-banner">
            <div className="transit-hud-glass">
              <div className="transit-beacon-ring">
                <Compass className="transit-compass-spin text-cyan" size={32} />
              </div>
              <div className="transit-details">
                <span className="transit-badge-tag">ORBITAL ROTATION IN PROGRESS</span>
                <h2 className="transit-heading">Aligning to {targetSection.title}</h2>
                <p className="transit-sub">
                  Target station: {targetSection.role} · Astronaut 0{targetSectorIndex + 1}
                </p>
                <div className="transit-pulse-bar">
                  <div className="transit-pulse-fill" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 01 · INFORMATION ─────────────────────────────────────── */}
        {!isRotating && activeSectorIndex === 0 && (
          <div className="category-panel category-information">
            <div className="info-hero-grid">
              <div className="info-main-content hud-surface">
                <div className="hero-callout-tag">
                  <Sparkles size={14} className="text-cyan" />
                  <span>Systems online · personal dossier</span>
                </div>

                <h1 className="hero-display-name">
                  {PROFILE.name}
                  <span className="name-last">{PROFILE.surname}</span>
                </h1>

                <p className="hero-role-lead">{PROFILE.headline}</p>
                <p className="hero-narrative">{PROFILE.lead}</p>

                <div className="hero-readout">
                  {/* {PROFILE.readout.map((row) => (
                    <div key={row.label} className="readout-row">
                      <span className="readout-label">{row.label}</span>
                      <span>
                        <span className="readout-value">{row.value}</span>
                        <span className="readout-note">{row.note}</span>
                      </span>
                    </div>
                  ))} */}
                </div>

                <div className="hero-action-buttons">
                  <button type="button" className="btn-action-primary" onClick={() => onNavigate(1)}>
                    <Code2 size={16} />
                    <span>See what I work with</span>
                  </button>
                  <button type="button" className="btn-action-secondary" onClick={() => onNavigate(2)}>
                    <FolderGit2 size={16} />
                    <span>Browse projects</span>
                  </button>
                  <button type="button" className="btn-action-secondary" onClick={() => onNavigate(3)}>
                    <Briefcase size={16} />
                    <span>Read the flight log</span>
                  </button>
                </div>
              </div>
            </div>

            <ScrollCue
              direction="down"
              label="Scroll to rotate the globe to my skills"
              onActivate={() => onNavigate(1)}
            />
          </div>
        )}

        {/* ── 02 · SKILLS ──────────────────────────────────────────── */}
        {!isRotating && activeSectorIndex === 1 && (
          <div className="category-panel category-skills">
            <ScrollCue
              direction="up"
              label="Back to information"
              onActivate={() => onNavigate(0)}
            />

            <div className="section-header-block">
              <h2 className="section-display-title">{currentSection.title}</h2>
              <p className="section-display-subtitle">
                The stack I reach for, and what I have actually built with each piece
              </p>
            </div>

            <div className="skills-three-column-grid scroll-region">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="skill-category-solid-card">
                  <div className="skill-cat-header-row">
                    <Cpu size={18} className="text-cyan" />
                    <h3 className="skill-cat-title">{cat.title}</h3>
                  </div>
                  {/* <p className="skill-cat-caption">{cat.caption}</p> */}

                  <div className="skill-items-list">
                    {cat.skills.map((sk) => (
                      <div key={sk.name} className="skill-item-row">
                        <div className="skill-info-top">
                          <span className="skill-item-name">{sk.name}</span>
                          <span className="skill-item-level">{sk.level}</span>
                        </div>
                        <div
                          className="skill-progress-track"
                          role="meter"
                          aria-valuenow={sk.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${sk.name} confidence`}
                        >
                          <div className="skill-progress-fill" style={{ width: `${sk.level}%` }} />
                        </div>
                        <span className="skill-item-note">{sk.note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <ScrollCue
              direction="down"
              label="Scroll to rotate the globe to my projects"
              onActivate={() => onNavigate(2)}
            />
          </div>
        )}

        {/* ── 03 · PROJECTS ────────────────────────────────────────── */}
        {!isRotating && activeSectorIndex === 2 && (
          <div className="category-panel category-projects">
            <ScrollCue direction="up" label="Back to my skills" onActivate={() => onNavigate(1)} />

            <div className="projects-top-header">
              <div className="section-header-block">
                <h2 className="section-display-title">{currentSection.title}</h2>
                <p className="section-display-subtitle">
                  Five builds, each picked for the part that was hard
                </p>
              </div>

              <div className="project-tabs-row" role="tablist" aria-label="Projects">
                {PROJECTS.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={activeProjectTab === idx}
                    className={`proj-tab-button ${activeProjectTab === idx ? 'tab-selected' : ''}`}
                    onClick={() => setActiveProjectTab(idx)}
                  >
                    <span className="tab-idx">0{idx + 1}</span>
                    <span className="tab-name">{p.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {activeProject && (
              <div className="project-feature-solid-card scroll-region">
                <div className="proj-meta-ribbon">
                  <span className="proj-category-pill">{activeProject.category}</span>
                  <span className="proj-metrics-pill">
                    <Zap size={14} className="text-solar" />
                    {activeProject.metrics}
                  </span>
                </div>

                <h3 className="proj-big-title">{activeProject.title}</h3>

                <div className="proj-body-column">
                  <p className="proj-big-desc">{activeProject.description}</p>
                  {/* <p className="proj-detail-text">{activeProject.detail}</p> */}
                </div>

                <div className="proj-side-column">
                  <div>
                    <span className="proj-side-label">Built with</span>
                    <div className="proj-tech-tags">
                      {activeProject.tags.map((tag) => (
                        <span key={tag} className="tech-tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="proj-action-links">
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link-solid primary"
                    >
                      <span>Open the live demo</span>
                      <ExternalLink size={15} />
                    </a>
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link-solid secondary"
                    >
                      <span>Read the code</span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

            <ScrollCue
              direction="down"
              label="Scroll to rotate the globe to my work experience"
              onActivate={() => onNavigate(3)}
            />
          </div>
        )}

        {/* ── 04 · EXPERIENCE ──────────────────────────────────────── */}
        {!isRotating && activeSectorIndex === 3 && (
          <div className="category-panel category-experience">
            <ScrollCue direction="up" label="Back to my projects" onActivate={() => onNavigate(2)} />

            <div className="section-header-block">
              <h2 className="section-display-title">{currentSection.title}</h2>
              <p className="section-display-subtitle">
                Where the work has happened so far, and how to reach me
              </p>
            </div>

            <div className="experience-and-contact-layout">
              <div className="experience-items-stack scroll-region">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.role} className="experience-solid-card">
                    <div className="exp-period-badge">{exp.period}</div>
                    <div className="exp-details-block">
                      <div className="exp-title-row">
                        <h4 className="exp-role-title">{exp.role}</h4>
                        <span className="exp-org-tag">{exp.organization}</span>
                      </div>
                      <p className="exp-summary-text">{exp.description}</p>
                      <ul className="exp-bullet-points">
                        {exp.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-uplink-solid-card">
                <div className="uplink-card-header">
                  <Mail size={18} className="text-cyan" />
                  <h3 className="uplink-card-title">Send a transmission</h3>
                </div>
                <p className="uplink-subtext">
                  Hiring, collaborating, or just want to know how the virtualizer works? Write to me
                  here and I will reply from {PROFILE.email}.
                </p>

                {formSent ? (
                  <div className="transmission-success-box">
                    <CheckCircle2 size={36} className="text-emerald" />
                    <h4>Message received</h4>
                    <p>It is in my inbox. Expect a reply within a day or two.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="fullscreen-form">
                    <div className="input-field-group">
                      <label htmlFor="form-callsign">Your name</label>
                      <input
                        id="form-callsign"
                        type="text"
                        required
                        placeholder="Alex Rivera"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="input-field-group">
                      <label htmlFor="form-email">Where I should reply</label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="input-field-group">
                      <label htmlFor="form-payload">What you have in mind</label>
                      <textarea
                        id="form-payload"
                        rows={4}
                        required
                        placeholder="A role, a project, a question about something on this page…"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="btn-send-uplink">
                      <Send size={14} />
                      <span>Send message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            <ScrollCue direction="none" label="Final orbital station · end of dossier" />
          </div>
        )}
      </div>
    </main>
  );
};