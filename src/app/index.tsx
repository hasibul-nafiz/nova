import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BuddyPicker } from '@/components/home/BuddyPicker';
import { HomeHeader } from '@/components/home/HomeHeader';
import { GradientBackground } from '@/components/ui/GradientBackground';
import { useResponsive } from '@/hooks/useResponsive';
import { spacing } from '@/theme';

export default function HomeScreen() {
  const { horizontalPadding } = useResponsive();

  return (
    <GradientBackground>
      <SafeAreaView style={styles.safe}>
        <ScrollView
          contentContainerStyle={[styles.content, { paddingHorizontal: horizontalPadding }]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <HomeHeader
            eyebrow="Your adventure starts here"
            title="Choose your mission buddy"
            subtitle="Pick the character that feels right for you. You can change it later."
          />
          <BuddyPicker />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xl,
    paddingVertical: spacing.xl,
  },
});
