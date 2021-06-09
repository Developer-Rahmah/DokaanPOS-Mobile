import General from 'DokaanPOS/assets/styles/General'
import Layout from 'DokaanPOS/assets/styles/Layout'
import React from 'react'
import {View} from 'react-native'
import SearchBar from 'DokaanPOS/src/component/SearchBar'

export default function SearchOnReceipts ({style = {}}: {style?: object}) {
  return (
    <View style={[Layout.flexCenter, General.fullHeight, style]}>
      <View
        style={[
          General.whiteBackgroundColor,
          General.fullScreen,
          General.shadow,
          Layout.radius,
          General.fullHeight,
        ]}>
        <SearchBar placeHolder='Search by receipt number' />
      </View>
    </View>
  )
}
