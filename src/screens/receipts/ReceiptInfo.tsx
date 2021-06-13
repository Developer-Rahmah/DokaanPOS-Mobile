import General from 'DokaanPOS/assets/styles/General'
import Layout from 'DokaanPOS/assets/styles/Layout'
import React from 'react'
import {View, Dimensions} from 'react-native'
import IconImage from 'DokaanPOS/src/component/IconImage'
import Title from 'DokaanPOS/src/component/Title'
import {InterBoldFont, InterMediumFont} from 'DokaanPOS/assets/styles/Fonts'
import Button from 'DokaanPOS/src/component/Button'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import Printer from 'DokaanPOS/assets/icons/printer.png'
import Email from 'DokaanPOS/assets/icons/email.png'
import Item from 'DokaanPOS/src/component/Item'
import RowOfReceipt from './RowOfReceipt'

export default function ReceiptInfo ({style = {}}: {style?: object}) {
  return (
    <View style={[Layout.flexCenter, General.fullHeight, style]}>
      <View
        style={[
          {width: '100%', height: '100%'},
          General.whiteBackgroundColor,
          General.mediumPadding,
          General.shadow,
          Layout.radius,
        ]}>
        <View
          style={[
            // General.whiteBackgroundColor,
            // General.fullScreen,
            General.grayBottomBorder,
            // General.fullHeight,
            Layout.flexDirectionRow,
            Layout.spaceBetween,
            // General.mediumPadding,
          ]}>
          <View style={{alignItems: 'flex-start'}}>
            <Title fontFamily={InterBoldFont} title='Order ID: #342534536 ' />
            <Title title='Date: Jan 2,2021 9:00 AM' color={Colors.LIGHT_GRAY} />
            <Title title='Method of Payment: Cash' color={Colors.LIGHT_GRAY} />
            <Title title='Sales Rep: Admin' color={Colors.LIGHT_GRAY} />
          </View>
          <View style={Layout.rowViews}>
            <View
              style={[Layout.flexDirectionRow, Layout.justifyContentCenter]}>
              <IconImage source={Printer} style={General.smallEndMargin} />
              <Title title='Print Receipt' color={Colors.BLUE} />
            </View>
            <View
              style={[
                Layout.flexDirectionRow,
                Layout.justifyContentCenter,
                General.horizontalPadding,
              ]}>
              <IconImage source={Email} style={General.smallEndMargin} />
              <Title title='Send Receipt' color={Colors.BLUE} />
            </View>

            <Button
              onClick={() => {}}
              txtColor={Colors.WHITE}
              backgroundColor={Colors.BLUE}
              title='Refund'
              fontFamily={InterMediumFont}
              fontSize={Dimensions.get('window').width / 70}
              style={{
                paddingHorizontal: 20,
                paddingVertical: 0,
              }}
            />
          </View>
        </View>

        <RowOfReceipt label='Snickers Candy Bar' value='$7' />
        <RowOfReceipt label='Milk' value='$7' />
        <View style={[Layout.fullWidth, Layout.alignItemsFlexEnd]}>
          <View style={[Layout.widthHalf]}>
            <RowOfReceipt label='Subtotal' value='$14' />
            <RowOfReceipt label='Taxes' value='0.0' />
            <RowOfReceipt label='Discount (10%)' value='$14' />
            <RowOfReceipt label='Total' value='$14' bold withoutBottomBorder />
          </View>
        </View>
      </View>
    </View>
  )
}
