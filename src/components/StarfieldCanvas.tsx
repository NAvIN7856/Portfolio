import React, { useEffect, useRef } from 'react';

interface StarfieldProps {
  rotation: number;
}

export const StarfieldCanvas: React.FC<StarfieldProps> = ({ rotation }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate static and twinkling stars
    const starCount = Math.floor((width * height) / 3500);
    const stars = Array.from({ length: Math.min(starCount, 350) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.5,
      baseAlpha: Math.random() * 0.7 + 0.3,
      alpha: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.8 ? '#7dd3fc' : Math.random() > 0.6 ? '#fef08a' : '#ffffff',
    }));

    // Shooting stars
    interface ShootingStar {
      x: number;
      y: number;
      len: number;
      speed: number;
      angle: number;
      alpha: number;
      active: boolean;
    }

    let shootingStar: ShootingStar | null = null;
    let nextShootingStarTime = Date.now() + 3000;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Distant deep-space nebula gradient
      const grad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        width * 0.05,
        width * 0.5,
        height * 0.6,
        width * 0.8
      );
      grad.addColorStop(0, 'rgba(14, 30, 60, 0.45)');
      grad.addColorStop(0.5, 'rgba(10, 18, 38, 0.3)');
      grad.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Parallax shift based on Earth rotation
      const parallaxX = (rotation * 0.2) % width;

      // Draw stars
      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed * star.twinkleDir;
        if (star.alpha >= 1) {
          star.alpha = 1;
          star.twinkleDir = -1;
        } else if (star.alpha <= star.baseAlpha * 0.4) {
          star.alpha = star.baseAlpha * 0.4;
          star.twinkleDir = 1;
        }

        const renderX = (star.x + parallaxX + width) % width;
        ctx.beginPath();
        ctx.arc(renderX, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.shadowBlur = star.size > 1.5 ? 6 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
      });

      // Reset global alpha & shadow
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      // Draw shooting star
      const now = Date.now();
      if (!shootingStar && now > nextShootingStarTime) {
        shootingStar = {
          x: Math.random() * width * 0.8,
          y: Math.random() * height * 0.3,
          len: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 10,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          alpha: 1,
          active: true,
        };
        nextShootingStarTime = now + Math.random() * 7000 + 4000;
      }

      if (shootingStar && shootingStar.active) {
        ctx.beginPath();
        const endX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.len;
        const endY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.len;

        const ssGrad = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          endX,
          endY
        );
        ssGrad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.alpha})`);
        ssGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.strokeStyle = ssGrad;
        ctx.lineWidth = 2;
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.alpha -= 0.02;

        if (
          shootingStar.alpha <= 0 ||
          shootingStar.x > width ||
          shootingStar.y > height
        ) {
          shootingStar = null;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [rotation]);

  return (
    <canvas
      ref={canvasRef}
      className="starfield-canvas"
      aria-hidden="true"
    />
  );
};
