import styles from 'DokaanPOS/assets/styles';
import {Colors} from 'DokaanPOS/assets/styles/Colors';
import General from 'DokaanPOS/assets/styles/General';
import React from 'react';
import {Platform, StatusBar as ReactStatusBar, View} from 'react-native';

/**
 *
 * @param {import('react-native').TouchableOpacityProps|{icon,focused,label}} param0
 */
const StatusBar = ({}) => (
  <View>
    {Platform.OS == 'android' ? (
      <ReactStatusBar backgroundColor={Colors.WHITE} />
    ) : (
      <View
        style={[
          styles.Layout.fullWidth,
          styles.Layout.statusBarHight,
         General.whiteBackgroundColor,
        ]}
      />
    )}
  </View>
);

export default StatusBar;
