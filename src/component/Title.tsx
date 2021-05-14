import React from 'react'
import { Text } from 'react-native'
import Styles from 'DokaanPOS/assets/styles'

export default function Title ({
  title,
  color = Styles.Colors.BLACK,
  numberOfLines = 1,
  style = {},
  bold = false
}: {
  title?: string
  color?: string
  numberOfLines?: number
  style?: object
  bold?: boolean
}) {
  return (
    <Text
      style={[
        Styles.Elements.title,
        { color, fontWeight: bold ? 'bold' : '300' },
        style
      ]}
      numberOfLines={numberOfLines}
    >
      {title}
    </Text>
  )
}
