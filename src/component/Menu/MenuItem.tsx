import {useNavigation} from '@react-navigation/native'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import {InterRegularFont} from 'DokaanPOS/assets/styles/Fonts'
import Layout from 'DokaanPOS/assets/styles/Layout'
import React, {useState} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import IconImage from '../IconImage'
import Title from '../Title'

export default function MenuItem ({
  label,
  screenName,
  icon,
}: {
  label: string
  screenName: string
  icon: any
}) {
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
        style={[
          Layout.smallCardPadding,
          Layout.flexDirectionRow,
          Layout.alignItemsCenter,
          Layout.cardPadding,
        ]}
        onPress={handleItemPress}>
        <IconImage source={icon} />
        <View style={Layout.paddingStart}>
          <Title
            title={label}
            color={Colors.WHITE}
            fontFamily={InterRegularFont}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}
