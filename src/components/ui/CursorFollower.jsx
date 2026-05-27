'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const lastSparkleTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create sparkles rapidly while moving for a fuller tail effect
      const now = Date.now();
      if (now - lastSparkleTime.current > 25) {
        const sparkleColor = Math.random() > 0.35 ? 'yellow' : 'white';
        const newSparkle = {
          id: now,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 4,
          rotation: Math.random() * 360,
          color: sparkleColor,
        };
        setSparkles((prev) => [...prev.slice(-30), newSparkle]); // Keep max 30 sparkles
        lastSparkleTime.current = now;
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, .hover-target')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Cleanup sparkles over time
    const interval = setInterval(() => {
      setSparkles((prev) => prev.filter((s) => Date.now() - s.id < 1000));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      clearInterval(interval);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    cursorX.set(mousePosition.x);
    cursorY.set(mousePosition.y);
  }, [mousePosition, cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Sparkles Tail */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 1, x: sparkle.x, y: sparkle.y }}
            animate={{ 
              opacity: 0, 
              scale: 0,
              y: sparkle.y + 20, // Drift down slightly
              x: sparkle.x + (Math.random() - 0.5) * 20 // Drift sideways
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute rounded-full"
            style={{
              left: -2,
              top: -2,
              rotate: sparkle.rotation,
              width: sparkle.size,
              height: sparkle.size,
              backgroundColor: sparkle.color === 'yellow' ? '#fde047' : '#ffffff',
              boxShadow:
                sparkle.color === 'yellow'
                  ? '0 0 16px rgba(253,224,71,0.95), 0 0 28px rgba(250,204,21,0.75)'
                  : '0 0 14px rgba(255,255,255,0.95), 0 0 24px rgba(255,255,255,0.65)',
            }}
          >
            {/* Inner Star Shape using CSS clip-path for extra 'sparkle' feel */}
            <div 
              className="w-full h-full" 
              style={{
                backgroundColor: sparkle.color === 'yellow' ? '#fef08a' : '#ffffff',
                filter: 'brightness(1.15)',
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main Cursor Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(156,77,255,0.8)] border border-white/50"
      />
      
      {/* Glow Effect */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-20 h-20 bg-primary/10 rounded-full blur-2xl"
      />
    </div>
  );
}
