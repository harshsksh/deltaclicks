'use client';

import { motion } from 'framer-motion';

export default function SlideUp({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
}) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
