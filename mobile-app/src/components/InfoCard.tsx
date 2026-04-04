import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, radius, shadows, spacing } from "../constants/theme";

type Props = PropsWithChildren<{
  title: string;
  subtitle?: string;
}>;

export function InfoCard({ title, subtitle, children }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderColor: colors.border,
    borderWidth: 1,
    marginBottom: spacing.md,
    ...shadows.soft,
  },
  title: {
    color: colors.text,
    fontWeight: "800",
    fontSize: 17,
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  subtitle: {
    color: colors.muted,
    marginBottom: spacing.sm,
  },
  content: {
    gap: spacing.xs,
  },
});
