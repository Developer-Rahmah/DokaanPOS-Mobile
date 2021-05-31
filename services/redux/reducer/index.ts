const DEFAULT_STATE = {
  isAuth: 'yes' as string,
  password: null,
  confirmPassword: null,
  phoneNum: null,
  city: null,
  state: null,
  showAlert: null,
}

const applicationReducer = (state = DEFAULT_STATE, action: any) => {
  switch (action.type) {
    case 'SET_IS_AUTH':
      return {
        ...state,
        isAuth: action.payload,
      }
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
      }
    case 'SET_PHONE_NUM':
      return {
        ...state,
        phoneNum: action.payload,
      }

    case 'SET_CITY':
      return {
        ...state,
        city: action.payload,
      }
    case 'SET_STATE':
      return {
        ...state,
        state: action.payload,
      }
    case 'SET_CONFIRM_PASSWORD':
      return {
        ...state,
        confirmPassword: action.payload,
      }
    case 'SET_SHOW_ALERT':
      return {
        ...state,
        showAlert: action.payload,
      }

    default:
      return state
  }
}

export default applicationReducer
