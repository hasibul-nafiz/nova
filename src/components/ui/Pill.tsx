import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts, radius } from '@/theme';

type Props = { label: string; fontSize?: number };

export function Pill({ label, fontSize = 14 }: Props) {
  return (
    <View style={[styles.pill, { paddingVertical: fontSize * 0.4, paddingHorizontal: fontSize * 1.2 }]}>
      <Text style={[styles.text, { fontSize }]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    backgroundColor: colors.pill,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.pill,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  text: { fontFamily: fonts.semibold, color: colors.brand },
});
