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
import Printer from 'DokaanPOS/assets/icons/printer.png'
import Email from 'DokaanPOS/assets/icons/email.png'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {Text} from 'native-base'

export default function ReceiptInfo ({style = {}}: {style?: object}) {
  return (
    <View style={[Layout.flexCenter, General.fullHeight, style]}>
      <View
        style={[
          General.whiteBackgroundColor,
          General.fullScreen,
          General.shadow,
          Layout.radius,
          // Layout.flexCenter,
          General.fullHeight,

          Layout.flexDirectionRow,
          {justifyContent: 'space-between', padding: 10, paddingRight: 30},
        ]}>
        <View style={{alignItems: 'flex-start'}}>
          <Title fontFamily={InterBoldFont} title='Order ID: #342534536 ' />
          <Title title='Date: Jan 2,2021 9:00 AM' color={Colors.LIGHT_GRAY} />

          <Title title='Method of Payment: Cash' color={Colors.LIGHT_GRAY} />
          <Title title='Sales Rep: Admin' color={Colors.LIGHT_GRAY} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            height: 40,
          }}>
          <View style={[Layout.flexDirectionRow, Layout.justifyContentCenter]}>
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
          {/* <TouchableOpacity
            style={{backgroundColor: 'red', width: 200, height: 100}}>
            <Text>nnnnn</Text>
          </TouchableOpacity> */}
          <Button
            onClick={() => {}}
            txtColor={Colors.WHITE}
            backgroundColor={Colors.BLUE}
            width='25%'
            title='Cancel'
            // fontFamily={InterMediumFont}
            fontSize={30}
            style={{
              height: Dimensions.get('window').width / 50,
              lineHeight: 10,
            }}
          />

          {/* <Title title='dfghjkl,kjhgfdxcvbnm' />
          <Title title='dfghjkl,kjhgfdxcvbnm' />

          <Title title='dfghjkl,kjhgfdxcvbnm' /> */}
        </View>
      </View>
    </View>
  )
}
