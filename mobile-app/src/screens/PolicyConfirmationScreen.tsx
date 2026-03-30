import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { FormInput } from "../components/FormInput";
import { PrimaryButton } from "../components/PrimaryButton";
import { ScreenContainer } from "../components/ScreenContainer";
import { SelectInput } from "../components/SelectInput";
import { colors, spacing, typography } from "../constants/theme";
import { RootStackParamList } from "../navigation/types";
import { useAppStore } from "../store/AppContext";

type Props = NativeStackScreenProps<RootStackParamList, "PolicyConfirmation">;

export function PolicyConfirmationScreen({ navigation }: Props) {
  const { onboarding, updateOnboarding } = useAppStore();
  const [bankName, setBankName] = useState(onboarding.bankName);
  const [bankAccountNumber, setBankAccountNumber] = useState(onboarding.bankAccountNumber);
  const [bankAddress, setBankAddress] = useState(onboarding.bankAddress);

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Text style={styles.title}>Step 7</Text>
        <Text style={styles.subtitle}>Bank account details</Text>
        <Text style={styles.info}>Dummy details for now. Verification can be added later.</Text>

        <SelectInput
          label="Bank"
          placeholder="Select bank"
          value={bankName}
          options={["State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra Bank"]}
          onSelect={setBankName}
        />
        <FormInput
          label="Account number"
          value={bankAccountNumber}
          keyboardType="number-pad"
          placeholder="Enter account number"
          onChangeText={setBankAccountNumber}
        />
        <FormInput
          label="Bank address"
          value={bankAddress}
          placeholder="Enter bank branch address"
          onChangeText={setBankAddress}
        />
      </View>

      <PrimaryButton
        label="Finish onboarding"
        disabled={!bankName || !bankAccountNumber.trim() || !bankAddress.trim()}
        onPress={() => {
          updateOnboarding({
            bankName,
            bankAccountNumber: bankAccountNumber.trim(),
            bankAddress: bankAddress.trim(),
            acceptedPolicy: true,
          });
          navigation.reset({ index: 0, routes: [{ name: "MainApp" }] });
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
    marginBottom: 8,
  },
  info: {
    color: colors.muted,
    marginBottom: spacing.md,
  },
});
