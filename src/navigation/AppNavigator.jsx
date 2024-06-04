import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/Register";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import { Provider } from "react-native-paper";
import { CombinedDarkTheme, CombinedLightTheme, NavigationDarkTheme, NavigationLightTheme } from "../config/theme";
import { useTheme } from "../contexts/ThemeContext";
import SettingsScreen from "../screens/settingScreen/settingsScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {

  const {isDarkTheme} = useTheme();
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedLightTheme
  const themeNavigation = isDarkTheme ? NavigationDarkTheme : NavigationLightTheme;

  return (
    <Provider theme={theme}>
    <NavigationContainer theme={themeNavigation}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
