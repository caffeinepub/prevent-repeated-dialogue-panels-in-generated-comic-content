import { useState, useEffect } from 'react';

interface UseSpeechSynthesisVoicesReturn {
  voices: SpeechSynthesisVoice[];
  isLoading: boolean;
  isReady: boolean;
}

/**
 * Custom hook that loads and tracks available browser SpeechSynthesis voices.
 * Handles delayed loading via the voiceschanged event.
 */
export function useSpeechSynthesisVoices(): UseSpeechSynthesisVoicesReturn {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setIsLoading(false);
      return;
    }

    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      setIsLoading(false);
    };

    // Load voices immediately if available
    loadVoices();

    // Listen for voiceschanged event (some browsers load voices asynchronously)
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
    };
  }, []);

  return {
    voices,
    isLoading,
    isReady: !isLoading && voices.length > 0,
  };
}
