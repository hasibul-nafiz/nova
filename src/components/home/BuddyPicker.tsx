import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BuddyList } from '@/components/buddy/BuddyList';
import { IdForm } from '@/components/home/IdForm';
import { Button } from '@/components/ui/Button';
import { BUDDIES } from '@/data/buddies';
import { useResponsive } from '@/hooks/useResponsive';
import { colors, fonts, spacing } from '@/theme';
import type { BuddyId } from '@/types/buddy';

export function BuddyPicker() {
  const { cardWidth, gap, contentWidth, font } = useResponsive();
  const [userId, setUserId] = useState('');
  const [selectedId, setSelectedId] = useState<BuddyId | null>(null);

  return (
    <View style={[styles.container, { width: contentWidth }]}>
      <View style={styles.idRow}>
        <IdForm value={userId} onChangeText={setUserId} />
      </View>

      <BuddyList
        buddies={BUDDIES}
        cardWidth={cardWidth}
        gap={gap}
        selectedId={selectedId}
        onSelect={(buddy) => setSelectedId(buddy.id)}
      />

      <View style={styles.footer}>
        <Button
          label={selectedId ? 'Continue' : 'Choose a buddy to continue'}
          disabled={!selectedId}
          fontSize={font(22, 17)}
          style={styles.cta}
        />
        <Text style={[styles.note, { fontSize: font(17, 14) }]}>
          No personal information is required.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', gap: spacing.xl },
  idRow: { alignSelf: 'stretch', alignItems: 'center' },
  footer: { alignSelf: 'stretch', alignItems: 'center', gap: spacing.md, marginTop: spacing.md },
  cta: { alignSelf: 'stretch', maxWidth: 520, width: '100%' },
  note: { fontFamily: fonts.regular, color: colors.textMuted, textAlign: 'center' },
});
