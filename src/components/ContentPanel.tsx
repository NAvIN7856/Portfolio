import React, { useState } from "react";
import {
  ExternalLink,
  Send,
  Cpu,
  CheckCircle2,
  Code2,
  Briefcase,
  Sparkles,
  Mail,
  FolderGit2,
  Zap,
  MapPin,
  Clock,
  Layers,
  Terminal,
  ShieldCheck,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SkillIcon } from "./SkillIcon";
import {
  PROJECTS,
  SKILL_CATEGORIES,
  EXPERIENCES,
  PROFILE,
} from "../data/portfolioData";
import { WebsitePreview } from "./WebsitePreview";

interface ContentPanelProps {
  onNavigateSection?: (index: number) => void;
}

export const ContentPanel: React.FC<ContentPanelProps> = ({
  onNavigateSection,
}) => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSent(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.4 },
      colors: ["#38bdf8", "#818cf8", "#f59e0b", "#10b981"],
    });

    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="content-scroll-flow">
      {/* ── 01 · INFORMATION (HERO) ─────────────────────────────────────── */}
      <section
        id="section-information"
        className="scroll-page-section category-information"
      >
        <div className="section-meta-header">
          <div className="category-indicator-pill">
            <span className="pill-dot" />
            <span className="pill-title">SECTOR 01 // INFORMATION</span>
          </div>
          <div className="astronaut-crew-tag">
            <span className="crew-dot" />
            <span className="crew-desc">Commander — Mission Control</span>
          </div>
        </div>

        <div className="info-hero-grid">
          <div className="info-main-content hud-surface">
            <div className="hud-corner top-left" />
            <div className="hud-corner top-right" />
            <div className="hud-corner bottom-left" />
            <div className="hud-corner bottom-right" />

            <div className="hero-callout-tag">
              <Sparkles size={14} className="text-cyan" />
              <span>ORBITAL TELEMETRY ONLINE · CANDIDATE DOSSIER</span>
            </div>

            <h1 className="hero-display-name">
              {PROFILE.name}{" "}
              <span className="name-last">{PROFILE.surname}</span>
            </h1>

            <p className="hero-role-lead">{PROFILE.headline}</p>
            <p className="hero-narrative">{PROFILE.lead}</p>

            <div className="hero-action-buttons">
              <button
                type="button"
                className="btn-action-primary"
                onClick={() => scrollTo("section-projects")}
              >
                <FolderGit2 size={16} />
                <span>Explore Projects</span>
              </button>
              <button
                type="button"
                className="btn-action-secondary"
                onClick={() => scrollTo("section-skills")}
              >
                <Code2 size={16} />
                <span>Tech Stack</span>
              </button>
              <button
                type="button"
                className="btn-action-secondary"
                onClick={() => scrollTo("section-experience")}
              >
                <Briefcase size={16} />
                <span>Flight Log</span>
              </button>
            </div>
          </div>

          {/* Recruiter Quick Spec Dossier Card */}
          <aside className="hero-spec-card hud-surface">
            <div className="hud-corner top-left" />
            <div className="hud-corner top-right" />
            <div className="hud-corner bottom-left" />
            <div className="hud-corner bottom-right" />

            <div className="spec-card-header">
              <Terminal size={16} className="text-cyan" />
              <span className="spec-card-title">MISSION SPECIFICATIONS</span>
            </div>

            <div className="spec-items-list">
              <div className="spec-row">
                <span className="spec-label">
                  <MapPin size={13} className="text-cyan" /> LOCATION
                </span>
                <span className="spec-val">Bengaluru, India / Remote</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">
                  <Clock size={13} className="text-cyan" /> STATUS
                </span>
                <span className="spec-val status-available">
                  <span className="avail-dot" /> Open to Opportunities
                </span>
              </div>
              <div className="spec-row">
                <span className="spec-label">
                  <Layers size={13} className="text-cyan" /> FOCUS
                </span>
                <span className="spec-val">Full-Stack & Systems Dev</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">
                  <ShieldCheck size={13} className="text-cyan" /> SPECIALTY
                </span>
                <span className="spec-val">React, Node, TypeScript, Cloud</span>
              </div>
            </div>

            <div className="spec-card-footer">
              <a href={`mailto:${PROFILE.email}`} className="btn-spec-contact">
                <Mail size={14} />
                <span>Transmit Inquiry</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ── 02 · SKILLS ──────────────────────────────────────────── */}
      <section
        id="section-skills"
        className="scroll-page-section category-skills"
      >
        <div className="section-meta-header">
          <div className="category-indicator-pill">
            <span className="pill-dot" />
            <span className="pill-title">SECTOR 02 // SKILLS</span>
          </div>
          <div className="astronaut-crew-tag">
            <span className="crew-dot" />
            <span className="crew-desc">Flight Engineer — Systems Check</span>
          </div>
        </div>

        <div className="section-header-block">
          <h2 className="section-display-title">Technical Avionics</h2>
          <p className="section-display-subtitle">
            Core technologies, runtime environments, and engineering toolsets
          </p>
        </div>

        <div className="skills-three-column-grid">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="skill-category-solid-card hud-surface"
            >
              <div className="hud-corner top-left" />
              <div className="hud-corner top-right" />
              <div className="hud-corner bottom-left" />
              <div className="hud-corner bottom-right" />

              <div className="skill-cat-header-row">
                <div className="cat-icon-chip">
                  <Cpu size={18} className="text-cyan" />
                </div>
                <div>
                  <h3 className="skill-cat-title">{cat.title}</h3>
                  <span className="skill-cat-count">
                    {cat.skills.length} MODULES READY
                  </span>
                </div>
              </div>

              <div className="skills-badge-grid">
                {cat.skills.map((sk) => (
                  <div
                    key={sk.name}
                    className="skill-badge-card"
                    title={sk.name}
                  >
                    <div className="skill-icon-wrapper">
                      <SkillIcon name={sk.name} size={22} />
                    </div>
                    <span className="skill-badge-name">{sk.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03 · PROJECTS ────────────────────────────────────────── */}
      <section
        id="section-projects"
        className="scroll-page-section category-projects"
      >
        <div className="section-meta-header">
          <div className="category-indicator-pill">
            <span className="pill-dot" />
            <span className="pill-title">SECTOR 03 // PROJECTS</span>
          </div>
          <div className="astronaut-crew-tag">
            <span className="crew-dot" />
            <span className="crew-desc">
              Payload Specialist — Cargo Manifest
            </span>
          </div>
        </div>

        <div className="projects-top-header">
          <div className="section-header-block">
            <h2 className="section-display-title">Payload Manifest</h2>
            <p className="section-display-subtitle">
              Engineered software products, scalable backends, and complex
              interactive applications
            </p>
          </div>

          {/* Quick jump tabs for projects */}
          <div
            className="project-tabs-row"
            role="navigation"
            aria-label="Project Jump Links"
          >
            {PROJECTS.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                className="proj-tab-button"
                onClick={() => scrollTo(`project-${p.id}`)}
              >
                <span className="tab-idx">0{idx + 1}</span>
                <span className="tab-name">{p.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* List of projects rendered as high-impact dossiers */}
        <div className="projects-list-stack">
          {PROJECTS.map((p, idx) => (
            <div
              key={p.id}
              id={`project-${p.id}`}
              className="project-feature-solid-card hud-surface project-card-item"
            >
              <div className="hud-corner top-left" />
              <div className="hud-corner top-right" />
              <div className="hud-corner bottom-left" />
              <div className="hud-corner bottom-right" />

              <div className="proj-meta-ribbon">
                <span className="proj-idx-badge">PAYLOAD 0{idx + 1}</span>
                <span className="proj-category-pill">{p.category}</span>
                <span className="proj-metrics-pill">
                  <Zap size={14} className="text-solar" />
                  {p.metrics}
                </span>
              </div>

              <div className="proj-content-split">
                <div className="proj-body-column">
                  <h3 className="proj-big-title">{p.title}</h3>
                  <p className="proj-big-desc">{p.description}</p>
                  {p.detail && (
                    <div className="proj-detail-box">
                      <span className="detail-tag">ENGINEERING HIGHLIGHT</span>
                      <p className="proj-detail-text">{p.detail}</p>
                    </div>
                  )}
                  <ul className="exp-bullet-points">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="proj-side-column">
                  <div>
                    <span className="proj-side-label">TECH STACK</span>
                    <div className="proj-tech-tags">
                      {p.tags.map((tag) => (
                        <span key={tag} className="tech-tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="proj-action-links">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link-solid primary"
                    >
                      <span>Launch Live Demo</span>
                      <ExternalLink size={15} />
                    </a>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link-solid secondary"
                    >
                      <span>Source Code</span>
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
                  <WebsitePreview url={p.liveUrl} title={p.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04 · EXPERIENCE & CONTACT ────────────────────────────── */}
      <section
        id="section-experience"
        className="scroll-page-section category-experience"
      >
        <div className="section-meta-header">
          <div className="category-indicator-pill">
            <span className="pill-dot" />
            <span className="pill-title">SECTOR 04 // EXPERIENCE & UPLINK</span>
          </div>
          <div className="astronaut-crew-tag">
            <span className="crew-dot" />
            <span className="crew-desc">Mission Archivist — Flight Log</span>
          </div>
        </div>

        <div className="section-header-block">
          <h2 className="section-display-title">Flight Log & Uplink</h2>
          <p className="section-display-subtitle">
            Historical mission timeline, professional trajectory, and direct
            communication frequency
          </p>
        </div>

        <div className="experience-and-contact-layout">
          <div className="experience-items-stack">
            {EXPERIENCES.map((exp) => (
              <div key={exp.role} className="experience-solid-card hud-surface">
                <div className="hud-corner top-left" />
                <div className="hud-corner top-right" />
                <div className="hud-corner bottom-left" />
                <div className="hud-corner bottom-right" />

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

          <div className="contact-uplink-solid-card hud-surface">
            <div className="hud-corner top-left" />
            <div className="hud-corner top-right" />
            <div className="hud-corner bottom-left" />
            <div className="hud-corner bottom-right" />

            <div className="uplink-card-header">
              <div className="cat-icon-chip">
                <Mail size={18} className="text-cyan" />
              </div>
              <div>
                <h3 className="uplink-card-title">Send a Transmission</h3>
                <span className="uplink-badge">
                  FREQUENCY: 2.4 GHz ENCRYPTED
                </span>
              </div>
            </div>
            <p className="uplink-subtext">
              Looking to collaborate, recruit, or discuss an architecture
              challenge? Send a signal directly to {PROFILE.email}.
            </p>

            {formSent ? (
              <div className="transmission-success-box">
                <CheckCircle2 size={36} className="text-emerald" />
                <h4>Transmission Acknowledged</h4>
                <p>
                  Telemetry recorded in inbox. Expect a response within 24-48
                  standard hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="fullscreen-form">
                <div className="input-field-group">
                  <label htmlFor="form-callsign">CALLSIGN / NAME</label>
                  <input
                    id="form-callsign"
                    type="text"
                    required
                    placeholder="Alex Rivera"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="input-field-group">
                  <label htmlFor="form-email">RETURN FREQUENCY / EMAIL</label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="input-field-group">
                  <label htmlFor="form-payload">
                    MISSION PAYLOAD / MESSAGE
                  </label>
                  <textarea
                    id="form-payload"
                    rows={4}
                    required
                    placeholder="Provide mission details, technical opportunities, or collaboration proposals…"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="btn-send-uplink">
                  <Send size={14} />
                  <span>Broadcast Transmission</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
