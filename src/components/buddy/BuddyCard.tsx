import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text } from 'react-native';

import { Pill } from '@/components/ui/Pill';
import { colors, fonts, radius } from '@/theme';
import type { Buddy } from '@/types/buddy';

type Props = {
  buddy: Buddy;
  width: number;
  selected?: boolean;
  onPress?: (buddy: Buddy) => void;
};

export function BuddyCard({ buddy, width, selected = false, onPress }: Props) {
  const nameSize = Math.round(Math.min(Math.max(width * 0.085, 14), 26));
  const pillSize = Math.round(Math.min(Math.max(width * 0.06, 11), 20));
  const padding = Math.round(Math.min(Math.max(width * 0.06, 8), 20));

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
    borderWidth: 1,
    borderRadius: radius.lg,
    alignItems: 'center',
    gap: 10,
  },
  selected: {
    borderColor: colors.primary,
    borderWidth: 3,
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
