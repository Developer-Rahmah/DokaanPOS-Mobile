import React from 'react'
import {TextInput, View} from 'react-native'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import IconImage from './IconImage'
import Layout from 'DokaanPOS/assets/styles/Layout'
import Search from 'DokaanPOS/assets/icons/search.png'
import Elements from 'DokaanPOS/assets/styles/Elements'

export default function SearchBar ({
  onChangeText,
  placeHolder,
}: {
  onChangeText?: any
  placeHolder?: string
}) {
  return (
    <>
      <View
        style={[
          Layout.fullWidth,
          Layout.flexDirectionRow,
          Layout.flexCenter,
          Elements.searchInputContainer,
        ]}>
        <IconImage source={Search} small />
        <TextInput
          placeholderTextColor={Colors.BEIGE}
          style={[Layout.fullWidth, Elements.searchInput]}
          placeholder={placeHolder}
        />
      </View>
    </>
  )
}
