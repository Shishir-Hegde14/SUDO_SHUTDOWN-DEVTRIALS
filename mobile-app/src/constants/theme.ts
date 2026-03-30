export const colors = {
  background: "#F8F5F4",
  backgroundTint: "#FFF2F2",
  surface: "#FFFFFF",
  surfaceSoft: "#F6F1F1",
  primary: "#C62828",
  primaryDark: "#A61F1F",
  primarySoft: "#FBE7E7",
  text: "#1F1A1A",
  muted: "#7B7070",
  success: "#249A61",
  border: "#EADDDD",
  white: "#FFFFFF",
  shadow: "#512121",
};

export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 28,
  xxl: 36,
};

export const radius = {
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
  pill: 999,
};

export const typography = {
  title: {
    fontSize: 30,
    fontWeight: "800" as const,
    letterSpacing: -0.4,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700" as const,
    letterSpacing: -0.2,
  },
  body: {
    fontSize: 15,
    fontWeight: "500" as const,
  },
};

export const shadows = {
  soft: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  strong: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
};

export const gradients = {
  background: ["#FFFDFD", "#F8F5F4", "#F6F0F0"] as const,
  primary: ["#D83A3A", "#B71C1C"] as const,
  glow: ["rgba(214, 64, 64, 0.28)", "rgba(214, 64, 64, 0.06)", "transparent"] as const,
};
