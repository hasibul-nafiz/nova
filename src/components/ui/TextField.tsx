import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native';

import { colors, fonts } from '@/theme';

type Props = Omit<TextInputProps, 'style'> & { fontSize?: number };

export function TextField({ fontSize = 18, ...inputProps }: Props) {
  return (
    <View style={styles.shell}>
      <TextInput
        placeholderTextColor={colors.inputPlaceholder}
        selectionColor={colors.primary}
        autoCapitalize="none"
        autoCorrect={false}
        style={[styles.input, { fontSize }]}
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    backgroundColor: colors.inputBackground,
    borderBottomColor: colors.inputShadow,
    borderBottomWidth: 4,
    borderRadius: 10,
  },
  input: {
    fontFamily: fonts.semibold,
    color: colors.textHeading,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
});
