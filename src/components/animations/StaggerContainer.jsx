'use client';

import { motion } from 'framer-motion';

export default function StaggerContainer({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 0.6,
          staggerChildren: staggerDelay,
          delayChildren: delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
