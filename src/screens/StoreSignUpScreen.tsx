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
import React, { useEffect, useState } from 'react'
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
import {Picker} from 'react-native'

const StoreSignUpScreen = () => {
  const navigation = useNavigation()
  interface RootState {
    password: string
    phoneNum: string
  }
  const selectPassword = (state: RootState) => state.password
  const selectPhoneNum = (state: RootState) => state.phoneNum
  const [productTypeSelected, setProductTypeSelected] = useState<number>(0)
  const productTypes = ['test1','test2','test3']
  const password = useSelector(selectPassword)
  const phoneNum = useSelector(selectPhoneNum)

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
const onValueChange = value => {
  setProductTypeSelected(value)
}
useEffect(() => {}, [productTypeSelected])

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
                    {/* <Controller
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
                    /> */}

                    <Controller
                      control={control}
                      render={({field: {onChange}}) => (
                        <View
                          style={[
                            //  Layout.inputContainer,
                            General.lightGrayBackground,
                            General.mediumVerticalPadding,
                          ]}>
                          <Picker
                            mode='dialog'
                            style={
                              [
                                //  Layout.fieldContainerStyle,
                                //  Layout.pickerContainer,
                              ]
                            }
                            selectedValue={productTypeSelected}
                            onValueChange={value => {
                              onChange(value), onValueChange(value)
                            }}>
                            {productTypes.map((item, index) => {
                              return (
                                <Picker.Item
                                  label={item}
                                  value={index}
                                  key={index}
                                />
                              )
                            })}
                          </Picker>
                        </View>
                      )}
                      name='type'
                      defaultValue=''
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
                      label='Store Address Line 1'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='storeAddressLine'
                  rules={{required: true}}
                />

                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      label='Store Address Line 2'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='email'
                  rules={{required: true}}
                />
                <View style={[General.smallTopPadding]}>
                  <Button
                    locked={
                      !isValid ||
                      errors.name ||
                      errors.email ||
                      password == null ||
                      password == '' ||
                      phoneNum == null ||
                      phoneNum == ''
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
