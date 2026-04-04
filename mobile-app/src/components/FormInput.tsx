import { useMemo, useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { colors, radius, shadows, spacing } from "../constants/theme";

type Props = TextInputProps & {
  label: string;
};

export function FormInput({ label, style, ...rest }: Props) {
  const [focused, setFocused] = useState(false);

  const inputStyles = useMemo(() => [styles.input, focused && styles.inputFocused, style], [focused, style]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...rest}
        onFocus={(event) => {
          setFocused(true);
          rest.onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          rest.onBlur?.(event);
        }}
        style={inputStyles}
        placeholderTextColor={colors.muted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: spacing.md,
  },
  label: {
    color: colors.text,
    fontSize: 13,
    marginBottom: spacing.xs,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  input: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.md,
    color: colors.text,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: 16,
    ...shadows.soft,
  },
  inputFocused: {
    borderColor: colors.primary,
    backgroundColor: "#FFFDFD",
  },
});
