import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ComicPanelProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'highlight' | 'credits';
}

export function ComicPanel({ children, className, variant = 'default' }: ComicPanelProps) {
  return (
    <div
      className={cn(
        'comic-panel rounded-sm p-6 animate-pop-in',
        'min-h-[120px] flex flex-col gap-3',
        variant === 'highlight' && 'bg-accent/10',
        variant === 'credits' && 'bg-muted/50',
        className
      )}
    >
      {children}
    </div>
  );
}
