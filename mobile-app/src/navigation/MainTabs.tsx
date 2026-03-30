import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MainTabParamList } from "./types";
import { HomeDashboardScreen } from "../screens/HomeDashboardScreen";
import { ClaimsScreen } from "../screens/ClaimsScreen";
import { PayoutsScreen } from "../screens/PayoutsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { colors, radius, shadows } from "../constants/theme";

const Tab = createBottomTabNavigator<MainTabParamList>();

const icons: Record<keyof MainTabParamList, keyof typeof Ionicons.glyphMap> = {
  Home: "home",
  Claims: "shield-checkmark",
  Payouts: "wallet",
  Profile: "person",
};

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: "rgba(255,255,255,0.95)",
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: 68,
          paddingTop: 8,
          paddingBottom: 10,
          ...shadows.soft,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
        },
        tabBarItemStyle: {
          borderRadius: radius.md,
          marginHorizontal: 2,
          marginVertical: 2,
        },
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={icons[route.name]} size={focused ? size + 1 : size} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeDashboardScreen} />
      <Tab.Screen name="Claims" component={ClaimsScreen} />
      <Tab.Screen name="Payouts" component={PayoutsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
