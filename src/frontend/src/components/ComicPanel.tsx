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
        'comic-panel rounded-sm p-4 animate-pop-in',
        variant === 'highlight' && 'bg-accent text-accent-foreground',
        variant === 'credits' && 'bg-muted text-muted-foreground',
        className
      )}
    >
      <div className="text-base leading-relaxed">{children}</div>
    </div>
  );
}
