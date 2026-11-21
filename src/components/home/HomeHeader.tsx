import { StyleSheet, Text, View } from 'react-native';

import { Logo } from '@/components/brand/Logo';
import { useResponsive } from '@/hooks/useResponsive';
import { colors, fonts, spacing } from '@/theme';

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function HomeHeader({ eyebrow, title, subtitle }: Props) {
  const { font } = useResponsive();

  return (
    <View style={styles.container}>
      <Logo size={font(22, 18)} />
      <Text style={[styles.eyebrow, { fontSize: font(18, 14) }]}>{eyebrow}</Text>
      <Text accessibilityRole="header" style={[styles.title, { fontSize: font(40, 28) }]}>
        {title}
      </Text>
      <Text style={[styles.subtitle, { fontSize: font(17, 14) }]}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', gap: spacing.sm },
  eyebrow: { fontFamily: fonts.regular, color: colors.brand, marginTop: spacing.md },
  title: { fontFamily: fonts.extrabold, color: colors.textPrimary, textAlign: 'center' },
  subtitle: { fontFamily: fonts.regular, color: colors.textMuted, textAlign: 'center' },
});
