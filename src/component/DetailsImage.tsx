import Styles from 'DokaanPOS/assets/styles'
import ImageStyles from 'DokaanPOS/assets/styles/ImageStyles'
import {htmlDecode} from 'DokaanPOS/services/helper'
import React from 'react'
import {Image, ImageSourcePropType} from 'react-native'

export default function DetailsImage ({
  source,
  uri,
}: {
  source: ImageSourcePropType
  uri?: string
}) {
  return (
    <Image
    resizeMode='contain'
      source={source ? source : {uri: htmlDecode(uri)}}
      style={ImageStyles.posterImage}
    />
  )
}
