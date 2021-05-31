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
import {useDispatch, useSelector} from 'react-redux'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Header from 'DokaanPOS/src/component/Header'
import Close from 'DokaanPOS/assets/icons/close.png'
import IconImage from './IconImage'
import {setShowAlertAction} from 'DokaanPOS/services/redux/actions'

export default function PriceCheck ({}) {
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
  const dispatch = useDispatch()

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
              // {width: '60%'},
            ]}>
            <View style={[Layout.flexCenter]}>
              <View
                style={[
                  Layout.alignItemsFlexStart,
                  Elements.inputContainer,
                  Layout.flexDirectionRow,
                  Layout.spaceBetween,
                ]}>
                <Title
                  lineHeight={40}
                  title='Price Check'
                  fontFamily={InterBoldFont}
                  fontSize={20}
                />
                <TouchableOpacity
                  onPress={() => dispatch(setShowAlertAction(false))}>
                  <IconImage small source={Close} color={Colors.DARK_GRAY_2} />
                </TouchableOpacity>
              </View>
              <View style={[Elements.inputContainer]}>
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      rowComponents
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
                      rowComponents
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
                      rowComponents
                      label='Barcode'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='barcode'
                  rules={{required: true}}
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      rowComponents
                      label='Stock count'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='stockCount'
                  rules={{required: true}}
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      rowComponents
                      label='Unit Cost'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='unitCost'
                  rules={{required: true}}
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      rowComponents
                      label='Gross Profit'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='grossProfit'
                  rules={{required: true}}
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      rowComponents
                      label='Sale Price'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='salePrice'
                  rules={{required: true}}
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      rowComponents
                      label='Tax Group'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='taxGroup'
                  rules={{required: true}}
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      rowComponents
                      label='Total with Tax'
                      onChangeText={(value: string) => onChange(value)}
                      value={value}
                    />
                  )}
                  name='totalWithTax'
                  rules={{required: true}}
                />

                <View
                  style={[
                    General.smallTopPadding,
                    Layout.flexDirectionRow,
                    {justifyContent: 'flex-end'},
                  ]}>
                  <Button
                    onClick={() => dispatch(setShowAlertAction(false))}
                    txtColor={Colors.BEIGE}
                    // backgroundColor={Colors.BLUE}
                    width='25%'
                    title='Cancel'
                    fontFamily={InterMediumFont}
                    fontSize={Dimensions.get('window').width / 50}
                    style={[
                      General.smallVerticalPadding,
                      General.smallTopMargin,
                    ]}
                  />
                  <Button
                    locked={!isValid}
                    onClick={handleSubmit(onSubmit)}
                    txtColor={Colors.WHITE}
                    backgroundColor={Colors.BLUE}
                    width='25%'
                    title='Add to cart'
                    fontFamily={InterMediumFont}
                    fontSize={Dimensions.get('window').width / 50}
                    style={[Layout.cardPadding, General.smallTopMargin]}
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
