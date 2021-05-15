import {useNavigation} from '@react-navigation/core'
import styles from 'DokaanPOS/assets/styles'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import {
  InterBoldFont,
  InterMediumFont,
  RubikMedium,
} from 'DokaanPOS/assets/styles/Fonts'
import General from 'DokaanPOS/assets/styles/General'
import Layout from 'DokaanPOS/assets/styles/Layout'
import Button from 'DokaanPOS/src/component/Button'
import DetailsImage from 'DokaanPOS/src/component/DetailsImage'
import Title from 'DokaanPOS/src/component/Title'
import React, {useContext, useEffect, useState} from 'react'
import {Dimensions, Platform, View} from 'react-native'
import CreateAccount from 'DokaanPOS/assets/images/create-account-img.png'
import DeviceInfo from 'react-native-device-info'
import Container from 'DokaanPOS/src/component/Container'
import Elements from 'DokaanPOS/assets/styles/Elements'
const SignInSignUpScreen = () => {
  const navigation = useNavigation()

  const [selectedItem, setSelectedItem] = useState()

  return (
    <>
      <Container scrollAble>
        <View
          style={[
            Layout.spaceBetween,
            Layout.flexDirectionRow,
            Layout.largeCardPadding,
          ]}>
          <Title
            title='Dokkan'
            fontFamily={RubikMedium}
            fontSize={Dimensions.get('window').width / 40}
            color={Colors.BLACK}
          />

          <Button
            onClick={() => console.log('hi')}
            txtColor={Colors.WHITE}
            backgroundColor={Colors.GREEN}
            // width={Dimensions.get('window').width / 5.5}
            title='Get help'
            fontFamily={InterMediumFont}
            fontSize={
              DeviceInfo.isTablet()
                ? Dimensions.get('window').width / 55
                : Dimensions.get('window').width / 35
            }
            style={Elements.helpBtn}
          />
        </View>
        <View
          style={[
            General.mediumTopPadding,
            Layout.flexDirectionRow,
            Layout.spaceBetween,
            Layout.largeCardPadding,
            Layout.alignItemsCenter,
          ]}>
          <View style={Layout.widthHalf}>
            <View style={[Layout.spaceBetween]}>
              <Title
                textAlign='left'
                title='Welcome to Dokkan POS'
                fontFamily={InterBoldFont}
                fontSize={Dimensions.get('window').width / 40}
                color={Colors.BLACK}
              />
              <View style={[General.smallTopPadding]}>
                <Title
                  textAlign='left'
                  numberOfLines={0}
                  title='Signing up for Dokkan with no commitments, Signing up
for Dokkan with no commitments Signing up for
Dokkan with no commitments'
                  fontFamily={InterMediumFont}
                  fontSize={Dimensions.get('window').width / 50}
                  color={Colors.LIGHT_GRAY}
                />
              </View>
              <View
                style={[
                  General.smallTopPadding,
                  General.seventyWidthPercentage,
                ]}>
                <Button
                  onClick={() => console.log('hi')}
                  txtColor={Colors.WHITE}
                  backgroundColor={Colors.BLUE}
                  width='100%'
                  title='Create Account'
                  fontFamily={InterMediumFont}
                  fontSize={Dimensions.get('window').width / 50}
                  style={General.smallVerticalPadding}
                />
              </View>
              <View
                style={[
                  General.smallTopPadding,
                  General.seventyWidthPercentage,
                ]}>
                <Title
                  title='OR'
                  fontFamily={RubikMedium}
                  fontSize={Dimensions.get('window').width / 40}
                  color={Colors.DARK_GRAY}
                />
              </View>
              <View
                style={[
                  General.smallTopPadding,
                  General.seventyWidthPercentage,
                ]}>
                <Button
                  onClick={() => console.log('hi')}
                  txtColor={Colors.BLUE}
                  backgroundColor={Colors.WHITE}
                  width='100%'
                  title='Sign in'
                  fontFamily={InterMediumFont}
                  fontSize={Dimensions.get('window').width / 50}
                  borderColor={Colors.BLUE}
                  style={[General.border, General.smallVerticalPadding]}
                />
              </View>
            </View>
          </View>
          <View style={Layout.widthHalf}>
            <DetailsImage source={CreateAccount} />
          </View>
        </View>
      </Container>
    </>
  )
}
export default SignInSignUpScreen
