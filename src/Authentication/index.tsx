import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Routes } from '../components/Navigation'
import OnBoarding, { assets as onBoardingAssets } from './OnBoarding'
import Welcome, { assets as welcomeAssets } from './Welcome'
import Login from './Login'
export const assets = [...onBoardingAssets, ...welcomeAssets]

const AuthenticationStack = createStackNavigator<Routes>()
export const AuthenticatorNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none" >
    <AuthenticationStack.Screen name="Onboarding" component={OnBoarding}/>
    <AuthenticationStack.Screen name="Welcome" component={Welcome}/>
    <AuthenticationStack.Screen name="Login" component={Login}/>
  </AuthenticationStack.Navigator>
)
