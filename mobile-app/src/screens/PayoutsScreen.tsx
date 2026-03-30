import { StyleSheet, Text } from "react-native";
import { InfoCard } from "../components/InfoCard";
import { ScreenContainer } from "../components/ScreenContainer";
import { colors, spacing, typography } from "../constants/theme";

export function PayoutsScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Payouts</Text>
      <Text style={styles.subtitle}>Latest payout summary (mock).</Text>

      <InfoCard title="Upcoming payout" subtitle="Expected next cycle">
        <Text style={styles.amount}>INR 2,450</Text>
        <Text style={styles.meta}>This value is placeholder data.</Text>
      </InfoCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    ...typography.heading,
    marginBottom: 4,
  },
  subtitle: {
    color: colors.muted,
    marginBottom: spacing.lg,
  },
  amount: {
    color: colors.success,
    fontSize: 30,
    fontWeight: "800",
  },
  meta: {
    color: colors.muted,
  },
});
