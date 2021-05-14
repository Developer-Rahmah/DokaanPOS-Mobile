import styles from 'DokaanPOS/assets/styles';
import Colors from 'DokaanPOS/assets/styles/Colors';
import React from 'react';
import {Platform, StatusBar as ReactStatusBar, View} from 'react-native';

/**
 *
 * @param {import('react-native').TouchableOpacityProps|{icon,focused,label}} param0
 */
const StatusBar = ({}) => (
  <View>
    {Platform.OS == 'android' ? (
      <ReactStatusBar backgroundColor={Colors.LIGHT_GRAY} />
    ) : (
      <View
        style={[
          styles.Layout.fullWidth,
          styles.Layout.statusBarHight,
          styles.General.lightGrayBackground,
        ]}
      />
    )}
  </View>
);

export default StatusBar;
