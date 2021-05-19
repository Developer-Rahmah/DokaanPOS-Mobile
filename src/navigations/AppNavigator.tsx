import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SignInSignUpScreen from 'DokaanPOS/src/screens/SignInSignUpScreen'
import SignInScreen from 'DokaanPOS/src/screens/SignInScreen'

const AppNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='SignInSignUpScreen' component={SignInSignUpScreen} />

      <Stack.Screen name='SignInScreen' component={SignInScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
