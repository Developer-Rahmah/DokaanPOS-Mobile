import React, {useState} from 'react'
import styles from 'DokaanPOS/assets/styles'
import {Dimensions, TouchableOpacity} from 'react-native'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import Title from 'DokaanPOS/src/component/Title'
import Layout from 'DokaanPOS/assets/styles/Layout'
interface IButton {
  onClick: () => void
  locked?: boolean
  title?: string
  withBorder?: boolean
  backgroundColor?: Colors
  txtColor?: Colors
  style?: any
  width?: string | number | Dimensions
  fontFamily?: string
  fontSize?: number
  borderColor?: Colors
}
export default function Button (props: IButton) {
  const handlePress = async () => {
    if (!props.locked) {
      await props.onClick()
      return
    }
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={props.locked}
      style={[
        Layout.radius,
        Layout.flexDirectionRow,
        Layout.flexCenter,
        Layout.cardPadding,
        {width: props.width},
        props.style,
        {
          backgroundColor: props.backgroundColor,
          opacity: props.locked ? 0.3 : 1,
          borderColor: props.borderColor,
        },
      ]}>
      <Title
        title={props.title}
        color={props.txtColor}
        fontFamily={props.fontFamily}
        fontSize={props.fontSize}
      />
    </TouchableOpacity>
  )
}
