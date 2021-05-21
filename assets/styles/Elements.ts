import {Dimensions, I18nManager, StyleSheet} from 'react-native'
import {Colors} from 'DokaanPOS/assets/styles/Colors'
import {InterRegularFont} from 'DokaanPOS/assets/styles/Fonts'

const Elements = StyleSheet.create({
  title: {
    fontFamily: InterRegularFont,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: Dimensions.get('window').width / 30,
  },

  summary: {
    color: Colors.LIGHT_GRAY,
    fontFamily: InterRegularFont,
    fontSize: 15,
    textAlign: 'left',
  },

  searchInputContainer: {
    padding: 7,
    borderRadius: Dimensions.get('window').width / 7,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    backgroundColor: Colors.LIGHT_YELLOW,
  },
  inputContainer: {
    width: '90%',
  },
  helpBtn: {
    paddingVertical: Dimensions.get('window').width / 240,
    paddingHorizontal: Dimensions.get('window').width / 50,
  },
  input: {
    color: Colors.BLACK,
    fontFamily: InterRegularFont,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },

  bottomTabContainer: {
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: Colors.LIGHT_BLUE,
    borderTopColor: Colors.LIGHT_GRAY,
    borderTopWidth: 0.9,
  },
  bottomTabButtonContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderTopWidth: 0,
  },

  lightSeparator: {
    width: '100%',
    height: 1,
    opacity: 0.5,
    marginVertical: 3,
    backgroundColor: Colors.BLACK,
  },

  noItemsMessageContainer: {
    height: Dimensions.get('window').height / 1.7,
  },

  playerName: {
    width: '68%',
  },

  headerTopPaddingIphoneXCase: {
    paddingTop: Dimensions.get('window').height / 20,
  },
  headerTopPadding: {
    paddingTop: Dimensions.get('window').height / 47,
  },
  headerTitleContainerInAuthCase: {
    width: '100%',
  },
  headerTitleContainerInShowBackCase: {
    width: '80%',
  },
  dropDownMenuBorder: {
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 20,
  },
  fieldContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  passwordInput: {width: '90%', marginEnd: 10},
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
})
export default Elements
