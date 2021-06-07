import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import AddProductScreen from '../screens/product/AddProductScreen'
import {createDrawerNavigator} from '@react-navigation/drawer'
const Drawer = createDrawerNavigator()

const Stack = createStackNavigator()

const StoreNavigator = () => {
  return (
    <Drawer.Navigator
    // drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
    >
      {/* <Stack.Navigator headerMode='none'> */}
      <Stack.Screen name='AddProductScreen' component={AddProductScreen} />
      {/* </Stack.Navigator> */}
    </Drawer.Navigator>
  )
}

export default StoreNavigator
