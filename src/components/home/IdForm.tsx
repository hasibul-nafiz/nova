import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { TextField } from '@/components/ui/TextField';
import { useResponsive } from '@/hooks/useResponsive';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onSave?: () => void;
};

export function IdForm({ value, onChangeText, onSave }: Props) {
  const { font } = useResponsive();

  return (
    <View style={styles.row}>
      <View style={styles.input}>
        <TextField
          value={value}
          onChangeText={onChangeText}
          placeholder="type your id"
          accessibilityLabel="Your id"
          returnKeyType="done"
          fontSize={font(18, 15)}
        />
      </View>
      <Button label="save" onPress={onSave} fontSize={font(20, 16)} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, alignSelf: 'stretch' },
  input: { flex: 1, maxWidth: 380 },
  button: { minWidth: 92 },
});
