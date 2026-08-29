import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import Card from './Card';

export interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function IconCard({
  icon: Icon,
  title,
  description,
  className,
}: IconCardProps) {
  return (
    <motion.div
      whileHover="hover"
      variants={{
        hover: { y: -5 },
      }}
      className={className}
    >
      <Card hover={true} className="h-full group">
        <motion.div
          className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:text-accent transition-colors duration-300"
          variants={{
            hover: { scale: 1.1 },
          }}
        >
          <Icon className="w-7 h-7" />
        </motion.div>
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
}
