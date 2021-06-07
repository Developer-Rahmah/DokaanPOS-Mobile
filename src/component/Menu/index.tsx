import {NavigationContext} from '@react-navigation/native'
import styles from 'DokaanPOS/assets/styles'
import React from 'react'
import {useDispatch} from 'react-redux'
import Separator from './Separator'
import {View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {NavigationAction} from 'react-navigation'
import MenuItem from './MenuItem'

const Menu = (navigation: any) => {
  const dispatch = useDispatch()

  return (
    <ScrollView>
      {/* <Container both> */}
      <NavigationContext.Provider value={navigation}>
        {/* About AUC */}
        <MenuItem label={'About'} screenName='test' />

        {/* Social media */}
        <View style={styles.Elements.socialMediaContainer}></View>
        <Separator />
      </NavigationContext.Provider>
      {/* </Container> */}
    </ScrollView>
  )
}

export default Menu
