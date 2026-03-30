import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FormInput } from "../components/FormInput";
import { PrimaryButton } from "../components/PrimaryButton";
import { ScreenContainer } from "../components/ScreenContainer";
import { colors, radius, shadows, spacing, typography } from "../constants/theme";
import { RootStackParamList } from "../navigation/types";
import { useAppStore } from "../store/AppContext";

type Props = NativeStackScreenProps<RootStackParamList, "Quote">;
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export function QuoteScreen({ navigation }: Props) {
  const { onboarding, updateOnboarding } = useAppStore();
  const [workingDays, setWorkingDays] = useState<string[]>(onboarding.workingDays);
  const [workStartTime, setWorkStartTime] = useState(onboarding.workStartTime);
  const [workEndTime, setWorkEndTime] = useState(onboarding.workEndTime);

  const toggleDay = (day: string) => {
    setWorkingDays((prev) => (prev.includes(day) ? prev.filter((item) => item !== day) : [...prev, day]));
  };

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Text style={styles.title}>Step 5</Text>
        <Text style={styles.subtitle}>Working days and timing</Text>
        <Text style={styles.caption}>Tap to select all the days you usually work.</Text>

        <View style={styles.dayWrap}>
          {weekDays.map((day) => {
            const selected = workingDays.includes(day);
            return (
              <Pressable key={day} style={[styles.dayChip, selected && styles.dayChipActive]} onPress={() => toggleDay(day)}>
                <Text style={[styles.dayText, selected && styles.dayTextActive]}>{day.slice(0, 3)}</Text>
              </Pressable>
            );
          })}
        </View>

        <FormInput label="Start time" value={workStartTime} placeholder="Enter start time" onChangeText={setWorkStartTime} />
        <FormInput label="End time" value={workEndTime} placeholder="Enter end time" onChangeText={setWorkEndTime} />
        <Text style={styles.note}>Approximate timing is okay.</Text>
      </View>

      <PrimaryButton
        label="Next"
        disabled={workingDays.length === 0 || !workStartTime.trim() || !workEndTime.trim()}
        onPress={() => {
          updateOnboarding({
            workingDays,
            workStartTime: workStartTime.trim(),
            workEndTime: workEndTime.trim(),
          });
          navigation.navigate("PlanSelection");
        }}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  title: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 4,
  },
  subtitle: {
    color: colors.text,
    ...typography.heading,
    marginBottom: spacing.sm,
  },
  caption: {
    color: colors.muted,
    marginBottom: spacing.md,
  },
  dayWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: spacing.lg,
  },
  dayChip: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    paddingHorizontal: 14,
    paddingVertical: 8,
    ...shadows.soft,
  },
  dayChipActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  dayText: {
    color: colors.text,
    fontWeight: "700",
  },
  dayTextActive: {
    color: colors.white,
  },
  note: {
    color: colors.muted,
    marginTop: 2,
  },
});
