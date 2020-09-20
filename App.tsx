import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeProvider } from '@shopify/restyle';
import { OnBoarding, Welcome, assets as authenticationAssets } from './src/Authentication'
import { LoadAssets, theme } from './src/components';
import { Routes } from './src/components/Navigation'

const assets = [...authenticationAssets]
const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  "SFProText-Medium": require("./assets/fonts/SF-Pro-Text-Medium.ttf"),
};

const AuthenticationStack = createStackNavigator<Routes>()
const AuthenticatorNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none" >
    <AuthenticationStack.Screen name="Onboarding" component={OnBoarding}/>
    <AuthenticationStack.Screen name="welcome" component={Welcome}/>
  </AuthenticationStack.Navigator>
)

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <AuthenticatorNavigator />
      </LoadAssets>
    </ThemeProvider>
  )
}
