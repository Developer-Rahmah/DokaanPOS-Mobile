import {useNavigation} from '@react-navigation/core'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import {InterBoldFont, InterMediumFont} from 'DokaanPOS/assets/styles/Fonts'
import General from 'DokaanPOS/assets/styles/General'
import Layout from 'DokaanPOS/assets/styles/Layout'
import Button from 'DokaanPOS/src/component/Button'
import Title from 'DokaanPOS/src/component/Title'
import React from 'react'
import {Dimensions, View} from 'react-native'
import Container from 'DokaanPOS/src/component/Container'
import {Controller, useForm} from 'react-hook-form'
import Input from 'DokaanPOS/src/component/Input'
import {Toast} from 'native-base'
import {useSelector} from 'react-redux'
import IconImage from '../component/IconImage'
import Close from 'DokaanPOS/assets/icons/close.png'
const ForgetPasswordScreen = () => {
  const navigation = useNavigation()

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
          <IconImage source={Close} color={Colors.BEIGE} small />
         
        </View>
        <View style={[Layout.flexCenter]}>
          <View
            style={[
              General.whiteBackgroundColor,
              General.seventyWidthPercentage,
              General.mediumTopPadding,
              General.shadow,
              Layout.radius,
              General.mediumPaddingBottom,
            ]}>
            <View style={[Layout.flexCenter]}>
              <View
                style={[
                  Layout.alignItemsFlexStart,
                  General.seventyWidthPercentage,
                ]}>
                <Title
                  lineHeight={40}
                  title='Reset Password'
                  fontFamily={InterBoldFont}
                  fontSize={20}
                />
                <Title
                  numberOfLines={0}
                  title="Enter your email address and we'll send you 
instructions on how to reset your password."
                  fontSize={16}
                />
              </View>
              <View style={[General.seventyWidthPercentage]}>
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      keyboardType='email-address'
                      label='Email Address'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='email'
                  rules={{required: true}}
                />

                <View style={[General.smallTopPadding]}>
                  <Button
                    locked={!isValid}
                    onClick={handleSubmit(onSubmit)}
                    txtColor={Colors.WHITE}
                    backgroundColor={Colors.BLUE}
                    width='100%'
                    title='Send Reset Link'
                    fontFamily={InterMediumFont}
                    fontSize={Dimensions.get('window').width / 50}
                    style={[
                      General.smallVerticalPadding,
                      General.smallTopMargin,
                    ]}
                  />
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
                      title='Remembered your Password? '
                      numberOfLines={0}
                      color={Colors.LIGHT_GRAY}
                    />
                    <Title
                      textAlign='center'
                      fontSize={17}
                      title='Back to Sign In'
                      color={Colors.BLUE}
                      numberOfLines={0}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Container>
    </>
  )
}
export default ForgetPasswordScreen
