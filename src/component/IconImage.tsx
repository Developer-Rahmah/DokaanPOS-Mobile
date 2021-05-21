import React from 'react'
import {Image, ImageSourcePropType, View} from 'react-native'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import Elements from 'DokaanPOS/assets/styles/Elements'

export default function IconImage ({
  source,
  color,
}: {
  source: ImageSourcePropType
  color?: Colors
}) {
  return (
    <Image source={source} style={[Elements.smallIcon, {tintColor: color}]} />
  )
}
