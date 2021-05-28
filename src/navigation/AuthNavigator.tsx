import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SignInSignUpScreen from 'DokaanPOS/src/screens/SignInSignUpScreen'
import SignInScreen from 'DokaanPOS/src/screens/SignInScreen'
import SignUpScreen from 'DokaanPOS/src/screens/SignUpScreen'
import StoreSignUpScreen from 'DokaanPOS/src/screens/StoreSignUpScreen'
import ForgetPasswordScreen from 'DokaanPOS/src/screens/ForgetPasswordScreen'
import ForgetPasswordSuccessScreen from 'DokaanPOS/src/screens/ForgetPasswordSuccessScreen'
import ResetPasswordScreen from 'DokaanPOS/src/screens/ResetPasswordScreen'
import AddProductScreen from 'DokaanPOS/src/screens/product/AddProductScreen'

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='SignInSignUpScreen' component={SignInSignUpScreen} />
      <Stack.Screen name='SignInScreen' component={SignInScreen} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      <Stack.Screen name='StoreSignUpScreen' component={StoreSignUpScreen} />
      <Stack.Screen
        name='ForgetPasswordScreen'
        component={ForgetPasswordScreen}
      />
      <Stack.Screen
        name='ForgetPasswordSuccessScreen'
        component={ForgetPasswordSuccessScreen}
      />

      <Stack.Screen
        name='ResetPasswordScreen'
        component={ResetPasswordScreen}
      />

      <Stack.Screen name='AddProductScreen' component={AddProductScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
