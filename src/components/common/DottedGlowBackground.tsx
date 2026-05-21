import { useEffect, useRef } from 'react';

interface DottedGlowBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function DottedGlowBackground({ children, className = '' }: DottedGlowBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(166, 25, 46, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Radial glow that follows cursor */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(166, 25, 46, 0.06), rgba(0, 137, 150, 0.03), transparent 60%)',
        }}
      />
      {/* Static ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ada-red/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ada-teal/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
