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
import PickerItem from '../component/PickerItem'

const StoreSignUpScreen = () => {
  const navigation = useNavigation()
  interface RootState {
    city: string | null
    state: string | null
  }

  const selectCity = (state: RootState) => state.city
  const selectState = (state: RootState) => state.state

  const cites = ['city1', 'city2', 'city3']
  const states = ['state1', 'state2', 'state3']

  const city = useSelector(selectCity)
  const state = useSelector(selectState)

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
                  title='Hi Admin, Let’s add your first store  '
                  fontFamily={InterBoldFont}
                  fontSize={20}
                />
                <Title
                  title='Then you can complete your store setup'
                  fontSize={16}
                />
              </View>
              <View style={[General.seventyWidthPercentage]}>
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      label='Store Name'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='storeName'
                  rules={{required: true}}
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      isPhone
                      label='Phone Number'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='phoneNumber'
                />
                <View style={[Layout.flexDirectionRow, Layout.spaceBetween]}>
                  <View style={[Layout.widthHalf, Layout.paddingEnd]}>
                    <PickerItem label='City' itemsList={cites} />
                  </View>
                  <View style={[Layout.widthHalf, Layout.paddingStart]}>
                    <PickerItem label='State' itemsList={states} />
                  </View>
                </View>
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      placeHolder='Enter Zip Code'
                      label='Zip Code'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='zipCode'
                  rules={{required: true}}
                />

                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      placeHolder='Street and number, P.O box'
                      label='Store Address Line 1'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='storeAddressLine1'
                  rules={{required: true}}
                />

                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      placeHolder='Suite, unit, building, floor, etc'
                      label='Store Address Line 2'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='storeAddressLine2'
                  rules={{required: true}}
                />
                <View style={[General.smallTopPadding]}>
                  <Button
                    locked={
                      !isValid ||
                      errors.storeName ||
                      errors.phoneNumber ||
                      city == null ||
                      state == null
                    }
                    onClick={handleSubmit(onSubmit)}
                    txtColor={Colors.WHITE}
                    backgroundColor={Colors.BLUE}
                    width='100%'
                    title='Create Account'
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
                      title='By creating account, you agree to '
                      numberOfLines={0}
                      color={Colors.LIGHT_GRAY}
                    />
                    <Title
                      textAlign='center'
                      fontSize={17}
                      title='our Terms of Service'
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
export default StoreSignUpScreen
