import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import Input from 'DokaanPOS/src/general/Input'
import Header from 'DokaanPOS/src/layout/Header'
import Colors from 'DokaanPOS/assets/styles/Colors'
import Container from 'DokaanPOS/src/general/Container'
import ErrorMsg from 'DokaanPOS/src/general/ErrorMsg'
import { Picker } from 'native-base'
import styles from 'DokaanPOS/assets/styles'
import Button from 'DokaanPOS/src/general/Button'
import { useNavigation } from '@react-navigation/core'
import { ItemContext } from 'DokaanPOS/src/context/ItemContext'
import { ProductType } from 'DokaanPOS/src/types/ProductType'
import LocalStorage from 'DokaanPOS/src/services/helper/LocalStorage'

export default function CreateNewProductScreen () {
  const [items, setItems] = useContext(ItemContext)
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = data => {
    data.type = productTypes[productTypeSelected]

    setItems(prevItems => {
      setItems([...prevItems, data])
      const products = [...prevItems, data]

      LocalStorage.set('products', products)
    })

    navigation.goBack()
  }
  const [productTypeSelected, setProductTypeSelected] = useState<number>(0)
  const productTypes = [ProductType.integrated, ProductType.peripheral]

  const onValueChange = value => {
    setProductTypeSelected(value)
  }
  useEffect(() => {}, [productTypeSelected])

  return (
    <>
      <Container>
        <>
          <Header
            greenHeader={false}
            titleColor={Colors.BLACK}
            title='Create New Product'
          />

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label='Name'
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name='name'
            rules={{ required: true }}
          />
          {errors.name && <ErrorMsg errorMsg='This is required.' />}

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label='Price'
                onChangeText={value => onChange(value)}
                value={value}
                keyboardType='decimal-pad'
              />
            )}
            name='price'
            defaultValue=''
            rules={{
              required: true,
              min: productTypeSelected == 0 ? 1000 : 0,
              max: productTypeSelected == 0 ? 1500 : null
            }}
          />

          {errors.price && (
            <ErrorMsg
              errorMsg={`${
                productTypeSelected == 0
                  ? 'products may be anywhere within range 1000 to 2600 dollars'
                  : 'test'
              }`}
            />
          )}

          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <View
                style={[
                  styles.Layout.inputContainer,
                  styles.General.lightGrayBackground,
                  styles.General.mediumVerticalPadding
                ]}
              >
                <Picker
                  mode='dialog'
                  style={[
                    styles.Layout.fieldContainerStyle,
                    styles.Layout.pickerContainer
                  ]}
                  selectedValue={productTypeSelected}
                  onValueChange={value => {
                    onChange(value), onValueChange(value)
                  }}
                >
                  {productTypes.map((item, index) => {
                    return (
                      <Picker.Item label={item} value={index} key={index} />
                    )
                  })}
                </Picker>
              </View>
            )}
            name='type'
            defaultValue=''
          />
          {errors.type && <ErrorMsg errorMsg='tttttt' />}
          <View
            style={[
              styles.Layout.flexDirectionRow,
              styles.General.fullWidth,
              styles.Layout.flexCenter,
              styles.Layout.justifyContentSpaceBetween
            ]}
          >
            <Button
              locked={!isValid}
              style={styles.Layout.fortySevenWidth}
              backgroundColor={Colors.GREEN}
              txtColor={Colors.WHITE}
              title='SAVE'
              name='align-bottom'
              onClick={handleSubmit(onSubmit)}
            />
            <View
              style={[
                styles.General.border,
                styles.Layout.fortySevenWidth,
                styles.Layout.radius
              ]}
            >
              <Button
                backgroundColor={Colors.LIGHT_GRAY}
                txtColor={Colors.BLACK}
                withBorder
                title='CANCEL'
                name='block'
                onClick={() => {
                  navigation.goBack()
                }}
              />
            </View>
          </View>
        </>
      </Container>
    </>
  )
}
