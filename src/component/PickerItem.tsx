import React, {useState} from 'react'
import {View} from 'react-native'
import Title from './Title'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import {useDispatch} from 'react-redux'
import Layout from 'DokaanPOS/assets/styles/Layout'
import General from 'DokaanPOS/assets/styles/General'
import Elements from 'DokaanPOS/assets/styles/Elements'
import {Picker} from 'native-base'
import {setCityAction, setStateAction} from 'DokaanPOS/services/redux/actions'

export default function PickerItem ({
  label,

  itemsList,
}: {
  label: string

  itemsList: Array<string>
}) {
  const [itemSelected, setItemSelected] = useState<number>(null)

  const dispatch = useDispatch()

  const onValueChange = (value: string) => {
    setItemSelected(value)
    if (label == 'City') {
      dispatch(setCityAction(value))
    } else {
      dispatch(setStateAction(value))
    }
  }

  return (
    <>
      <View style={[Layout.flexStart, General.smallTopPadding]}>
        <Title
          color={itemSelected == null ? Colors.RED : Colors.LIGHT_GRAY}
          title={label + '*'}
        />

        <View
          style={[
            Elements.fieldContainer,
            {
              borderColor:
                itemSelected == null ? Colors.RED : Colors.LIGHT_GRAY,
              paddingHorizontal: 10,
              paddingVertical: 5,
            },
          ]}>
          <Picker
            mode='dialog'
            style={{color: itemSelected == null ? Colors.GRAY : Colors.BLACK}}
            selectedValue={itemSelected}
            onValueChange={value => {
              onValueChange(value)
            }}>
            <Picker.Item label={`Select ${label}`} value={null} />
            {itemsList.map((item, index) => {
              return <Picker.Item label={item} value={index} key={index} />
            })}
          </Picker>
        </View>
      </View>
    </>
  )
}
