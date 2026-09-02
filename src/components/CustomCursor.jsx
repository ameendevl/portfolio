import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ hoverText }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover');
      setIsHovered(!!isInteractive);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#BE4B28] rounded-full pointer-events-none z-[999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 0 : 1,
          opacity: hoverText ? 0 : 1
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#BE4B28]/60 pointer-events-none z-[998] flex items-center justify-center text-[10px] font-semibold tracking-wider text-white bg-[#BE4B28] hidden md:flex"
        animate={{
          x: mousePosition.x - (hoverText ? 40 : isHovered ? 24 : 16),
          y: mousePosition.y - (hoverText ? 40 : isHovered ? 24 : 16),
          width: hoverText ? 80 : isHovered ? 48 : 32,
          height: hoverText ? 80 : isHovered ? 48 : 32,
          opacity: hoverText ? 1 : isHovered ? 0.85 : 0.35,
          backgroundColor: hoverText ? '#BE4B28' : isHovered ? 'rgba(190,75,40,0.15)' : 'transparent'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {hoverText && (
          <span className="uppercase text-[9px] text-center px-1 font-mono tracking-tight leading-none text-white">
            {hoverText}
          </span>
        )}
      </motion.div>
    </>
  );
}
