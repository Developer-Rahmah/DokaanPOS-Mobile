import React from 'react'
import { View } from 'react-native'
import styles from 'DokaanPOS/assets/styles'
import Title from './Title'
import { Colors } from 'DokaanPOS/assets/styles/Colors'

export default function ErrorMsg ({ errorMsg }: { errorMsg: string }) {
  return (
    <View
      style={[
        styles.Layout.largeHorizontalMargin,
        styles.Layout.smallMarginMinus
      ]}
    >
      <Title title={errorMsg} color={Colors.RED} />
    </View>
  )
}
