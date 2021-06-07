import {useNavigation} from '@react-navigation/native'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import {InterRegularFont} from 'DokaanPOS/assets/styles/Fonts'
import General from 'DokaanPOS/assets/styles/General'
import Layout from 'DokaanPOS/assets/styles/Layout'
import React, {useState} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import IconImage from '../IconImage'
import Title from '../Title'

export default function MenuBtnItem ({
  label,
  color,
}: {
  label: string
  color: Colors
}) {
  const [collapsed, setCollapsed] = useState(true)
  const navigation = useNavigation()

  /**
   * Handles when a Button item is pressed.
   */
  const handleItemPress = () => {}

  return (
    <TouchableOpacity
      style={[
        Layout.widthHalf,
        General.border,
        General.smallVerticalPadding,
        Layout.flexCenter,
        Layout.radius,
        {borderColor: color},
      ]}>
      <Title title={label} color={color} fontFamily={InterRegularFont} />
    </TouchableOpacity>
  )
}
