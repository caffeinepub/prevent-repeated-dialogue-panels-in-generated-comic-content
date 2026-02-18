/**
 * Timeline utilities for aligning comic panels to movie runtime (1h 56m = 6960 seconds).
 */

const MOVIE_DURATION_SECONDS = 6960; // 1 hour 56 minutes

/**
 * Format seconds as HH:MM:SS.
 */
export function formatTimestamp(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Format a timestamp range.
 */
export function formatTimestampRange(start: number, end: number): string {
  return `${formatTimestamp(start)} - ${formatTimestamp(end)}`;
}

/**
 * Get timestamp display for a panel.
 */
export function getPanelTimestamp(panel: { timestamp?: number; timestampEnd?: number }): string | null {
  if (panel.timestamp === undefined) {
    return null;
  }
  
  if (panel.timestampEnd !== undefined) {
    return formatTimestampRange(panel.timestamp, panel.timestampEnd);
  }
  
  return formatTimestamp(panel.timestamp);
}
