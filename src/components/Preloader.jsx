import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#121110] text-[#F5F3EF] p-8 md:p-16 select-none cursor-wait"
        >
          <div className="flex justify-between items-center text-xs tracking-widest uppercase text-[#99938C]">
            <span>Ameen — Studio</span>
            <span>Portfolio 2026</span>
          </div>

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase mb-4"
            >
              AMEEN DEV
            </motion.h1>
            <p className="font-serif italic text-lg sm:text-2xl text-[#C8C2B9] max-w-xl">
              Architecting thoughtful digital experiences, spatial interfaces, & systems.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-xs uppercase tracking-widest text-[#88827B]">
                Initialising Experience
              </span>
              <span className="font-mono text-3xl sm:text-5xl font-light text-[#BE4B28]">
                {progress}%
              </span>
            </div>
            <div className="w-full h-[2px] bg-[#2A2826] overflow-hidden">
              <motion.div
                className="h-full bg-[#BE4B28]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
