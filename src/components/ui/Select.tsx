import { type SelectHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      name,
      options,
      placeholder,
      error,
      className,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('w-full', className)}>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-dark mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="relative">
          <select
            id={name}
            name={name}
            ref={ref}
            disabled={disabled}
            required={required}
            className={cn(
              'block w-full appearance-none rounded-lg border bg-white text-dark shadow-sm transition-all duration-300 focus:outline-none py-3 pl-4 pr-10',
              'focus:ring-2 focus:ring-secondary/30 focus:border-secondary',
              error
                ? 'border-red-400 focus:ring-red-300 focus:border-red-400'
                : 'border-gray-light hover:border-secondary/50',
              disabled && 'bg-gray-100 text-gray-500 cursor-not-allowed'
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown
              className="h-4 w-4 text-gray-medium"
              aria-hidden="true"
            />
          </div>
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
