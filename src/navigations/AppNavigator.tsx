import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignInSignUpScreen from 'DokaanPOS/src/screens/products/SignInSignUpScreen'

const AppNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='SignInSignUpScreen' component={SignInSignUpScreen} />

      
    </Stack.Navigator>
  )
}

export default AppNavigator
