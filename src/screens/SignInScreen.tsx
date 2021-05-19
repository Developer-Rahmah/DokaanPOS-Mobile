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
import {Alert, Dimensions, View} from 'react-native'
import DeviceInfo from 'react-native-device-info'
import Container from 'DokaanPOS/src/component/Container'
import Elements from 'DokaanPOS/assets/styles/Elements'
import {Controller, useForm} from 'react-hook-form'
import Input from '../component/Input'
import {Toast} from 'native-base'
const SignInScreen = () => {
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
  })

  const onSubmit = (data: object) => {
    console.log('dadadadadtaa', data)
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
  console.log('errrors', errors)
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
              General.seventyWidthPercentage,
              General.mediumTopPadding,
            ]}>
            <View style={[Layout.flexCenter]}>
              <View
                style={[
                  Layout.alignItemsFlexStart,
                  General.seventyWidthPercentage,
                ]}>
                <Title
                  lineHeight={40}
                  title='Sign In'
                  fontFamily={InterBoldFont}
                  fontSize={20}
                />
                <Title
                  title='Hello there! Sign in and start managing your stores!'
                  fontSize={16}
                />
              </View>
              <View style={[General.seventyWidthPercentage]}>
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      label='Business Name'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='name'
                  rules={{required: true}}
                />

                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      label='Email Address'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='email'
                  rules={{required: true}}
                />

                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      label='Password'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='password'
                  rules={{required: true}}
                />
                <View style={Layout.alignItemsFlexEnd}>
                  <Title title='Forgot Password?' color={Colors.BLUE} />
                </View>
                <View style={[General.smallTopPadding]}>
                  <Button
                    locked={
                      !isValid || errors.name || errors.email || errors.password
                    }
                    onClick={handleSubmit(onSubmit)}
                    txtColor={Colors.WHITE}
                    backgroundColor={Colors.BLUE}
                    width='100%'
                    title='Sign In'
                    fontFamily={InterMediumFont}
                    fontSize={Dimensions.get('window').width / 50}
                    style={General.smallVerticalPadding}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Container>
    </>
  )
}
export default SignInScreen
