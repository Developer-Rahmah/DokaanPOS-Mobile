import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {useSelector} from 'react-redux'
import AuthNavigator from 'DokaanPOS/src/navigation/AuthNavigator'
import StoreNavigator from 'DokaanPOS/src/navigation/StoreNavigator'

const AppNavigator = () => {
  const Stack = createStackNavigator()
  const isAuth = useSelector<any>(state => state.isAuth)

  return (
    <Stack.Navigator headerMode='none'>
      {isAuth != 'yes' ? (
        <Stack.Screen name='Auth' component={AuthNavigator} />
      ) : (
        <Stack.Screen name='Store' component={StoreNavigator} />
      )}
    </Stack.Navigator>
  )
}

export default AppNavigator
