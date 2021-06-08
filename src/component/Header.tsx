import React from 'react'
import {View, TouchableOpacity, Dimensions} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import BackIcon from 'DokaanPOS/assets/icons/arrow_back.png'
import Menu from 'DokaanPOS/assets/icons/menu.png'
import Layout from 'DokaanPOS/assets/styles/Layout'
import Elements from 'DokaanPOS/assets/styles/Elements'
import IconImage from './IconImage'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import Title from './Title'
import {InterBoldFont, InterMediumFont} from 'DokaanPOS/assets/styles/Fonts'
import DeviceInfo from 'react-native-device-info'
import Button from './Button'
import General from 'DokaanPOS/assets/styles/General'

export default function Header ({
  title = 'Dokaan',
  showBack,
  showRightBtn,
  locked,
  onSubmit = () => console.log('hi'),
  showMenu = false,
}: {
  title?: string
  showBack?: boolean
  showRightBtn?: boolean
  locked?: boolean
  onSubmit?: () => void
  showMenu?: boolean
}) {
  const navigation = useNavigation()

  return (
    <View
      style={[
        Layout.spaceBetween,
        Layout.flexDirectionRow,
        Layout.fullWidth,
        General.darkBlueBackgroundColor,
      ]}>
      {/* Back button */}

      <View style={[Elements.headerContainer, General.mediumVerticalPadding]}>
        <TouchableOpacity
          style={[
            Layout.headerIcon,
            showBack || showMenu ? Layout.displayFlex : Layout.displayNone,
            Layout.alignItemsCenter,
          ]}
          onPress={() => {
            showBack ? navigation.goBack() : navigation.openDrawer()
          }}>
          <IconImage
            source={showBack ? BackIcon : Menu}
            color={Colors.WHITE}
            small
          />
        </TouchableOpacity>
        <View
          style={[
            Elements.headerTitleContainerInShowBackCase,
            Layout.alignItemsFlexStart,
            Layout.justifyContentCenter,
          ]}>
          {/* Header Title */}

          <Title
            title={title}
            fontFamily={InterBoldFont}
            color={Colors.WHITE}
            fontSize={
              DeviceInfo.isTablet()
                ? Dimensions.get('window').width / 40
                : Dimensions.get('window').width / 35
            }
          />
        </View>
      </View>
      {/*  Button */}
      {showRightBtn ? (
        <View style={[Layout.flexDirectionRow, General.smallWidth]}>
          <Button
            locked={locked}
            title='save'
            onClick={onSubmit}
            txtColor={Colors.WHITE}
            backgroundColor={Colors.BLUE}
            fontFamily={InterMediumFont}
            fontSize={
              DeviceInfo.isTablet()
                ? Dimensions.get('window').width / 40
                : Dimensions.get('window').width / 35
            }
            style={[Elements.helpBtn, {width: '100%', height: '100%'}]}
          />
        </View>
      ) : null}
    </View>
  )
}
