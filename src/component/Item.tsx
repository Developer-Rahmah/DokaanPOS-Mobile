import React, {useState} from 'react'
import {View} from 'react-native'
import Title from './Title'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import Layout from 'DokaanPOS/assets/styles/Layout'
import General from 'DokaanPOS/assets/styles/General'

export default function Item ({item}: {item: any}) {
  return (
    <>
      <View
        style={[
          Layout.fullWidth,
          General.smallVerticalPadding,
          General.grayBottomBorder,
        ]}>
        <View
          style={[
            Layout.flexDirectionRow,
            General.horizontalPadding,
            Layout.flexCenter,
            Layout.spaceBetween,
          ]}>
          <Title
            style={General.mediumVerticalPadding}
            title={item.receiptsId}
            color={Colors.BLACK}
          />
          <Title title={item.price + ''} />
        </View>
      </View>
    </>
  )
}
