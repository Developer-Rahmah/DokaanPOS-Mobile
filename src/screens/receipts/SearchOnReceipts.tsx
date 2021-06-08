import General from 'DokaanPOS/assets/styles/General'
import Layout from 'DokaanPOS/assets/styles/Layout'
import React from 'react'
import {View, Dimensions} from 'react-native'
import EmptyReceipt from 'DokaanPOS/assets/images/receipts-empty.png'
import Add from 'DokaanPOS/assets/icons/add.png'
import IconImage from 'DokaanPOS/src/component/IconImage'
import ImageStyles from 'DokaanPOS/assets/styles/ImageStyles'
import Title from 'DokaanPOS/src/component/Title'
import {InterBoldFont, InterMediumFont} from 'DokaanPOS/assets/styles/Fonts'
import Button from 'DokaanPOS/src/component/Button'
import {Colors} from 'DokaanPOS/assets/styles/Colors'

export default function SearchOnReceipts ({style = {}}: {style?: object}) {
  return (
    <View style={[Layout.flexCenter, General.fullHeight, style]}>
      <View
        style={[
          General.whiteBackgroundColor,
          General.fullScreen,
          General.shadow,
          Layout.radius,
          Layout.flexCenter,
          General.fullHeight,
        ]}></View>
    </View>
  )
}
