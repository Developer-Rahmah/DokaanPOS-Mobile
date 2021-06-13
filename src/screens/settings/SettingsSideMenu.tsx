import General from 'DokaanPOS/assets/styles/General'
import Layout from 'DokaanPOS/assets/styles/Layout'
import React from 'react'
import {View} from 'react-native'
import SearchBar from 'DokaanPOS/src/component/SearchBar'
import Item from 'DokaanPOS/src/component/Item'
import Rows from 'DokaanPOS/src/component/Rows'
import SectionHeader from 'DokaanPOS/src/component/SectionHeader'

export default function SettingsSideMenu ({style = {}}: {style?: object}) {
  const data = [
    {
      title: 'General Settings',

      data: [{label: 'Terminal'}],
    },
    {
      title: 'Hardware Settings',
      data: [
        {
          label: 'Printers',
        },
        {label: 'Card Readers'},
        {
          label: 'Cash Rrawers',
        },
      ],
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
