import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '@/theme';

type Props = { size?: number };

export function Logo({ size = 22 }: Props) {
  return (
    <View style={styles.row} accessibilityRole="header" accessibilityLabel="Nova">
      <LinearGradient
        colors={['#7C5CFF', '#38BDF8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
      <Text style={[styles.text, { fontSize: size * 0.85 }]}>NOVA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  text: { fontFamily: fonts.extrabold, color: colors.brand, letterSpacing: 0.5 },
});
