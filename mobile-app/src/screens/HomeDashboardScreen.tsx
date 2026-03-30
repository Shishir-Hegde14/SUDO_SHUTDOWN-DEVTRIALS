import { StyleSheet, Text } from "react-native";
import { InfoCard } from "../components/InfoCard";
import { ScreenContainer } from "../components/ScreenContainer";
import { colors, spacing, typography } from "../constants/theme";
import { useAppStore } from "../store/AppContext";

export function HomeDashboardScreen() {
  const { onboarding } = useAppStore();

  return (
    <ScreenContainer>
      <Text style={styles.title}>Home Dashboard</Text>
      <Text style={styles.subtitle}>Welcome back, {onboarding.fullName || "Rider"}</Text>

      <InfoCard title="Current setup" subtitle="Profile snapshot">
        <Text style={styles.row}>Work app: {onboarding.workApp || "Not set"}</Text>
        <Text style={styles.row}>Vehicle: {onboarding.vehicleType || "Not set"}</Text>
        <Text style={styles.row}>Work area: {onboarding.workAreaCenter || "Not set"}</Text>
      </InfoCard>

      <InfoCard title="Schedule" subtitle="Your selected working window">
        <Text style={styles.row}>Days: {onboarding.workingDays.length ? onboarding.workingDays.join(", ") : "Not set"}</Text>
        <Text style={styles.row}>Start: {onboarding.workStartTime || "Not set"}</Text>
        <Text style={styles.row}>End: {onboarding.workEndTime || "Not set"}</Text>
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
  row: {
    color: colors.text,
    lineHeight: 22,
  },
});
