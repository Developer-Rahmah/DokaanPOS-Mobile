import React from 'react'
import {Image, ImageSourcePropType, View} from 'react-native'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import Elements from 'DokaanPOS/assets/styles/Elements'

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
        small ? {width: 20, height: 20} : Elements.icon,
        {tintColor: color},
        style,
      ]}
    />
  )
}
