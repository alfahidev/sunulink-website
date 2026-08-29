import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, name, placeholder, error, className, disabled, required, rows = 4, ...props }, ref) => {
    return (
      <div className={cn('w-full', className)}>
        <label htmlFor={name} className="block text-sm font-medium text-dark mb-1.5">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          ref={ref}
          disabled={disabled}
          required={required}
          rows={rows}
          className={cn(
            'block w-full rounded-lg border bg-white text-dark placeholder:text-gray-medium shadow-sm transition-all duration-300 focus:outline-none py-3 px-4',
            'focus:ring-2 focus:ring-secondary/30 focus:border-secondary',
            error
              ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
              : 'border-gray-light hover:border-secondary/50',
            disabled && 'bg-gray-100 text-gray-500 cursor-not-allowed'
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
