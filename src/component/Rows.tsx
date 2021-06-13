// import General from 'DokaanPOS/assets/styles/General'
// import React from 'react'
// import {SectionList} from 'react-native'
// import {FlatList} from 'react-native-gesture-handler'
// import Col from './Col'
// import EmptyListMessage from './EmptyListMessage'
// import LoadingMore from './LoadingMore'

// export default function Rows ({
//   loading,
//   data,
//   renderItem,
//   isSectionList,
// }: {
//   loading?: boolean
//   data: object[]
//   renderItem?: any
//   isSectionList: boolean
// }) {
//   const Listing = isSectionList ? SectionList : (FlatList as React.ElementType)
//   // const Component = scrollAble ? ScrollView : (View as React.ElementType)

//   return (
//     <Listing
//       data={data}
//       // ListEmptyComponent={EmptyListMessage}
//       // ListFooterComponent={({}) => <LoadingMore loading={loading} />}
//       renderItem={data => <Col style={[{flex: 1}]}>{renderItem(data)}</Col>}
//     />
//   )
// }

import React from 'react'
import LoadingMore from 'DokaanPOS/src/component/LoadingMore'
import styles from 'DokaanPOS/assets/styles'
import Col from 'DokaanPOS/src/component/Col'
import EmptyListMessage from 'DokaanPOS/src/component/EmptyListMessage'
import {FlatList} from 'react-native-gesture-handler'
import {SectionList} from 'react-native'

/**
 *
 * @param {import('react-native').FlatListProps|{loading:boolean,bottomSpace:boolean,usePadding:boolean,paddingAmount:number,largeBottomSpace:boolean}} param0
 */
export default function Rows ({
  loading,
  showsVerticalScrollIndicator = false,
  bottomSpace,
  largeBottomSpace,
  renderItem,
  usePadding = false,
  paddingAmount = 150,
  isSectionList,

  ...rest
}: {
  loading: boolean
  showsVerticalScrollIndicator: boolean
  bottomSpace: boolean
  largeBottomSpace: boolean
  renderItem: any
  usePadding: boolean
  paddingAmount: number
  isSectionList: boolean

  rest: any
}) {
  const Listing = isSectionList ? SectionList : (FlatList as React.ElementType)

  return (
    <Listing
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      ListEmptyComponent={EmptyListMessage}
      contentContainerStyle={{paddingBottom: usePadding ? paddingAmount : 0}}
      ListFooterComponent={({}) => <LoadingMore loading={loading} />}
      renderItem={props => (
        <Col style={[bottomSpace && styles.General.paddingBottom, {flex: 1}]}>
          {renderItem(props)}
        </Col>
      )}
      {...rest}
    />
  )
}
