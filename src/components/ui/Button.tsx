import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, fonts, radius } from '@/theme';

type Props = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  fontSize?: number;
  style?: StyleProp<ViewStyle>;
};

const DEPTH = 5;

/** Chunky "3D" button: a darker layer sits underneath and the face sinks on press. */
export function Button({ label, onPress, disabled = false, fontSize = 20, style }: Props) {
  return (
    <View
      style={[
        styles.base,
        { backgroundColor: disabled ? colors.primaryDisabledDark : colors.primaryDark },
        style,
      ]}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ disabled }}
        disabled={disabled}
        onPress={onPress}
        style={({ pressed }) => [
          styles.face,
          {
            backgroundColor: disabled ? colors.primaryDisabled : colors.primary,
            marginBottom: pressed ? 1 : DEPTH,
            marginTop: pressed ? DEPTH - 1 : 0,
          },
        ]}>
        <Text style={[styles.label, { fontSize }]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: radius.md },
  face: {
    borderRadius: radius.md,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: { fontFamily: fonts.bold, color: colors.onPrimary },
});
