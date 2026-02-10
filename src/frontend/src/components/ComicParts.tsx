import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ComicPartProps {
  children: ReactNode;
  className?: string;
}

/**
 * Caption box - narrative text at top/bottom of panels
 */
export function CaptionBox({ children, className }: ComicPartProps) {
  return (
    <div
      className={cn(
        'caption-box rounded-sm px-3 py-2 text-sm italic',
        'bg-muted/80 text-muted-foreground border-2 border-border',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Speech bubble - character dialogue
 */
export function SpeechBubble({ children, className }: ComicPartProps) {
  return (
    <div
      className={cn(
        'speech-bubble rounded-lg px-4 py-3 relative',
        'bg-background border-3 border-foreground',
        'shadow-[2px_2px_0_oklch(var(--foreground))]',
        className
      )}
    >
      <div className="font-semibold text-base leading-relaxed">{children}</div>
    </div>
  );
}

/**
 * Thought bubble - character internal thoughts
 */
export function ThoughtBubble({ children, className }: ComicPartProps) {
  return (
    <div
      className={cn(
        'thought-bubble rounded-full px-4 py-3 relative',
        'bg-secondary/20 border-2 border-dashed border-secondary',
        className
      )}
    >
      <div className="font-medium text-sm italic leading-relaxed">{children}</div>
    </div>
  );
}

/**
 * SFX text - sound effects with bold comic styling
 */
export function SfxText({ children, className }: ComicPartProps) {
  return (
    <div
      className={cn(
        'sfx-text text-center py-2',
        'font-black text-2xl uppercase tracking-wider',
        'text-primary drop-shadow-[2px_2px_0_oklch(var(--primary-foreground))]',
        'transform -rotate-3',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Scene label - location/time indicators
 */
export function SceneLabel({ children, className }: ComicPartProps) {
  return (
    <div
      className={cn(
        'scene-label px-3 py-1 inline-block rounded-sm',
        'bg-accent text-accent-foreground border-2 border-accent-foreground',
        'text-xs font-bold uppercase tracking-wide',
        className
      )}
    >
      {children}
    </div>
  );
}
