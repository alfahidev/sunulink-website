import { cn } from '@/utils/cn';
import { useCountUp } from '@/hooks/useCountUp';

export interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  light?: boolean;
}

export default function StatCard({
  value,
  suffix = '',
  label,
  className,
  light = false,
}: StatCardProps) {
  const { count, ref } = useCountUp(value, 2500);

  return (
    <div
      ref={ref}
      className={cn('flex flex-col items-center text-center p-6', className)}
    >
      <div
        className={cn(
          'text-5xl font-bold mb-2',
          light ? 'text-white' : 'text-secondary'
        )}
      >
        {count.toLocaleString('fr-FR')}
        {suffix}
      </div>
      <div
        className={cn(
          'text-lg font-medium',
          light ? 'text-gray-200' : 'text-gray-600'
        )}
      >
        {label}
      </div>
    </div>
  );
}
