import { ReactNode } from "react";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients, radius, shadows, spacing } from "../constants/theme";

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  rightSlot?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function PrimaryButton({
  label,
  onPress,
  disabled = false,
  variant = "primary",
  rightSlot,
  style,
}: Props) {
  const primary = variant === "primary";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [styles.pressWrap, style, (pressed || disabled) && styles.buttonDim]}
    >
      {primary ? (
        <LinearGradient colors={gradients.primary} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.button}>
          <View style={styles.row}>
            <Text style={styles.primaryText}>{label}</Text>
            {rightSlot}
          </View>
        </LinearGradient>
      ) : (
        <View style={styles.secondaryButton}>
          <View style={styles.row}>
            <Text style={styles.secondaryText}>{label}</Text>
            {rightSlot}
          </View>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressWrap: {
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
    borderRadius: radius.md,
  },
  button: {
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    alignItems: "center",
    ...shadows.strong,
  },
  secondaryButton: {
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    ...shadows.soft,
  },
  buttonDim: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
  },
  primaryText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  secondaryText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "700",
  },
});
