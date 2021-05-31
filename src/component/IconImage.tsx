import React from 'react'
import {Dimensions, Image, ImageSourcePropType, View} from 'react-native'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import Elements from 'DokaanPOS/assets/styles/Elements'
import deviceInfo from 'react-native-device-info'

export default function IconImage ({
  source,
  color,
  small,
  style,
}: {
  source: ImageSourcePropType
  color?: Colors
  small?: boolean
  style?: {}
}) {
  return (
    <Image
      source={source}
      style={[
        small
          ? {
              width: deviceInfo.isTablet()
                ? Dimensions.get('window').width / 55
                : Dimensions.get('window').width / 30,
              height: deviceInfo.isTablet()
                ? Dimensions.get('window').width / 55
                : Dimensions.get('window').width / 30,
            }
          : Elements.icon,
        {tintColor: color},
        style,
      ]}
    />
  )
}
