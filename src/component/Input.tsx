import React from 'react'
import styles from 'DokaanPOS/assets/styles'
import {KeyboardType, TextInput, View} from 'react-native'
import Layout from 'DokaanPOS/assets/styles/Layout'
import Title from './Title'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
// import {Entypo} from 'react-native-vector-icons'

export default function Input ({
  onChangeText,
  label,
  keyboardType,
  isPassword,
  background,
  value
}: {
  onChangeText?: any
  value: string
  label: string
  keyboardType?: KeyboardType,
  isPassword?:boolean
  background?:Colors
}) {
  return (
    <>
    <View style={{justifyContent: 'flex-start', alignItems: 'flex-start',paddingTop:20}}>
      <Title color={value || value == null ? Colors.LIGHT_GRAY : Colors.RED} title={label + '*'} />
      {isPassword?
      <View style={{ flexDirection: 'row',
  borderBottomWidth: 1,
  

  paddingBottom: 10}}>
  <TextInput
    style={{flex: 1}}
    autoCorrect={false}
    secureTextEntry
    placeholder='Password'
    // value={this.state.password}
    // onChangeText={this.onPasswordEntry}
  />
</View>

    
    :
      <TextInput
      placeholder={label}
        style={{
          // borderColor: Colors.LIGHT_GRAY,
          borderColor:value || value == null ? Colors.LIGHT_GRAY : Colors.RED,
          borderWidth: 1,
          borderRadius: 5,
          padding: 20,
          width: '100%',
          backgroundColor:background
          
        }}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
}
    </View>
    </>
  )
}
