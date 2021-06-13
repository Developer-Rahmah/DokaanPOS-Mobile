import {useNavigation} from '@react-navigation/core'
import General from 'DokaanPOS/assets/styles/General'
import Layout from 'DokaanPOS/assets/styles/Layout'
import React from 'react'
import {View} from 'react-native'
import EmptyReceipts from 'DokaanPOS/src/screens/receipts/EmptyReceipts'
import Elements from 'DokaanPOS/assets/styles/Elements'
import {ScrollView} from 'react-native-gesture-handler'
import Header from 'DokaanPOS/src/component/Header'
import SearchOnReceipts from './SearchOnReceipts'
import ReceiptInfo from './ReceiptInfo'
const ReceiptsScreen = () => {
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
          <SearchOnReceipts style={Elements.searchOnReceiptsContainer} />
          <ReceiptInfo style={[Elements.EmptyReceiptsContainer]} />
          {/* <EmptyReceipts style={[Elements.EmptyReceiptsContainer]} /> */}
        </View>
      </ScrollView>
    </>
  )
}
export default ReceiptsScreen
