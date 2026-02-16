import { useState, useCallback, useEffect, useRef } from 'react';
import type { NarrationScriptItem } from '@/lib/narration';

export type NarrationStatus = 'idle' | 'playing' | 'paused';

export interface VoiceConfig {
  milesVoice?: SpeechSynthesisVoice;
  jeffersonVoice?: SpeechSynthesisVoice;
  defaultVoice?: SpeechSynthesisVoice;
  rate?: number;
  pitch?: number;
}

interface UseStoryNarrationOptions {
  script: NarrationScriptItem[];
  voiceConfig?: VoiceConfig;
}

interface UseStoryNarrationReturn {
  status: NarrationStatus;
  isSupported: boolean;
  error: string | null;
  start: () => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

/**
 * Custom hook that uses the Web Speech API (speechSynthesis) to narrate text.
 * Provides browser capability detection, status management, playback controls,
 * and per-speaker voice selection.
 */
export function useStoryNarration({ script, voiceConfig }: UseStoryNarrationOptions): UseStoryNarrationReturn {
  const [status, setStatus] = useState<NarrationStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [isSupported] = useState(() => 'speechSynthesis' in window);
  
  const currentIndexRef = useRef(0);
  const utterancesRef = useRef<SpeechSynthesisUtterance[]>([]);
  const isPausedRef = useRef(false);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (isSupported && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSupported]);

  const stop = useCallback(() => {
    if (!isSupported) return;
    
    window.speechSynthesis.cancel();
    currentIndexRef.current = 0;
    utterancesRef.current = [];
    isPausedRef.current = false;
    setStatus('idle');
    setError(null);
  }, [isSupported]);

  const speakNext = useCallback(() => {
    if (!isSupported || currentIndexRef.current >= script.length) {
      // Finished narrating all lines
      setStatus('idle');
      currentIndexRef.current = 0;
      return;
    }

    const item = script[currentIndexRef.current];
    const utterance = new SpeechSynthesisUtterance(item.text);
    
    // Apply voice selection based on speaker
    if (voiceConfig) {
      if (item.speaker === 'Miles' && voiceConfig.milesVoice) {
        utterance.voice = voiceConfig.milesVoice;
      } else if (item.speaker === 'Jefferson' && voiceConfig.jeffersonVoice) {
        utterance.voice = voiceConfig.jeffersonVoice;
      } else if (voiceConfig.defaultVoice) {
        utterance.voice = voiceConfig.defaultVoice;
      }

      // Apply rate and pitch within safe ranges
      if (voiceConfig.rate !== undefined) {
        utterance.rate = Math.max(0.1, Math.min(10, voiceConfig.rate));
      }
      if (voiceConfig.pitch !== undefined) {
        utterance.pitch = Math.max(0, Math.min(2, voiceConfig.pitch));
      }
    }
    
    utterance.onend = () => {
      currentIndexRef.current++;
      if (!isPausedRef.current) {
        speakNext();
      }
    };

    utterance.onerror = (event) => {
      setError(`Narration error: ${event.error}`);
      setStatus('idle');
      currentIndexRef.current = 0;
    };

    utterancesRef.current.push(utterance);
    window.speechSynthesis.speak(utterance);
  }, [isSupported, script, voiceConfig]);

  const start = useCallback(() => {
    if (!isSupported) {
      setError('Text-to-speech is not supported in your browser. Please try Chrome, Edge, or Safari.');
      return;
    }

    if (script.length === 0) {
      setError('No content to narrate.');
      return;
    }

    // Stop any existing narration
    window.speechSynthesis.cancel();
    
    setError(null);
    setStatus('playing');
    currentIndexRef.current = 0;
    utterancesRef.current = [];
    isPausedRef.current = false;
    
    speakNext();
  }, [isSupported, script, speakNext]);

  const pause = useCallback(() => {
    if (!isSupported || status !== 'playing') return;
    
    window.speechSynthesis.pause();
    isPausedRef.current = true;
    setStatus('paused');
  }, [isSupported, status]);

  const resume = useCallback(() => {
    if (!isSupported || status !== 'paused') return;
    
    window.speechSynthesis.resume();
    isPausedRef.current = false;
    setStatus('playing');
  }, [isSupported, status]);

  return {
    status,
    isSupported,
    error,
    start,
    pause,
    resume,
    stop,
  };
}
