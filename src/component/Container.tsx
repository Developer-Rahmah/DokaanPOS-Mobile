import styles from 'DokaanPOS/assets/styles'
import Elements from 'DokaanPOS/assets/styles/Elements'
import General from 'DokaanPOS/assets/styles/General'
import Layout from 'DokaanPOS/assets/styles/Layout'
import React from 'react'
import {View, TouchableOpacity, GestureResponderEvent} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
/**
 *
 * @param {import('react-native').TouchableOpacityProps|import('react-native').ViewProps} props
 */

export default function Container ({
  children,
  scrollAble = true,
  style = {},
  ...rest
}: {
  children?: any
  scrollAble?: boolean
  style?: object
}) {
  const Component = scrollAble ? ScrollView : (View as React.ElementType)
  return (
    <Component
      style={[General.fullScreen, General.whiteBackgroundColor]}
      {...rest}>
      {scrollAble ? (
        <View
          style={[
            Layout.justifyContentCenter,
            General.mediumVerticalPadding,
            style,
          ]}>
          {children}
        </View>
      ) : (
        {
          children,
        }
      )}
    </Component>
  )
}
