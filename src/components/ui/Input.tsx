import type { InputHTMLAttributes } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  name: string;
  error?: string;
  icon?: LucideIcon;
  containerClassName?: string;
}

export default function Input({
  label,
  name,
  error,
  icon: Icon,
  className,
  containerClassName,
  required,
  disabled,
  ...props
}: InputProps) {
  return (
    <div className={cn('w-full', containerClassName)}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-dark mb-1.5"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-4 w-4 text-gray-medium" />
          </div>
        )}
        <input
          id={name}
          name={name}
          required={required}
          disabled={disabled}
          className={cn(
            'w-full rounded-lg border bg-white px-4 py-3 text-dark placeholder:text-gray-medium transition-all duration-300',
            'focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary',
            'disabled:bg-gray-100 disabled:cursor-not-allowed',
            Icon && 'pl-10',
            error
              ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
              : 'border-gray-light hover:border-secondary/50',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
