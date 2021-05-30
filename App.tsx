import React, {useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from 'DokaanPOS/src/navigation/AppNavigator'
import StatusBar from 'DokaanPOS/src/component/StatusBar'
import {isIphoneX} from 'react-native-iphone-x-helper'
import {Root} from 'native-base'
import Orientation from 'react-native-orientation'

const App = () => {
  useEffect(() => {
    Orientation.lockToLandscape()
  }, [])

  return (
    <Root>
      <NavigationContainer>
        {isIphoneX() ? null : <StatusBar />}
        <AppNavigator />
      </NavigationContainer>
    </Root>
  )
}

export default App
