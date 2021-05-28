export const setIsAuthAction = (isAuth: string) => ({
  type: 'SET_IS_AUTH',
  payload: isAuth,
})

export const setPasswordAction = (password: string) => ({
  type: 'SET_PASSWORD',
  payload: password,
})
export const setPhoneNumAction = (phoneNum: string) => ({
  type: 'SET_PHONE_NUM',
  payload: phoneNum,
})
export const setCityAction = (city: string) => ({
  type: 'SET_CITY',
  payload: city,
})
export const setStateAction = (state: string) => ({
  type: 'SET_STATE',
  payload: state,
})
export const setConfirmPasswordAction = (confirmPassword: string) => ({
  type: 'SET_CONFIRM_PASSWORD',
  payload: confirmPassword,
})
