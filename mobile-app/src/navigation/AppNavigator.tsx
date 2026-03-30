import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { SplashScreen } from "../screens/SplashScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { PersonalDetailsScreen } from "../screens/PersonalDetailsScreen";
import { WorkProfileScreen } from "../screens/WorkProfileScreen";
import { DeliveryZoneScreen } from "../screens/DeliveryZoneScreen";
import { QuoteScreen } from "../screens/QuoteScreen";
import { PlanSelectionScreen } from "../screens/PlanSelectionScreen";
import { PolicyConfirmationScreen } from "../screens/PolicyConfirmationScreen";
import { MainTabs } from "./MainTabs";
import { colors } from "../constants/theme";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
        animation: "slide_from_right",
        gestureEnabled: true,
        animationDuration: 260,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} />
      <Stack.Screen name="WorkProfile" component={WorkProfileScreen} />
      <Stack.Screen name="DeliveryZone" component={DeliveryZoneScreen} />
      <Stack.Screen name="Quote" component={QuoteScreen} />
      <Stack.Screen name="PlanSelection" component={PlanSelectionScreen} />
      <Stack.Screen name="PolicyConfirmation" component={PolicyConfirmationScreen} />
      <Stack.Screen name="MainApp" component={MainTabs} />
    </Stack.Navigator>
  );
}
