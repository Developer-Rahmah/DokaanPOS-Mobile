import React, {useState} from 'react'
import {View} from 'react-native'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import Layout from 'DokaanPOS/assets/styles/Layout'
import General from 'DokaanPOS/assets/styles/General'
import Title from 'DokaanPOS/src/component/Title'
import {InterBoldFont, InterRegularFont} from 'DokaanPOS/assets/styles/Fonts'

export default function RowOfReceipt ({
  label,
  value,
  bold = false,
  withoutBottomBorder = false,
}: {
  label: string
  value: string
  bold?: boolean
  withoutBottomBorder?: boolean
}) {
  return (
    <>
      <View
        style={[
          Layout.fullWidth,
          General.smallVerticalPadding,
          Layout.spaceBetween,
          Layout.flexDirectionRow,
          withoutBottomBorder ? null : General.grayBottomBorder,
        ]}>
        <Title
          title={label}
          fontFamily={bold ? InterBoldFont : InterRegularFont}
        />
        <Title
          title={value}
          fontFamily={bold ? InterBoldFont : InterRegularFont}
        />
      </View>
    </>
  )
}
