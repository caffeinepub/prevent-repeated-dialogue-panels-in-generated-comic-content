import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ComicPartProps {
  children: ReactNode;
  className?: string;
}

/**
 * Caption box - classic yellow narration box with heavy borders
 */
export function CaptionBox({ children, className }: ComicPartProps) {
  return (
    <div
      className={cn(
        'caption-box rounded-none px-4 py-2.5 text-sm',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Speech bubble - character dialogue with tail
 * Enhanced with overlay support for in-panel rendering
 */
export function SpeechBubble({ children, className }: ComicPartProps) {
  return (
    <div
      className={cn(
        'speech-bubble rounded-2xl px-5 py-3.5 mb-3',
        className
      )}
    >
      <div className="font-semibold text-base leading-snug">{children}</div>
    </div>
  );
}

/**
 * Thought bubble - character internal thoughts with dashed border
 * Enhanced with overlay support for in-panel rendering
 */
export function ThoughtBubble({ children, className }: ComicPartProps) {
  return (
    <div
      className={cn(
        'thought-bubble rounded-3xl px-5 py-3.5',
        className
      )}
    >
      <div className="font-medium text-sm italic leading-snug">{children}</div>
    </div>
  );
}

/**
 * SFX text - explosive comic sound effects
 */
export function SfxText({ children, className }: ComicPartProps) {
  return (
    <div
      className={cn(
        'sfx-text text-center py-3',
        'font-heading text-3xl md:text-4xl uppercase tracking-widest',
        'text-primary transform -rotate-2',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Scene label - location/time stamp
 */
export function SceneLabel({ children, className }: ComicPartProps) {
  return (
    <div
      className={cn(
        'scene-label px-4 py-1.5 inline-block rounded-none',
        'text-xs uppercase tracking-widest',
        className
      )}
    >
      {children}
    </div>
  );
}
