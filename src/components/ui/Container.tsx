import { forwardRef, type ReactNode, type HTMLAttributes, type ElementType } from 'react';
import { cn } from '@/utils/cn';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
}

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, className, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export default Container;
