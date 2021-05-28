import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import AddProductScreen from '../screens/product/AddProductScreen'

const Stack = createStackNavigator()

const StoreNavigator = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='AddProductScreen' component={AddProductScreen} />
    </Stack.Navigator>
  )
}

export default StoreNavigator
