import React from 'react'
import {Text} from 'react-native'
import Styles from 'DokaanPOS/assets/styles'
import {InterBoldFont, InterRegularFont} from 'DokaanPOS/assets/styles/Fonts'
import Elements from 'DokaanPOS/assets/styles/Elements'

export default function Title ({
  title,
  color = Styles.Colors.BLACK,
  numberOfLines = 1,
  style = {},
  fontFamily = InterRegularFont,
  fontSize = 19,
  textAlign = 'center',
}: {
  title?: string
  color?: string
  numberOfLines?: number
  style?: object
  fontFamily?: string
  fontSize?: number
  textAlign?: string
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
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  )
}
