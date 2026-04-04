import { StyleSheet, Text } from "react-native";
import { InfoCard } from "../components/InfoCard";
import { ScreenContainer } from "../components/ScreenContainer";
import { colors, spacing, typography } from "../constants/theme";

export function ClaimsScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Claims</Text>
      <Text style={styles.subtitle}>No active claims right now.</Text>

      <InfoCard title="Status" subtitle="Everything is currently clear">
        <Text style={styles.text}>You can add full claims workflows later with backend integration.</Text>
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
  text: {
    color: colors.text,
    lineHeight: 22,
  },
});
