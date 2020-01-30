import debounce from 'lodash/debounce'
import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import Modal from 'react-native-modal'
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu'
import { useNavigation } from 'react-navigation-hooks'
import { Prospect, useGetProspectsByAffiliateQuery } from '../../../../graphql'

import ModalSelector from '../../../../components/ModalSelector'
import NavHeader from '../../../../components/navHeader'
import ProspectListItem from '../../../../components/ProspectListItem'
import SearchInput from '../../../../components/SearchInput'

import FilterIcon from '../../../../assets/Icons/3WayCalls/filter/filter.png'
import ArrowIcon from '../../../../assets/Icons/Training/arrow-right.png'

import { ProspectsUserListData } from '../../../../dummydata'
import { Theme } from '../../../../theme'
import { FilterModalSelector } from '../../../../utility/Common'

interface PItem {
  firstName: string
  lastName: string
  redeemed: boolean
  deliveryEndpoint: string
  deliveryMethod: string
  createdAt: string
}

const ProspectScreen = () => {
  const [sortKey, setSortKey] = useState('All')
  const [modalVisible, setModalVisible] = useState<string | null>(null)
  const [filterKey, setFilterKey] = useState('All')
  const [prospectsUsers, setProspectsUsers] = useState()
  const [searchKeyword, setSearchKeyword] = React.useState('')
  const [valueForInput, setValueForInput] = React.useState('')
  const [pageSize, setPageSize] = useState(15)

  const navigation = useNavigation()

  const { fetchMore, loading, data } = useGetProspectsByAffiliateQuery({
    fetchPolicy: 'network-only',
    variables: { skip: 0, pageSize, searchText: searchKeyword },
  })
  if (!loading && data) {
    console.log('Prospect data', data.getProspectsByAffiliate.prospects)
  }

  React.useEffect(() => {
    if (!loading && data) {
      setProspectsUsers(data.getProspectsByAffiliate.prospects)
      console.log('Prospect data', data.getProspectsByAffiliate.prospects)
    }
  })

  const handleFilterModalClsBtnClick = (value: string) => {
    setFilterKey(value)
    if (value !== 'All') {
      const filteredProspectsUsers = ProspectsUserListData.filter(item => item.status === value)
      setProspectsUsers(filteredProspectsUsers)
    } else {
      setProspectsUsers(ProspectsUserListData)
    }
    setModalVisible(null)
  }

  const handlePersonPinClick = (id: number) => {
    navigation.navigate('PersonPin', { prospectUserId: id })
  }

  const handleChangeTextDebounce = debounce((s: string) => {
    setSearchKeyword(s)
  }, 1000)

  const clearText = () => {
    setSearchKeyword('')
    setValueForInput('')
  }

  return (
    <MenuProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavHeader type="normal" />
        <View style={styles.mainContainer}>
          <View style={styles.topView}>
            <View style={styles.header}>
              <Text style={styles.headerTxt}>Prospects</Text>
              <Menu>
                <MenuTrigger>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.iconWrapper}>
                      <Image source={FilterIcon} style={styles.filterImg} />
                    </View>
                    {sortKey !== 'All' && (
                      <View style={{ flexDirection: 'row', height: 33 * Theme.Ratio.H }}>
                        <View style={styles.filterRedMark} />
                        <Text style={styles.sortKeyText}>{sortKey}</Text>
                      </View>
                    )}
                  </View>
                </MenuTrigger>
                <MenuOptions style={{ paddingVertical: 25 * Theme.Ratio.H, paddingHorizontal: 30 * Theme.Ratio.H }}>
                  <MenuOption
                    onSelect={() => {
                      setSortKey('All')
                    }}
                    style={{ marginVertical: 5 * Theme.Ratio.H }}
                  >
                    <Text style={styles.menuItemTxt}>All</Text>
                  </MenuOption>
                  <MenuOption
                    onSelect={() => {
                      setSortKey('Last Name')
                      const UnSortedData = prospectsUsers
                      UnSortedData.sort((a: Partial<Prospect>, b: Partial<Prospect>) => (a.lastName! > b.lastName! ? 1 : b.lastName! > a.lastName! ? -1 : 0))
                      setProspectsUsers(UnSortedData)
                    }}
                    style={{ marginVertical: 5 * Theme.Ratio.H }}
                  >
                    <Text style={styles.menuItemTxt}>Last Name</Text>
                  </MenuOption>
                  <MenuOption
                    onSelect={() => {
                      setSortKey('First Name')
                      const UnSortedData = prospectsUsers
                      UnSortedData.sort((a: Partial<Prospect>, b: Partial<Prospect>) => (a.lastName! > b.lastName! ? 1 : b.lastName! > a.lastName! ? -1 : 0))
                      setProspectsUsers(UnSortedData)
                    }}
                    style={{ marginVertical: 5 * Theme.Ratio.H }}
                  >
                    <Text style={styles.menuItemTxt}>First Name</Text>
                  </MenuOption>
                  <MenuOption
                    onSelect={() => {
                      setSortKey('Recent Activity')
                    }}
                    style={{ marginVertical: 5 * Theme.Ratio.H }}
                  >
                    <Text style={styles.menuItemTxt}>Recent Activity</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
            <SearchInput onChangeText={(text: string) => handleChangeTextDebounce(text)} clearText={() => clearText()} />
            <View style={styles.pickerWrapper}>
              <TouchableOpacity onPress={() => setModalVisible('filter')} style={styles.filterPicker}>
                <Text style={styles.filterPickerTxt}>{filterKey}</Text>
                <Image source={ArrowIcon} style={styles.arrowImg} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.listView}>
            {loading && <ActivityIndicator size="small" color="grey" />}
            {!loading && data && (
              <FlatList
                data={prospectsUsers}
                extraData={sortKey}
                renderItem={({ item }: { item: Partial<Prospect> }) => (
                  <ProspectListItem prospectsUserInfo={item} handlePersonPinClick={(id: number) => handlePersonPinClick(id)} />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            )}
          </View>
        </View>
        <Modal isVisible={modalVisible === 'filter'} backdropColor="white" backdropOpacity={0.9}>
          <ModalSelector
            handleCloseBtnClick={(value: string) => handleFilterModalClsBtnClick(value)}
            modalHeaderTxt="Filter"
            options={FilterModalSelector}
            currentValue={filterKey}
          />
        </Modal>
        <KeyboardAccessoryNavigation nextHidden={true} previousHidden={true} inSafeAreaView={true} androidAdjustResize={true} />
      </SafeAreaView>
    </MenuProvider>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  navHeader: {
    height: 28 * Theme.Ratio.H,
    width: '100%',
    justifyContent: 'center',
    marginTop: 10 * Theme.Ratio.H,
    marginBottom: 16 * Theme.Ratio.H,
    paddingLeft: 16 * Theme.Ratio.H,
  },
  backBtn: {
    width: 28 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImg: {
    width: 17.59 * Theme.Ratio.H,
    height: 14.95 * Theme.Ratio.H,
  },
  topView: {
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15 * Theme.Ratio.H,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    marginRight: 20 * Theme.Ratio.H,
  },
  iconWrapper: {
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  filterImg: {
    width: 24 * Theme.Ratio.H,
    height: 22 * Theme.Ratio.H,
  },
  filterRedMark: {
    marginLeft: 3,
    width: 6,
    height: 6,
    backgroundColor: '#ED1C24',
    borderRadius: 50,
    shadowColor: '#F70D16',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  sortKeyText: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 15 * Theme.Ratio.H,
    color: '#8A8A8F',
    marginLeft: 12 * Theme.Ratio.H,
    alignSelf: 'center',
  },
  menuItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
    color: '#212529',
  },
  pickerWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14 * Theme.Ratio.H,
    marginBottom: 6 * Theme.Ratio.H,
  },
  filterPicker: {
    width: '100%',
    height: 46 * Theme.Ratio.H,
    paddingHorizontal: 14 * Theme.Ratio.H,
    paddingVertical: 12 * Theme.Ratio.H,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EDF9FE',
    borderRadius: 8,
  },
  filterPickerTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
  },
  arrowImg: {
    width: 12 * Theme.Ratio.H,
    height: 7 * Theme.Ratio.H,
  },
  listView: {
    // paddingLeft: 16 * Theme.Ratio.H,
    flex: 1,
  },
})

export default ProspectScreen
