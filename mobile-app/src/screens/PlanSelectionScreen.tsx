import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import { InfoCard } from "../components/InfoCard";
import { PrimaryButton } from "../components/PrimaryButton";
import { ScreenContainer } from "../components/ScreenContainer";
import { colors, spacing, typography } from "../constants/theme";
import { RootStackParamList } from "../navigation/types";
import { useAppStore } from "../store/AppContext";
import * as Location from "expo-location";

type Props = NativeStackScreenProps<RootStackParamList, "PlanSelection">;

export function PlanSelectionScreen({ navigation }: Props) {
  const { onboarding, updateOnboarding } = useAppStore();
  const [loading, setLoading] = useState(false);
  const [workAreaCenter, setWorkAreaCenter] = useState(onboarding.workAreaCenter);
  const [workAreaRegion, setWorkAreaRegion] = useState(onboarding.workAreaRegion);

  const detectWorkArea = async () => {
    try {
      setLoading(true);
      const permission = await Location.requestForegroundPermissionsAsync();
      if (permission.status !== "granted") {
        Alert.alert("Permission needed", "Please allow location permission so we can set your work area.");
        return;
      }

      const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
      const { latitude, longitude } = position.coords;
      const latDelta = 0.03;
      const lngDelta = 0.03;

      const center = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
      const region = `Approx 3km radius. Bounds: ${(latitude - latDelta).toFixed(5)}, ${(
        longitude - lngDelta
      ).toFixed(5)} to ${(latitude + latDelta).toFixed(5)}, ${(longitude + lngDelta).toFixed(5)}`;

      setWorkAreaCenter(center);
      setWorkAreaRegion(region);
    } catch {
      Alert.alert("Location error", "Could not get work area location. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Text style={styles.title}>Step 6</Text>
        <Text style={styles.subtitle}>Area of working</Text>
        <Text style={styles.info}>We use your current location to estimate your regular delivery region.</Text>

        <PrimaryButton label="Detect Area from GPS" variant="secondary" onPress={detectWorkArea} />
        {loading && <ActivityIndicator style={styles.loader} color={colors.primary} />}

        {!!workAreaCenter && (
          <InfoCard title="Detected center">
            <Text style={styles.value}>{workAreaCenter}</Text>
          </InfoCard>
        )}
        {!!workAreaRegion && (
          <InfoCard title="Approximate region">
            <Text style={styles.value}>{workAreaRegion}</Text>
          </InfoCard>
        )}
      </View>

      <PrimaryButton
        label="Next"
        disabled={!workAreaCenter || !workAreaRegion}
        onPress={() => {
          updateOnboarding({ workAreaCenter, workAreaRegion });
          navigation.navigate("PolicyConfirmation");
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
  info: {
    color: colors.muted,
    marginBottom: spacing.md,
    lineHeight: 21,
  },
  loader: {
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  value: {
    color: colors.text,
    lineHeight: 22,
  },
});
