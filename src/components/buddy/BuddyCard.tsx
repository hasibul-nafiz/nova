import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text } from 'react-native';

import { Pill } from '@/components/ui/Pill';
import { colors, fonts, radius } from '@/theme';
import type { Buddy } from '@/types/buddy';

const DEFAULT_BORDER = 1;
const SELECTED_BORDER = 3;

type Props = {
  buddy: Buddy;
  width: number;
  selected?: boolean;
  onPress?: (buddy: Buddy) => void;
};

export function BuddyCard({ buddy, width, selected = false, onPress }: Props) {
  const nameSize = Math.round(Math.min(Math.max(width * 0.085, 14), 26));
  const pillSize = Math.round(Math.min(Math.max(width * 0.06, 11), 20));
  const basePadding = Math.round(Math.min(Math.max(width * 0.06, 8), 20));
  // The selected border is thicker; shave the padding so the content doesn't shift.
  const padding = selected ? basePadding - (SELECTED_BORDER - DEFAULT_BORDER) : basePadding;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${buddy.name}, ${buddy.ageRange}`}
      accessibilityState={{ selected }}
      onPress={() => onPress?.(buddy)}
      style={({ pressed }) => [
        styles.card,
        { width, padding, transform: [{ scale: pressed ? 0.97 : 1 }] },
        selected && styles.selected,
      ]}>
      <Image source={buddy.image} contentFit="contain" style={styles.image} />
      <Text style={[styles.name, { fontSize: nameSize }]} numberOfLines={2}>
        {buddy.name}
      </Text>
      <Pill label={buddy.ageRange} fontSize={pillSize} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: DEFAULT_BORDER,
    borderRadius: radius.lg,
    alignItems: 'center',
    gap: 10,
  },
  selected: {
    borderColor: colors.primary,
    borderWidth: SELECTED_BORDER,
    shadowColor: colors.primary,
    elevation: 6,
  },
  image: { width: '100%', aspectRatio: 1 },
  name: {
    fontFamily: fonts.extrabold,
    color: colors.textHeading,
    textAlign: 'center',
  },
});
