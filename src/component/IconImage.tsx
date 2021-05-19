// import Styles from 'DokaanPOS/assets/styles';
// import React from 'react';
// import {Image, View} from 'react-native';
// import Colors from 'DokaanPOS/assets/styles/Colors';
// import {useSelector} from 'react-redux';

// const IconImage = ({
//   source,
//   gutter = true,
//   color = Colors.darkGray,
//   play,
//   smallIcon = false,
//   contain = false,
// }) => {
//   const IS_SMALL_DEVICE = useSelector((state) => state.isSmallDevice);

//   return (
//     <View style={gutter ? Styles.General.gutterEnd : null}>
//       <Image
//         source={source}
//         style={[
//           {width: IS_SMALL_DEVICE ? 22 : 35, height: IS_SMALL_DEVICE ? 22 : 35},
//           contain ? {resizeMode: 'contain'} : null,
//           {tintColor: color},
//           smallIcon
//             ? {
//                 width: IS_SMALL_DEVICE ? 10 : 20,
//                 height: IS_SMALL_DEVICE ? 10 : 20,
//               }
//             : null,
//         ]}
//       />
//     </View>
//   );
// };

// export default IconImage;

import React from 'react'
import {Image, ImageSourcePropType, View} from 'react-native'
import styles from 'DokaanPOS/assets/styles'
import Title from './Title'
import {Colors} from 'DokaanPOS/assets/styles/Colors'

export default function IconImage ({source,color}: {source: ImageSourcePropType,color:Colors}) {
  return (
    <Image
      source={source}
      style={[
        {width:  35, height:  35,
        resizeMode: 'contain',
        tintColor: color}]}
         
    
    />
  )
}
