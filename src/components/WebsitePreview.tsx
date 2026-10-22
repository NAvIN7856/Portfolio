
import React, { useEffect, useRef, useState } from "react";

interface WebsitePreviewProps {
  url: string;
  title: string;
}

const VIEWPORT_WIDTH = 1440;
const VIEWPORT_HEIGHT = 810;

export const WebsitePreview: React.FC<WebsitePreviewProps> = ({
  url,
  title,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / VIEWPORT_WIDTH);
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="preview-frame"
      style={
        {
          "--preview-scale": scale,
          "--preview-height": `${VIEWPORT_HEIGHT * scale}px`,
        } as React.CSSProperties
      }
    >
      <div className="preview-scale">
        <iframe
          src={url}
          title={`${title} live preview`}
          loading="lazy"
          allow="fullscreen"
        />
      </div>
    </div>
  );
};
