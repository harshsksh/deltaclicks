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
      whileHover={hover ? { y: -4, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' } : {}}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-2xl shadow-md overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
