import React from 'react';

interface SkillIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, className = '', size = 20 }) => {
  const n = name.trim().toLowerCase();

  // Languages
  if (n === 'javascript' || n === 'js') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M6.5 17.2c.4.7.9 1.2 1.8 1.2.9 0 1.5-.4 1.5-1.4v-6.5h1.9v6.5c0 2-1.2 3-3.2 3-1.6 0-2.6-.8-3.1-2l1.1-.8zm8.2.3c.6.9 1.4 1.4 2.5 1.4 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-1.9-1.7l-.6-.3c-1.8-.8-2.9-1.7-2.9-3.4 0-1.7 1.3-3 3.3-3 1.5 0 2.6.5 3.3 1.8l-1.5 1c-.4-.7-.9-1-1.8-1-.8 0-1.4.5-1.4 1.1 0 .7.5 1 1.7 1.5l.6.3c2 .9 3.2 1.8 3.2 3.6 0 2.1-1.6 3.2-3.8 3.2-2.1 0-3.3-1-4-2.3l1.6-1.3z" fill="#000000" />
      </svg>
    );
  }

  if (n === 'typescript' || n === 'ts') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M6 10.5h6v1.8H9.9v7.2H8v-7.2H6v-1.8zm9.5 5.5c.5.6 1.2.9 2.1.9.9 0 1.5-.4 1.5-1 0-.7-.5-1-1.5-1.4l-.5-.2c-1.5-.6-2.4-1.3-2.4-2.7 0-1.4 1.1-2.4 2.8-2.4 1.3 0 2.2.4 2.8 1.4l-1.3.9c-.3-.5-.7-.8-1.5-.8-.7 0-1.2.3-1.2.9 0 .5.4.8 1.3 1.2l.5.2c1.7.7 2.6 1.4 2.6 2.9 0 1.7-1.3 2.6-3.1 2.6-1.7 0-2.7-.8-3.3-1.8l1.2-.7z" fill="#ffffff" />
      </svg>
    );
  }

  if (n === 'java') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M9.1 19.3s-1.8.1-1.3.9c.7 1.1 2.4.9 3.7.8 1.7-.1 3.5-.7 3.5-.7s.7.4.3.7c-.8.6-3.1.9-4.8 1-2.4.1-4.7-.5-3.3-2.1 1.2-1.3 1.9-.6 1.9-.6zm-.8-3.4s-2.1.2-1.6 1.1c.6 1.1 2.6.8 4.2.7 2.1-.2 4.4-.7 4.4-.7s.8.4.4.8c-.9.7-3.7 1-5.7 1.1-2.8.1-5.6-.5-3.9-2.4 1.4-1.5 2.2-.6 2.2-.6zm3.3-5.3c.7.8.5 1.5-.1 2.3-1 1.2-2.3 2-2.3 2s1.7-.4 2.7-1.5c.8-.9 1.1-1.7.5-2.7-.8-1.3-3.2-2.7-2.3-4.5.3-.6.9-1.1 1.5-1.6-1.5.8-2.3 2.2-1.9 3.3.4 1 1.4 1.8 1.9 2.7zm3.8 6.4c-1.3.9-3.2 1.3-5.2 1.4-2.4.1-4.7-.4-3.4-1.8 1.2-1.3 1.8-.6 1.8-.6s-1.8.2-1.3.9c.7 1 2.4.8 3.8.7 1.8-.1 3.6-.6 3.6-.6s.6.3.7.7v-.7zm-1.8-8.2c.4.5.3 1-.1 1.5-.7.8-1.5 1.4-1.5 1.4s1.1-.3 1.8-1c.5-.6.7-1.2.3-1.8-.5-.9-2.1-1.8-1.5-3 .2-.4.6-.7 1-1.1-1 .5-1.5 1.4-1.2 2.2.3.7.9 1.3 1.2 1.8z" fill="#EA2D2E" />
      </svg>
    );
  }

  if (n === 'python') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M11.9 2c-3.1 0-5.1 1.4-5.1 4.1v2.1h5.3v.8H4.6C2.2 9 2 11.2 2 13.9c0 2.8 1.9 4.1 4.3 4.1h1.8v-2.5c0-2.3 2-4.1 4.3-4.1h5.3v-.8c0-2.7-2-4.6-5.8-4.6zm-2 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#3776AB" />
        <path d="M12.1 22c3.1 0 5.1-1.4 5.1-4.1v-2.1h-5.3v-.8h7.5c2.4 0 2.6-2.2 2.6-4.9 0-2.8-1.9-4.1-4.3-4.1h-1.8v2.5c0 2.3-2 4.1-4.3 4.1H6.3v.8c0 2.7 2 4.6 5.8 4.6zm2-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFD43B" />
      </svg>
    );
  }

  if (n === 'html5' || n === 'html') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M3 2l1.6 18.2L12 22.4l7.4-2.2L21 2H3z" fill="#E34F26" />
        <path d="M12 3.8v16.7l5.8-1.7 1.3-15H12z" fill="#EF652A" />
        <path d="M12 8.4H7.5l.3 3.3H12v-3.3zm0 6.6H7.9l.2 2.2 3.9 1.1V15z" fill="#EBEBEB" />
        <path d="M12 8.4h4.5l-.4 4.5-.1 1.2H12v3.3l3.9-1.1.4-4.5h-4.3V8.4z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (n === 'css3' || n === 'css') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M3 2l1.6 18.2L12 22.4l7.4-2.2L21 2H3z" fill="#1572B6" />
        <path d="M12 3.8v16.7l5.8-1.7 1.3-15H12z" fill="#33A9DC" />
        <path d="M12 8.2H7.5l.2 2.8H12V8.2zm0 5.4H9.6l.2 2 2.2.6v-2.6z" fill="#EBEBEB" />
        <path d="M12 8.2h4.5l-.2 2.8H12v2.6h2.2l-.2 2.2-2 .6V19l4.1-1.1.5-6.9H12V8.2z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Frontend
  if (n.includes('react') && !n.includes('fiber')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    );
  }

  if (n === 'vite') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M21.7 3.6l-9.2 17-9.2-17 9.2 4.6 9.2-4.6z" fill="url(#viteGrad)" />
        <path d="M13.2 4l-4.9 9.3 3.6-.8-2.6 6.3 6.9-10.2-3.8.8.8-5.4z" fill="#FFD800" />
        <defs>
          <linearGradient id="viteGrad" x1="3.3" y1="3.6" x2="21.7" y2="20.6" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (n.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.3 3.4-1.1 1 .1 1.7.9 2.5 1.7 1.3 1.3 2.7 2.8 6.1 2.8 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.4 1.1-1-.1-1.7-.9-2.5-1.7C16.8 7.5 15.4 6 12 6zm-7.5 7c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.3 3.4-1.1 1 .1 1.7.9 2.5 1.7 1.3 1.3 2.7 2.8 6.1 2.8 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.4 1.1-1-.1-1.7-.9-2.5-1.7-1.3-1.3-2.7-2.8-6.1-2.8z" fill="#38BDF8" />
      </svg>
    );
  }

  if (n.includes('responsive')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="4" width="14" height="12" rx="2" />
        <rect x="14" y="8" width="8" height="12" rx="2" />
      </svg>
    );
  }

  if (n.includes('api') && !n.includes('fastapi')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    );
  }

  // Backend
  if (n.includes('node')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2l9 5.2v10.4L12 22.8l-9-5.2V7.2L12 2z" fill="#5FA04E" />
        <path d="M12 4.3l6.8 3.9v7.8L12 19.9l-6.8-3.9V8.2L12 4.3z" fill="#333333" />
        <path d="M10.8 9.5v5h2.4v-3.2l1.6 3.2h1.6V9.5H14v3.2l-1.6-3.2h-1.6z" fill="#5FA04E" />
      </svg>
    );
  }

  if (n === 'flask') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 3h6M10 3v5l-6 10.5A2 2 0 0 0 5.7 21h12.6a2 2 0 0 0 1.7-2.5L14 8V3" />
        <path d="M7 16h10" />
      </svg>
    );
  }

  if (n === 'fastapi') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" fill="#059669" />
        <path d="M12.5 5L7 13h5l-1 6 6.5-8.5h-5l1-5.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (n.includes('websocket')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 12v-3a8 8 0 0 1 16 0v3" />
        <path d="M8 12v-1a4 4 0 0 1 8 0v1" />
        <circle cx="12" cy="14" r="2" fill="#F59E0B" />
        <path d="M12 16v5" />
      </svg>
    );
  }

  // AI/ML
  if (n.includes('vision') || n.includes('opencv')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="7" r="4" fill="#EA4335" />
        <circle cx="7" cy="16" r="4" fill="#4285F4" />
        <circle cx="17" cy="16" r="4" fill="#34A853" />
        <circle cx="12" cy="7" r="2" fill="#030712" />
        <circle cx="7" cy="16" r="2" fill="#030712" />
        <circle cx="17" cy="16" r="2" fill="#030712" />
      </svg>
    );
  }

  if (n.includes('pytorch')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M13.5 3.5a7 7 0 0 0-4.9 12l2.4-2.4a3.5 3.5 0 1 1 5-5l1.6-1.6a7 7 0 0 0-4.1-3z" fill="#EE4C2C" />
        <circle cx="17" cy="6" r="1.5" fill="#EE4C2C" />
      </svg>
    );
  }

  if (n.includes('tensorflow')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2l8 4.6v4.6l-4-2.3v10.5l-4 2.3V2z" fill="#FF6F00" />
        <path d="M12 2L4 6.6v4.6l4-2.3v10.5l4 2.3V2z" fill="#FFA800" />
      </svg>
    );
  }

  if (n.includes('yolo')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
        <circle cx="12" cy="12" r="3" fill="#10B981" />
      </svg>
    );
  }

  // 3D & Visualization
  if (n.includes('three') || n.includes('fiber')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2l9 5.2v9.6L12 22l-9-5.2V7.2L12 2z" stroke="#38BDF8" strokeWidth="1.8" />
        <path d="M12 2v20M3 7.2l18 9.6M21 7.2L3 16.8" stroke="#38BDF8" strokeWidth="1.4" opacity="0.7" />
      </svg>
    );
  }

  if (n.includes('webgl') || n.includes('glsl')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" fill="#990000" />
        <path d="M12 6.5l5 2.8v5.6l-5 2.8-5-2.8V9.3l5-2.8z" fill="#FFFFFF" />
        <circle cx="12" cy="12" r="2" fill="#990000" />
      </svg>
    );
  }

  if (n.includes('graph') || n.includes('network')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="6" cy="6" r="3" fill="#818CF8" />
        <circle cx="18" cy="6" r="3" fill="#818CF8" />
        <circle cx="12" cy="18" r="3" fill="#818CF8" />
        <line x1="8.5" y1="7.5" x2="15.5" y2="7.5" />
        <line x1="7.5" y1="8.5" x2="10.5" y2="15.5" />
        <line x1="16.5" y1="8.5" x2="13.5" y2="15.5" />
      </svg>
    );
  }

  // Database & DevOps
  if (n.includes('mongo')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2s-6 6.5-6 11.5c0 4.5 3.5 7.5 6 8.5 2.5-1 6-4 6-8.5C18 8.5 12 2 12 2z" fill="#47A248" />
        <path d="M12 2v20c.5-.2 1.5-.7 2.2-1.5 2-2 3.8-5 3.8-9 0-4-4.5-8.5-6-9.5z" fill="#4DB33D" />
        <path d="M12 21.5V11" stroke="#FFFFFF" strokeWidth="0.8" />
      </svg>
    );
  }

  if (n === 'git') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M21.6 10.7L13.3 2.4c-.6-.6-1.5-.6-2.1 0L9.1 4.5l2.7 2.7c.6-.2 1.4 0 1.9.5.5.5.7 1.3.5 1.9l2.6 2.6c.6-.2 1.4 0 1.9.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.4-.4-2.1L13.3 10v4.7c.3.2.6.5.7.9.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.4-.4.9-.6 1.4-.6V9.8c-.5 0-1-.2-1.4-.6-.6-.6-.7-1.4-.4-2.1L8.3 4.4 2.4 10.3c-.6.6-.6 1.5 0 2.1l8.3 8.3c.6.6 1.5.6 2.1 0l8.8-8.8c.6-.6.6-1.6 0-2.2z" fill="#F05032" />
      </svg>
    );
  }

  if (n.includes('github actions')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" fill="#2088FF" />
        <path d="M7 12l3.5 3.5 7-7" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (n === 'github') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (n.includes('docker')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M13.9 11.2h2.2v2h-2.2v-2zm-3 0h2.2v2h-2.2v-2zm-3 0h2.2v2H7.9v-2zm-3 0h2.2v2H4.9v-2zm6-2.8h2.2v2h-2.2v-2zm-3 0h2.2v2H7.9v-2zm-3 0h2.2v2H4.9v-2zm6-2.8h2.2v2h-2.2v-2zm10.7 8.3c-.6-.4-1.7-.5-2.6-.1-.2-.8-.7-1.5-1.4-2l-.6-.4-.4.6c-.3.6-.3 1.4 0 2.1-.5.3-1.4.3-2 .3H2.2c-.3 1.2 0 2.8.9 4.1 1.2 1.7 3.2 2.6 5.8 2.6 5.2 0 9.2-3 10.7-6.9.7.1 1.5 0 2-.4l.7-.6-.7-.3z" fill="#2496ED" />
      </svg>
    );
  }

  // Fallback default tech chip icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
};
