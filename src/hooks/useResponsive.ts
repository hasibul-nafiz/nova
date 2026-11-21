import { useWindowDimensions } from 'react-native';

import { spacing } from '@/theme';

const CONTENT_MAX_WIDTH = 960;
const COLUMNS = 3;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

/**
 * Derives layout metrics from the current window size so the screen adapts to
 * Android phones, foldables and tablets (and to rotation).
 */
export function useResponsive() {
  const { width, height } = useWindowDimensions();

  const horizontalPadding = width >= 600 ? spacing.xxl : spacing.lg;
  const contentWidth = Math.min(width - horizontalPadding * 2, CONTENT_MAX_WIDTH);
  const gap = width >= 600 ? spacing.lg : spacing.sm;
  const cardWidth = Math.floor((contentWidth - gap * (COLUMNS - 1)) / COLUMNS);

  // 1 on a ~900dp tablet, ~0.5 on a small phone.
  const scale = clamp(width / 900, 0.5, 1);

  return {
    width,
    height,
    isTablet: width >= 600,
    horizontalPadding,
    contentWidth,
    gap,
    cardWidth,
    scale,
    font: (size: number, min = 11) => Math.round(Math.max(size * scale * 1.15, min)),
  };
}
