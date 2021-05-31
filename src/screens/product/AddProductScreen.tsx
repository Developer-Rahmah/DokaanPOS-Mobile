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
import React, {useState} from 'react'
import {Dimensions, Modal, View} from 'react-native'
import DeviceInfo from 'react-native-device-info'
import Container from 'DokaanPOS/src/component/Container'
import Elements from 'DokaanPOS/assets/styles/Elements'
import {Controller, useForm} from 'react-hook-form'
import Input from 'DokaanPOS/src/component/Input'
import {Toast} from 'native-base'
import {useDispatch, useSelector} from 'react-redux'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Header from 'DokaanPOS/src/component/Header'
import PriceCheck from 'DokaanPOS/src/component/PriceCheck'
import {setShowAlertAction} from 'DokaanPOS/services/redux/actions'
const AddProductScreen = () => {
  // const [showAlert, setShowAlert] = useState(false)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  interface RootState {
    showAlert: boolean
  }
  const selectShowAlert = (state: RootState) => state.showAlert
  const showAlert = useSelector(selectShowAlert)
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
  })

  const onSubmit = (data: object) => {
    // Toast.show({

    //   text: 'product added successfully.',
    //   textStyle: {
    //     color: Colors.WHITE,
    //     fontSize: 23,
    //     fontFamily: InterMediumFont,
    //   },
    //   style: {backgroundColor: Colors.GREEN},
    //   duration: 2000,
    //   position: 'top',
    //   onClose: reason => {},
    //   buttonText: 'X',
    //   buttonTextStyle: {color: Colors.WHITE, fontSize: 20},
    // })
    // navigation.goBack()
    // setShowAlert(true)
    dispatch(setShowAlertAction(true))
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
                {showAlert ? (
                  <Modal
                    transparent={true}
                    animationType='slide'
                    visible={showAlert}>
                    <PriceCheck />
                  </Modal>
                ) : null}

                <View style={[General.smallTopPadding]}></View>
              </View>
            </View>
          </View>
        </View>
      </Container>
    </>
  )
}
export default AddProductScreen
