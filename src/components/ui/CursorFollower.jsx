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
      
      // Create a sparkle every 50ms if moving
      const now = Date.now();
      if (now - lastSparkleTime.current > 40) {
        const newSparkle = {
          id: now,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 6 + 2,
          rotation: Math.random() * 360,
        };
        setSparkles((prev) => [...prev.slice(-15), newSparkle]); // Keep max 15 sparkles
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
      setSparkles((prev) => prev.filter((s) => Date.now() - s.id < 800));
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
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              left: -2,
              top: -2,
              rotate: sparkle.rotation,
              width: sparkle.size,
              height: sparkle.size,
            }}
          >
            {/* Inner Star Shape using CSS clip-path for extra 'sparkle' feel */}
            <div 
              className="w-full h-full bg-white" 
              style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
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
