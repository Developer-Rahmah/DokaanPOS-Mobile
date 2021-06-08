import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import AddProductScreen from '../screens/product/AddProductScreen'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Layout from 'DokaanPOS/assets/styles/Layout'
import Elements from 'DokaanPOS/assets/styles/Elements'
import Menu from '../component/Menu'
import ReceiptsScreen from '../screens/receipts/ReceiptsScreen'
const Drawer = createDrawerNavigator()

const Stack = createStackNavigator()

const StoreNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <Menu {...props} />}
      drawerType={'back'}
      drawerStyle={Elements.drawer}>
      {/* <Stack.Navigator headerMode='none'> */}
      <Stack.Screen name='ReceiptsScreen' component={ReceiptsScreen} />
      <Stack.Screen name='AddProductScreen' component={AddProductScreen} />
      {/* </Stack.Navigator> */}
    </Drawer.Navigator>
  )
}

export default StoreNavigator
