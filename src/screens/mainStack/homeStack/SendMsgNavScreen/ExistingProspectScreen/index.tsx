import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import { useNavigation } from 'react-navigation-hooks'
import { Prospect, useGetProspectsByAffiliateQuery } from '../../../../../graphql'
import debounce from 'lodash/debounce'

import ExistinProspectListItem from '../../../../../components/ExistingProspectItem'
import SearchInput from '../../../../../components/SearchInput'

import { Theme } from '../../../../../theme'

const SendMsgScreen = () => {
  const [searchKeyword, setSearchKeyword] = React.useState('')
  const navigation = useNavigation()

  const [pageSize, setPageSize] = React.useState(15)

  const { fetchMore, loading, data } = useGetProspectsByAffiliateQuery({
    fetchPolicy: 'network-only',
    variables: { skip: 0, pageSize, searchText: searchKeyword },
  })

  const handleProspectUserClick = (id: string | undefined) => {
    const selectedProspectUserInfo = data!.getProspectsByAffiliate.prospects.find(item => item.id === id)
    const { firstName, lastName, deliveryEndpoint } = selectedProspectUserInfo!
    navigation.navigate('ProspectUserProfile', { prospectInfo: { firstName, lastName, email: deliveryEndpoint, id } })
  }

  const clearText = () => {
    setSearchKeyword('')
  }

  const handleChangeTextDebounce = debounce((s: string) => {
    setSearchKeyword(s)
  }, 1000)

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchBarWrapper}>
        <SearchInput onChangeText={(text: string) => handleChangeTextDebounce(text)} clearText={() => clearText()} />
      </View>
      <View style={styles.listView}>
        {loading && <ActivityIndicator size="small" color="grey" />}

        {!loading && data && (
          <FlatList
            data={data.getProspectsByAffiliate.prospects}
            renderItem={({ item }: { item: Partial<Prospect> }) => (
              <TouchableOpacity onPress={() => handleProspectUserClick(item.id)}>
                <ExistinProspectListItem prospectUserInfo={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
      <KeyboardAccessoryNavigation nextHidden={true} previousHidden={true} inSafeAreaView={true} androidAdjustResize={true} />
    </View>
  )
}

export default SendMsgScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  searchBarWrapper: {
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  listView: {
    flex: 1,
    paddingTop: 20 * Theme.Ratio.H,
    paddingLeft: 16 * Theme.Ratio.H,
    paddingRight: 20 * Theme.Ratio.H,
  },
})
