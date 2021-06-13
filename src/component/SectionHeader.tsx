import React from 'react'
import {View} from 'react-native'
import Title from './Title'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import Layout from 'DokaanPOS/assets/styles/Layout'
import General from 'DokaanPOS/assets/styles/General'

export default function SectionHeader ({title}: {title: string}) {
  return (
    <>
      <View
        style={[
          Layout.flexStart,
          Layout.fullWidth,
          Layout.cardPadding,

          General.grayBottomBorder,
        ]}>
        <Title title={title} color={Colors.BEIGE} />
      </View>
    </>
  )
}
