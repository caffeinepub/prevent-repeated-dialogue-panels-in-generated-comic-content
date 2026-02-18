import { useState } from 'react';

interface VerifiedPanelImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: (src: string) => void;
}

const FALLBACK_IMAGE = '/assets/generated/comic-missing-panel.dim_1024x768.png';

/**
 * Image component that reports load failures and falls back to a placeholder.
 * Preserves layout with aspect-ratio so text overlays continue to work.
 */
export function VerifiedPanelImage({ src, alt, className, onError }: VerifiedPanelImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && imageSrc !== FALLBACK_IMAGE) {
      setHasError(true);
      setImageSrc(FALLBACK_IMAGE);
      if (onError) {
        try {
          onError(src);
        } catch (err) {
          console.error('Error in onError callback:', err);
        }
      }
    }
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}
