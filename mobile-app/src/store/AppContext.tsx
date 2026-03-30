import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";
import { initialOnboardingData, OnboardingData, PlanType } from "../types/onboarding";

type AppContextValue = {
  onboarding: OnboardingData;
  updateOnboarding: (patch: Partial<OnboardingData>) => void;
  setPlan: (plan: PlanType) => void;
  resetOnboarding: () => void;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: PropsWithChildren) {
  const [onboarding, setOnboarding] = useState<OnboardingData>(initialOnboardingData);

  const value = useMemo<AppContextValue>(
    () => ({
      onboarding,
      updateOnboarding: (patch) => setOnboarding((prev) => ({ ...prev, ...patch })),
      setPlan: (plan) => setOnboarding((prev) => ({ ...prev, selectedPlan: plan })),
      resetOnboarding: () => setOnboarding(initialOnboardingData),
    }),
    [onboarding]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppStore() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppStore must be used inside AppProvider");
  }
  return ctx;
}
