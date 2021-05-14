import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from 'DokaanPOS/src/navigations/AppNavigator';
import StatusBar from 'DokaanPOS/src/component/StatusBar';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {Root} from 'native-base';

const App = () => {
  return (
    <Root>
      <NavigationContainer>
        {isIphoneX() ? null : <StatusBar />}
        <AppNavigator />
      </NavigationContainer>
    </Root>
  );
};

export default App;
