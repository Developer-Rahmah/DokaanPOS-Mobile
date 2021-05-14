import {useNavigation} from '@react-navigation/core'
import {View} from 'native-base'
import React, {useContext, useEffect, useState} from 'react'

const ProductsScreen = () => {
  const navigation = useNavigation()

  const [selectedItem, setSelectedItem] = useState()

  return (
    <>
      <View style={{backgroundColor: 'red', width: 200, height: 300}}></View>
    </>
  )
}
export default ProductsScreen
