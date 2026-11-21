import { LinearGradient } from 'expo-linear-gradient';
import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '@/theme';

type Props = { children: ReactNode };

export function GradientBackground({ children }: Props) {
  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientMid, colors.gradientEnd]}
      locations={[0, 0.55, 1]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.fill}>
      <View pointerEvents="none" style={[styles.ring, styles.ringTop]} />
      <View pointerEvents="none" style={[styles.ring, styles.ringBottom]} />
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  ring: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(91, 75, 219, 0.08)',
    borderRadius: 999,
  },
  ringTop: { width: 520, height: 520, top: -300, right: -220 },
  ringBottom: { width: 520, height: 520, bottom: -300, left: -240 },
});
