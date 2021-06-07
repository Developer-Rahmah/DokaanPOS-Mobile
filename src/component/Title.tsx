import React from 'react'
import {Text} from 'react-native'
import Styles from 'DokaanPOS/assets/styles'
import {InterBoldFont, InterRegularFont} from 'DokaanPOS/assets/styles/Fonts'
import Elements from 'DokaanPOS/assets/styles/Elements'
import {Colors} from 'DokaanPOS/assets/styles/Colors'

export default function Title ({
  title,
  color = Colors.BLACK,
  numberOfLines = 1,
  style = {},
  fontFamily = InterRegularFont,
  fontSize = 19,
  textAlign = 'center',
  lineHeight = 40,
}: {
  title?: string
  color?: string
  numberOfLines?: number
  style?: object
  fontFamily?: string
  fontSize?: number
  textAlign?: string
  lineHeight?: number
}) {
  return (
    <Text
      style={[
        Elements.title,
        {
          color,
          fontFamily: fontFamily,
          fontSize: fontSize,
          textAlign: textAlign,
          lineHeight: lineHeight,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  )
}
