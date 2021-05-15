import {StyleSheet, Dimensions} from 'react-native'
import {Colors} from './Colors'

const General = StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '100%',
  },

  lightGrayBackground: {
    backgroundColor: Colors.BEIGE,
  },

  greenBackground: {
    backgroundColor: Colors.GREEN,
  },

  transparentBackground: {
    backgroundColor: 'transparent',
  },
  whiteBackgroundColor: {
    backgroundColor: Colors.WHITE,
  },

  horizontalPadding: {
    paddingHorizontal: 10,
  },

  verticalPadding: {
    paddingVertical: Dimensions.get('window').height / 17,
  },
  smallTopPadding: {
    paddingTop: Dimensions.get('window').height / 50,
  },
  mediumTopPadding: {
    paddingTop: Dimensions.get('window').height / 35,
  },
  mediumVerticalPadding: {
    paddingVertical: Dimensions.get('window').height / 35,
  },
  smallVerticalPadding: {
    paddingVertical: Dimensions.get('window').height / 200,
  },

  paddingBottom: {
    paddingBottom: Dimensions.get('window').height / 7.5,
  },

  paddingTop: {
    paddingTop: Dimensions.get('window').height / 15,
  },
  border: {
    borderWidth: 1,
  },

  shadow: {
    elevation: 1.5,
    shadowColor: Colors.BLACK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  seventyWidthPercentage: {
    width: '70%',
  },

  largePadding: {
    paddingVertical: Dimensions.get('window').width / 27,
    paddingHorizontal: Dimensions.get('window').width / 37,
  },
})
export default General
