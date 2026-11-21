import { StyleSheet, View } from 'react-native';

import { BuddyCard } from '@/components/buddy/BuddyCard';
import type { Buddy, BuddyId } from '@/types/buddy';

type Props = {
  buddies: readonly Buddy[];
  cardWidth: number;
  gap: number;
  selectedId?: BuddyId | null;
  onSelect?: (buddy: Buddy) => void;
};

export function BuddyList({ buddies, cardWidth, gap, selectedId, onSelect }: Props) {
  return (
    <View style={[styles.row, { gap }]}>
      {buddies.map((buddy) => (
        <BuddyCard
          key={buddy.id}
          buddy={buddy}
          width={cardWidth}
          selected={buddy.id === selectedId}
          onPress={onSelect}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
});
