import styles from 'DokaanPOS/assets/styles'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import React from 'react'
import {View} from 'react-native'
import Title from './Title'

const EmptyListMessage = ({}) => {
  return (
    <View
      style={[
        styles.Layout.flexCenter,
        styles.Elements.noItemsMessageContainer,
        styles.Layout.fullWidth,
      ]}>
      <Title color={Colors.BLACK} title='There are no items' />
    </View>
  )
}

export default EmptyListMessage
