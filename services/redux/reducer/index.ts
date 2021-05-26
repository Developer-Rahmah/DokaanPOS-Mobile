const DEFAULT_STATE = {
  showGifImage: 'yes' as string,
  password: null,
  confirmPassword: null,
  phoneNum: null,
  city: null,
  state: null,
}

const applicationReducer = (state = DEFAULT_STATE, action: any) => {
  switch (action.type) {
    case 'SET_SHOW_GIF_ICON':
      return {
        ...state,
        showGifImage: action.payload,
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
    default:
      return state
  }
}

export default applicationReducer
