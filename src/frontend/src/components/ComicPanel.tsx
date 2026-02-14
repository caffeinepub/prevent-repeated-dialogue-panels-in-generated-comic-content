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
        'comic-panel rounded-none p-5 md:p-6 animate-pop-in',
        'min-h-[140px] flex flex-col gap-4',
        variant === 'highlight' && 'bg-accent/5',
        variant === 'credits' && 'bg-muted/30',
        className
      )}
    >
      {children}
    </div>
  );
}
