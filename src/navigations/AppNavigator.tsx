import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductsScreen from 'DokaanPOS/src/screens/products/ProductsScreen'

const AppNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='ProductsScreen' component={ProductsScreen} />

      
    </Stack.Navigator>
  )
}

export default AppNavigator
