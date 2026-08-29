import type { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'light' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-dark shadow-md hover:shadow-lg hover:shadow-accent/30',
  secondary:
    'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white shadow-md',
  dark: 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg',
  light: 'bg-secondary text-white hover:bg-secondary-dark shadow-md hover:shadow-lg',
  outline:
    'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  icon = false,
  children,
  className,
  onClick,
  type = 'button',
  disabled,
  href,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group',
    variantStyles[variant],
    sizeStyles[size],
    variant === 'primary' && 'hover:glow-pulse',
    className
  );

  const motionProps = {
    whileHover: disabled ? undefined : { scale: 1.05 },
    whileTap: disabled ? undefined : { scale: 0.97 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  };

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
