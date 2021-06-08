import {NavigationContext, useNavigation} from '@react-navigation/native'
import styles from 'DokaanPOS/assets/styles'
import React from 'react'
import {useDispatch} from 'react-redux'
import Separator from './Separator'
import {View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import MenuItem from './MenuItem'
import Layout from 'DokaanPOS/assets/styles/Layout'
import IconImage from '../IconImage'
import User from 'DokaanPOS/assets/icons/user.png'
import General from 'DokaanPOS/assets/styles/General'
import ImageStyles from 'DokaanPOS/assets/styles/ImageStyles'
import Title from '../Title'
import {InterBoldFont, InterRegularFont} from 'DokaanPOS/assets/styles/Fonts'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import Register from 'DokaanPOS/assets/icons/register.png'
import Receipts from 'DokaanPOS/assets/icons/Receipts.png'
import Settings from 'DokaanPOS/assets/icons/settings.png'
import MenuBtnItem from './MenuBtnItem'

const Menu = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <ScrollView>
      <NavigationContext.Provider value={navigation}>
        <View style={[Layout.flexDirectionRow, Layout.cardPadding]}>
          <IconImage source={User} style={ImageStyles.mediumIcon} />
          <View style={[Layout.fullWidth, General.horizontalPadding]}>
            <Title
              textAlign='left'
              title='Monica Simons'
              fontFamily={InterBoldFont}
              color={Colors.WHITE}
            />
            <Title
              title='Store1'
              textAlign='left'
              fontFamily={InterRegularFont}
              color={Colors.WHITE}
            />
          </View>
        </View>
        <Separator />
        <View style={[Layout.cardPadding]}>
          <MenuItem icon={Register} label={'Register'} screenName='test' />
          <MenuItem
            icon={Receipts}
            label={'Receipts'}
            screenName='ReceiptsScreen'
          />
          <MenuItem
            icon={Settings}
            label={'Settings'}
            screenName='ReceiptsScreen'
          />
          <View style={General.largeTopPadding}>
            <MenuBtnItem label='Close Register' color={Colors.WHITE} />
            <View style={General.paddingTop}>
              <MenuBtnItem label='Log out' color={Colors.RED} />
            </View>
          </View>
        </View>
      </NavigationContext.Provider>
    </ScrollView>
  )
}

export default Menu
