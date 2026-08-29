import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-10%' });

  const getDirectionVariants = () => {
    switch (direction) {
      case 'up':
        return { y: 40, x: 0 };
      case 'down':
        return { y: -40, x: 0 };
      case 'left':
        return { x: 40, y: 0 };
      case 'right':
        return { x: -40, y: 0 };
      default:
        return { y: 40, x: 0 };
    }
  };

  const hiddenState = {
    opacity: 0,
    ...getDirectionVariants(),
  };

  return (
    <motion.div
      ref={ref}
      initial={hiddenState}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : hiddenState}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn('', className)}
    >
      {children}
    </motion.div>
  );
}
