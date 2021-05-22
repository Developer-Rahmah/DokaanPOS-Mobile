import React, {useState} from 'react'
import {KeyboardType, TextInput, View} from 'react-native'
import Title from './Title'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import {useDispatch, useSelector} from 'react-redux'
import {setPasswordAction} from 'DokaanPOS/services/redux/actions'
import IconImage from './IconImage'
import Eye from 'DokaanPOS/assets/icons/eye.png'
import EyeWithLine from 'DokaanPOS/assets/icons/eye-with-line.png'
import USAFlag from 'DokaanPOS/assets/icons/united-states.png'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Layout from 'DokaanPOS/assets/styles/Layout'
import General from 'DokaanPOS/assets/styles/General'
import Elements from 'DokaanPOS/assets/styles/Elements'

export default function Input ({
  onChangeText,
  label,
  keyboardType,
  isPassword,
  background,
  value,
  isPhone = false,
}: {
  onChangeText?: any
  value: string
  label: string
  keyboardType?: KeyboardType
  isPassword?: boolean
  background?: Colors
  isPhone?: boolean
}) {
  const dispatch = useDispatch()
  const [password, setPassword] = useState<string | undefined>(undefined)
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true)
  const onChangePassword = (value: string) => {
    setPassword(value)
    dispatch(setPasswordAction(value))
  }

  return (
    <>
      <View style={[Layout.flexStart, General.smallTopPadding]}>
        <Title
          color={value || value == null ? Colors.LIGHT_GRAY : Colors.RED}
          title={label + '*'}
        />
        {isPassword ? (
          <View
            style={[
              Elements.fieldContainer,
              {
                borderColor:
                  password || password == null ? Colors.LIGHT_GRAY : Colors.RED,
                padding: 10,
              },
            ]}>
            <TextInput
              style={[Elements.passwordInput]}
              autoCorrect={false}
              secureTextEntry={secureTextEntry}
              placeholder='Password'
              value={password}
              onChangeText={val => onChangePassword(val)}
            />
            <TouchableOpacity
              onPress={() => setSecureTextEntry(!secureTextEntry)}>
              <IconImage source={secureTextEntry ? Eye : EyeWithLine} />
            </TouchableOpacity>
          </View>
        ) : isPhone ? (
          <View
            style={[
              Elements.fieldContainer,
              {
                borderColor:
                  password || password == null ? Colors.LIGHT_GRAY : Colors.RED,
                padding: 0,
              },
            ]}>
            <View
              style={{
                borderEndColor: '#d9e1ec',
                borderEndWidth: 2,
                height: '100%',
                flexDirection: 'row',
                paddingHorizontal: 20,
                alignItems: 'center',
              }}>
              <IconImage source={USAFlag} />
              <Title title='+1' />
            </View>
            <TextInput
              maxLength={10}
              style={[Elements.passwordInput, {margin: 10}]}
              autoCorrect={false}
              placeholder='xxx xxx xxxx'
              value={password}
              keyboardType='number-pad'
              onChangeText={val => onChangePassword(val)}
            />
          </View>
        ) : (
          <TextInput
            placeholder={label}
            style={[
              Elements.fieldContainer,
              {
                borderColor:
                  value || value == null ? Colors.LIGHT_GRAY : Colors.RED,
              },
            ]}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
          />
        )}
      </View>
    </>
  )
}
