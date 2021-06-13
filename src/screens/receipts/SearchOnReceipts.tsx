import General from 'DokaanPOS/assets/styles/General'
import Layout from 'DokaanPOS/assets/styles/Layout'
import React from 'react'
import {View} from 'react-native'
import SearchBar from 'DokaanPOS/src/component/SearchBar'
import Item from 'DokaanPOS/src/component/Item'
import Rows from 'DokaanPOS/src/component/Rows'
import SectionHeader from 'DokaanPOS/src/component/SectionHeader'

export default function SearchOnReceipts ({style = {}}: {style?: object}) {
  const data = [
    {
      title: 'Jan 3,2021',

      data: [
        {receiptsId: '#342534536', price: '200$'},
        {receiptsId: '#342534536', price: '200$'},
        {receiptsId: '#342534536', price: '200$'},
      ],
    },
    {
      title: 'Jan 3,2021',
      data: [{receiptsId: '#342534536', price: '200$'}],
    },
    {
      title: 'Jan 3,2021',
      data: [{receiptsId: '#342534536', price: '200$'}],
    },
    {
      title: 'Jan 3,2021',
      data: [{receiptsId: '#342534536', price: '200$'}],
    },
  ]
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
        <Rows
          isSectionList
          sections={data}
          renderItem={({item}) => <Item item={item} />}
          renderSectionHeader={({section: {title}}) => (
            <SectionHeader title={title} />
          )}
        />
      </View>
    </View>
  )
}
