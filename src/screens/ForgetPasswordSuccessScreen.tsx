import {useNavigation} from '@react-navigation/core'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import {
  InterBoldFont,
  InterMediumFont,
  RubikMedium,
} from 'DokaanPOS/assets/styles/Fonts'
import General from 'DokaanPOS/assets/styles/General'
import Layout from 'DokaanPOS/assets/styles/Layout'
import Button from 'DokaanPOS/src/component/Button'
import Title from 'DokaanPOS/src/component/Title'
import React from 'react'
import {Dimensions, View} from 'react-native'
import DeviceInfo from 'react-native-device-info'
import Container from 'DokaanPOS/src/component/Container'
import Elements from 'DokaanPOS/assets/styles/Elements'
import {Controller, useForm} from 'react-hook-form'
import Input from 'DokaanPOS/src/component/Input'
import {Toast} from 'native-base'
import {useSelector} from 'react-redux'
import {TouchableOpacity} from 'react-native-gesture-handler'
import SendEmail from 'DokaanPOS/assets/icons/send-email-icon.png'
import IconImage from '../component/IconImage'
import ImageStyles from 'DokaanPOS/assets/styles/ImageStyles'

const ForgetPasswordSuccessScreen = () => {
  const navigation = useNavigation()
  interface RootState {
    password: string
  }
  const selectPassword = (state: RootState) => state.password

  const password = useSelector(selectPassword)
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
  })

  const onSubmit = (data: object) => {
    Toast.show({
      text: 'Your password was successfully updated.',
      textStyle: {
        color: Colors.WHITE,
        fontSize: 23,
        fontFamily: InterMediumFont,
      },
      style: {backgroundColor: Colors.GREEN},
      duration: 2000,
      position: 'top',
      onClose: reason => {},
      buttonText: 'X',
      buttonTextStyle: {color: Colors.WHITE, fontSize: 20},
    })
  }

  return (
    <>
      <Container scrollAble style={General.veryLightGrayBackground}>
        <View
          style={[
            Layout.spaceBetween,
            Layout.flexDirectionRow,
            Layout.largeCardPadding,
          ]}>
          <Title
            title='Dokkan'
            style={General.smallTopMargin}
            fontFamily={RubikMedium}
            fontSize={Dimensions.get('window').width / 40}
            color={Colors.BLACK}
          />

          <Button
            onClick={() => console.log('hi')}
            txtColor={Colors.WHITE}
            backgroundColor={Colors.GREEN}
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
        <View style={[Layout.flexCenter]}>
          <View
            style={[
              General.whiteBackgroundColor,
              Layout.widthHalf,
              General.mediumTopPadding,
              General.shadow,
              Layout.radius,
              General.mediumPaddingBottom,
            ]}>
            <View style={[Layout.flexCenter, General.verticalPadding]}>
              <View
                style={[
                  Layout.alignItemsFlexStart,
                  General.seventyWidthPercentage,
                  Layout.flexCenter,
                ]}>
                <IconImage source={SendEmail} style={ImageStyles.mediumIcon} />
                <Title title='Almost There!' fontFamily={InterBoldFont} />
                <Title
                  title='Check your email inbox, we sent you a reset link.'
                  numberOfLines={0}
                />
              </View>
              <View style={[General.seventyWidthPercentage]}>
                <View style={[General.smallTopPadding]}>
                  <View
                    style={[
                      Layout.flexDirectionRow,
                      General.mediumVerticalPadding,
                      Layout.fullWidth,
                      Layout.flexCenter,
                    ]}>
                    <Title
                      textAlign='center'
                      fontSize={17}
                      title='Did n’t receive any mail? '
                      numberOfLines={0}
                      color={Colors.LIGHT_GRAY}
                    />
                    <Title
                      textAlign='center'
                      fontSize={17}
                      title='Resend Email'
                      color={Colors.BLUE}
                      numberOfLines={0}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ResetPasswordScreen')}>
                    <Title
                      textAlign='center'
                      fontSize={17}
                      title='Back to sign In'
                      color={Colors.BLUE}
                      numberOfLines={0}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Container>
    </>
  )
}
export default ForgetPasswordSuccessScreen
