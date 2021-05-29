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
import Header from 'DokaanPOS/src/component/Header'
const AddProductScreen = () => {
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
      text: 'product added successfully.',
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
    // navigation.goBack()
  }

  return (
    <>
      <Container scrollAble style={General.veryLightGrayBackground}>
        <Header
          showBack
          title='Add Product'
          showRightBtn
          locked={!isValid}
          onSubmit={handleSubmit(onSubmit)}
        />
        <View style={[Layout.flexDirectionRow, Layout.largeCardPadding]}></View>
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
                  title='Product Information'
                  fontFamily={InterBoldFont}
                  fontSize={20}
                />
              </View>
              <View style={[General.seventyWidthPercentage]}>
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      label='Product Name'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='productName'
                  rules={{required: true}}
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      label='productDescription'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='productDescription'
                  rules={{required: true}}
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      label='Product Barcode'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='productBarcode'
                  rules={{required: true}}
                />

                <View style={[Layout.flexDirectionRow, Layout.spaceBetween]}>
                  <View style={[Layout.widthHalf, Layout.paddingEnd]}>
                    <Controller
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <Input
                          label='Product Price'
                          onChangeText={(value: string) => onChange(value)}
                          value={value}
                        />
                      )}
                      name='productPrice'
                      rules={{required: true}}
                    />
                  </View>
                  <View style={[Layout.widthHalf, Layout.paddingStart]}>
                    <Controller
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <Input
                          label='Unit Cost'
                          onChangeText={(value: string) => onChange(value)}
                          value={value}
                        />
                      )}
                      name='unitCost'
                      rules={{required: true}}
                    />
                  </View>
                </View>

                <View style={[General.smallTopPadding]}>
                  {/* <Button
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
                    title='Sign In'
                    fontFamily={InterMediumFont}
                    fontSize={Dimensions.get('window').width / 50}
                    style={[General.smallVerticalPadding,General.smallTopMargin]}
                  /> */}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Container>
    </>
  )
}
export default AddProductScreen
