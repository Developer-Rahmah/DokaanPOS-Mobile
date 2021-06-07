import {useNavigation} from '@react-navigation/native'
import styles from 'DokaanPOS/assets/styles'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import General from 'DokaanPOS/assets/styles/General'
import Layout from 'DokaanPOS/assets/styles/Layout'
import React, {useState} from 'react'
import {GestureResponderEvent, Text, TouchableOpacity, View} from 'react-native'
import {useSelector} from 'react-redux'

export default function MenuItem ({
  label,
  screenName,
}: {
  label: string
  screenName: string
}) {
  // const MenuItem = (label: string, screenName: string) => {
  const [collapsed, setCollapsed] = useState(true)
  const navigation = useNavigation()

  /**
   * Handles when a menu item is pressed.
   */
  const handleItemPress = () => {
    navigation.navigate(screenName)
  }

  return (
    <View>
      {/* The parent menu item */}
      <TouchableOpacity
        style={Layout.smallCardPadding}
        onPress={handleItemPress}>
        <Text
          style={[
            // General.bold,
            {
              color: Colors.WHITE,

              fontSize: 19,
            },
          ]}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
