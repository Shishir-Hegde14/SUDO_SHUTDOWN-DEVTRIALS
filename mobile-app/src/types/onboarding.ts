export type PlanType = "Starter" | "Growth" | "Elite";

export type OnboardingData = {
  fullName: string;
  gender: string;
  email: string;
  phone: string;
  homeAddress: string;
  homeLatitude: number | null;
  homeLongitude: number | null;
  workApp: string;
  otherWorkApp: string;
  vehicleType: string;
  workingDays: string[];
  workStartTime: string;
  workEndTime: string;
  workAreaCenter: string;
  workAreaRegion: string;
  bankName: string;
  bankAccountNumber: string;
  bankAddress: string;
  profileImageUri: string;
  city: string;
  experienceYears: string;
  preferredZone: string;
  selectedPlan: PlanType;
  acceptedPolicy: boolean;
};

export const initialOnboardingData: OnboardingData = {
  fullName: "",
  gender: "",
  email: "",
  phone: "",
  homeAddress: "",
  homeLatitude: null,
  homeLongitude: null,
  workApp: "",
  otherWorkApp: "",
  city: "",
  vehicleType: "",
  workingDays: [],
  workStartTime: "",
  workEndTime: "",
  workAreaCenter: "",
  workAreaRegion: "",
  bankName: "",
  bankAccountNumber: "",
  bankAddress: "",
  profileImageUri: "",
  experienceYears: "",
  preferredZone: "",
  selectedPlan: "Starter",
  acceptedPolicy: false,
};
