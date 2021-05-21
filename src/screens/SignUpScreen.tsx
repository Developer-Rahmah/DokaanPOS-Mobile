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
import IconImage from '../component/IconImage'
import Close from 'DokaanPOS/assets/icons/close.png'
const SignUpScreen = () => {
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
          <IconImage source={Close} color={Colors.BEIGE} small />
          <View style={Layout.flexDirectionRow}>
            <Title title='Already have an account?' color={Colors.LIGHT_GRAY} />
            <Title title=' Sign In' color={Colors.BLUE} />
          </View>
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
                  title='Let’s Create Your Account'
                  fontFamily={InterBoldFont}
                  fontSize={20}
                />
                <Title
                  title='Signing up for Dokkan with no commitments'
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
                <View style={[Layout.flexDirectionRow, Layout.spaceBetween]}>
                  <View style={[Layout.widthHalf, Layout.paddingEnd]}>
                    <Controller
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <Input
                          label='First Name'
                          onChangeText={(value: string) => onChange(value)}
                          value={value}
                        />
                      )}
                      name='firstName'
                      rules={{required: true}}
                    />
                  </View>
                  <View style={[Layout.widthHalf, Layout.paddingStart]}>
                    <Controller
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <Input
                          label='Last Name'
                          onChangeText={(value: string) => onChange(value)}
                          value={value}
                        />
                      )}
                      name='lastName'
                      rules={{required: true}}
                    />
                  </View>
                </View>
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
                      isPassword
                      label='Password'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='password'
                />
                <Title
                  title='Password must be at least 8 characters and contain at least one
capital letter, one lower case letter, and one number'
numberOfLines={0} textAlign='left'
                />
                <View style={[General.smallTopPadding]}>
                  <Button
                    locked={
                      !isValid ||
                      errors.name ||
                      errors.email ||
                      password == null ||
                      password == ''
                    }
                    onClick={handleSubmit(onSubmit)}
                    txtColor={Colors.WHITE}
                    backgroundColor={Colors.BLUE}
                    width='100%'
                    title='Create Account'
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
export default SignUpScreen
