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
import Input from 'DokaanPOS/src/component/Input'
import {Toast} from 'native-base'
import {useSelector} from 'react-redux'
import {TouchableOpacity} from 'react-native-gesture-handler'
const ResetPasswordScreen = () => {
  const navigation = useNavigation()
  interface RootState {
    password: string
    confirmPassword: string
  }
  const selectPassword = (state: RootState) => state.password
  const selectConfirmPassword = (state: RootState) => state.confirmPassword
  const password = useSelector(selectPassword)
  const confirmPassword = useSelector(selectConfirmPassword)

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
  })

  const onSubmit = (data: object) => {
    console.log('password', password)
    console.log('confirmPassword', confirmPassword) // Toast.show({
    if (password == confirmPassword) {
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
      navigation.navigate('SignInSignUpScreen')
    } else {
      Toast.show({
        text: 'The password and confirmation password do not match.',
        textStyle: {
          color: Colors.WHITE,
          fontSize: 23,
          fontFamily: InterMediumFont,
        },
        style: {backgroundColor: Colors.RED},
        duration: 2000,
        position: 'top',
        onClose: reason => {},
        buttonText: 'X',
        buttonTextStyle: {color: Colors.WHITE, fontSize: 20},
      })
    }
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
                  title="Type the new password you'd like to use with
your account."
                  fontSize={16}
                  numberOfLines={0}
                  textAlign='left'
                />
              </View>
              <View style={[General.seventyWidthPercentage]}>
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      isPassword
                      label='New Password'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='newPassword'
                  // rules={{required: true}}
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      isPassword
                      label='Confirm New Password'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='confirmNewPassword'
                  // rules={{required: true}}
                />

                <View style={[General.paddingTop]}>
                  <Button
                    locked={
                      !isValid || password == null || confirmPassword == null
                    }
                    onClick={handleSubmit(onSubmit)}
                    txtColor={Colors.WHITE}
                    backgroundColor={Colors.BLUE}
                    width='100%'
                    title='Save New Password'
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
export default ResetPasswordScreen
