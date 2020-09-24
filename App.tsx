import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import {
  assets as authenticationAssets,
  AuthenticatorNavigator,
} from "./src/Authentication";
import { LoadAssets } from "./src/components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "./src/components/Theme";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeNavigator } from "./src/Home";
import { AppRoutes } from "./src/components/Navigation";

const assets = [...authenticationAssets];
const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  "SFProText-Medium": require("./assets/fonts/SF-Pro-Text-Medium.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen
              name="Authentication"
              component={AuthenticatorNavigator}
            />
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
