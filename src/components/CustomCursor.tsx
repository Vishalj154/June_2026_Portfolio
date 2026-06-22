import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);

  const springConfig = { damping: 30, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Offset by half of cursor width/height to center it
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target is a link, button, card, or has cursor-pointer
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.skill-pill') || 
        target.closest('.glass-card') || 
        window.getComputedStyle(target).cursor === 'pointer';
      
      setHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: cursorXSpring,
        top: cursorYSpring,
        width: hovered ? '48px' : '32px',
        height: hovered ? '48px' : '32px',
        borderRadius: '50%',
        background: hovered ? 'rgba(37, 99, 235, 0.25)' : 'rgba(37, 99, 235, 0.15)',
        boxShadow: hovered 
          ? '0 0 35px 15px rgba(37, 99, 235, 0.25)' 
          : '0 0 20px 8px rgba(37, 99, 235, 0.15)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen',
        transformOrigin: 'center',
      }}
      animate={{
        scale: hovered ? 1.2 : 1,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    />
  );
}
