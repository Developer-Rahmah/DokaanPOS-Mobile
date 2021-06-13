import {useNavigation} from '@react-navigation/core'
import General from 'DokaanPOS/assets/styles/General'
import Layout from 'DokaanPOS/assets/styles/Layout'
import React from 'react'
import {View} from 'react-native'
import Elements from 'DokaanPOS/assets/styles/Elements'
import {ScrollView} from 'react-native-gesture-handler'
import Header from 'DokaanPOS/src/component/Header'
import NoPrintersYet from './NoPrintersYet'
import SettingsSideMenu from './SettingsSideMenu'
const SettingsScreen = () => {
  const navigation = useNavigation()

  return (
    <>
      <Header showMenu />
      <ScrollView style={[General.veryLightGrayBackground, General.fullScreen]}>
        <View
          style={[
            General.fullScreen,
            Layout.flexDirectionRow,
            General.mediumPadding,
            Elements.receiptsContainer,
          ]}>
          <SettingsSideMenu style={Elements.searchOnReceiptsContainer} />
          <NoPrintersYet style={[Elements.EmptyReceiptsContainer]} />
        </View>
      </ScrollView>
    </>
  )
}
export default SettingsScreen
