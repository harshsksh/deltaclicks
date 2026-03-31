'use client';

import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = true,
  ...props
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.2)' } : {}}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
