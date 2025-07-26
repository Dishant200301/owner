import React from 'react';
import { motion } from 'framer-motion';

interface PlatformBadgeProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const PlatformBadge: React.FC<PlatformBadgeProps> = ({ icon, children }) => (
  <motion.li 
    className="flex items-center gap-3 bg-gray-100 rounded-lg py-2 px-4"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    {icon}
    <p className="text-xs font-medium text-gray-700">{children}</p>
  </motion.li>
);

export default PlatformBadge;