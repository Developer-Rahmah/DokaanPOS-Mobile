import { useNavigation } from '@react-navigation/core'
import { Fab, View } from 'native-base'
import React, { useContext, useEffect, useState } from 'react'
import styles from 'DokaanPOS/assets/styles'
import ProductCard from './displays/ProductCard'
import { Modal } from 'react-native'

const ProductsScreen = () => {
  const navigation = useNavigation()
 
  const [selectedItem, setSelectedItem] = useState()
  

  return (
    <>
      <View style={{backgroundColor:'red',width:200,height:300}}></View>
    </>
  )
}
export default ProductsScreen
