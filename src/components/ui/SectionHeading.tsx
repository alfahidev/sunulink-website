import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';
import Badge from './Badge';

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ title, subtitle, badge, centered = false, light = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col', centered && 'items-center text-center', className)}
        {...props}
      >
        {badge && (
          <Badge variant="accent" className="mb-4">
            {badge}
          </Badge>
        )}
        <h2
          className={cn(
            'text-3xl md:text-4xl font-bold tracking-tight mb-4 font-sans',
            light ? 'text-white' : 'text-primary'
          )}
        >
          {title}
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-6" />
        {subtitle && (
          <p
            className={cn(
              'max-w-2xl text-lg',
              light ? 'text-gray-200' : 'text-gray-600'
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = 'SectionHeading';

export default SectionHeading;
