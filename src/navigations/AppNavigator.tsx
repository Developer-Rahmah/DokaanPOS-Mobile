import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SignInSignUpScreen from 'DokaanPOS/src/screens/SignInSignUpScreen'
import SignInScreen from 'DokaanPOS/src/screens/SignInScreen'
import SignUpScreen from 'DokaanPOS/src/screens/SignUpScreen'
import StoreSignUpScreen from 'DokaanPOS/src/screens/StoreSignUpScreen'

const AppNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='SignInSignUpScreen' component={SignInSignUpScreen} />
      <Stack.Screen name='SignInScreen' component={SignInScreen} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      <Stack.Screen name='StoreSignUpScreen' component={StoreSignUpScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
