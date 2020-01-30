import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu'
import { useNavigation } from 'react-navigation-hooks'

import CallListItem from '../../../../components/3WayCallsListItem'

import FilterIcon from '../../../../assets/Icons/3WayCalls/filter/filter.png'
import ActiveIcon from '../../../../assets/Icons/3WayCalls/Group468.png'
import UserGroupIcon from '../../../../assets/Icons/3WayCalls/ic_people_24px.png'
import PlusIcon from '../../../../assets/Icons/3WayCalls/IconClose/IconClose.png'
import PandingIcon from '../../../../assets/Icons/3WayCalls/IconPanding/IconPanding.png'
import SearchIcon from '../../../../assets/Icons/3WayCalls/Search/Search.png'

import { CallWayUserListData } from '../../../../dummydata'
import { Theme } from '../../../../theme'

interface PItem {
  name: string
  id: string
  status: string
  date?: string
}

const CallWayListScreen = () => {
  const [inputFocus, setInputFocus] = useState(false)
  const [filterKey, setFilterKey] = useState('All')
  const [CallWayUserData, setCallWayUserData] = useState(CallWayUserListData)

  const navigation = useNavigation()
  const handleTabBar = (visible: boolean) => {
    navigation.setParams({ tabBarVisible: visible })
  }

  return (
    <MenuProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTxt}> 3-Way Calls </Text>
            <Menu>
              <MenuTrigger>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={styles.iconWrapper}>
                    <Image source={FilterIcon} style={styles.filterImg} />
                  </View>
                  {filterKey !== 'All' && (
                    <View style={{ flexDirection: 'row', height: 33 * Theme.Ratio.H }}>
                      <View style={styles.filterRedMark} />
                      <Text style={styles.filterKeyText}>{filterKey}</Text>
                    </View>
                  )}
                </View>
              </MenuTrigger>
              <MenuOptions style={{ paddingVertical: 25 * Theme.Ratio.H, paddingHorizontal: 20 * Theme.Ratio.H }}>
                <MenuOption
                  onSelect={() => {
                    setFilterKey('All')
                    setCallWayUserData(CallWayUserListData)
                  }}
                  style={{ marginVertical: 5 * Theme.Ratio.H }}
                >
                  <View style={styles.menuItemWrapper}>
                    <View style={styles.itemImgWrapper}>
                      <Image source={UserGroupIcon} style={{ width: 24 * Theme.Ratio.H, height: 16 * Theme.Ratio.H }} />
                    </View>
                    <Text style={styles.menuItemTxt}>All</Text>
                  </View>
                </MenuOption>
                <MenuOption
                  onSelect={() => {
                    setFilterKey('Pendig')
                    const filteredData = CallWayUserListData.filter(item => item.status === 'Panding')
                    setCallWayUserData(filteredData)
                  }}
                  style={{ marginVertical: 5 * Theme.Ratio.H }}
                >
                  <View style={styles.menuItemWrapper}>
                    <View style={styles.itemImgWrapper}>
                      <Image source={PandingIcon} style={{ width: 24 * Theme.Ratio.H, height: 24 * Theme.Ratio.H }} />
                    </View>
                    <Text style={styles.menuItemTxt}>Pending</Text>
                  </View>
                </MenuOption>
                <MenuOption
                  onSelect={() => {
                    setFilterKey('Active')
                    const filteredData = CallWayUserListData.filter(item => item.status === 'Active')
                    setCallWayUserData(filteredData)
                  }}
                  style={{ marginVertical: 5 * Theme.Ratio.H }}
                >
                  <View style={styles.menuItemWrapper}>
                    <View style={styles.itemImgWrapper}>
                      <Image source={ActiveIcon} style={{ width: 24 * Theme.Ratio.H, height: 24 * Theme.Ratio.H }} />
                    </View>
                    <Text style={styles.menuItemTxt}>Active</Text>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
          <View style={{ paddingHorizontal: 20 * Theme.Ratio.H }}>
            <View style={[styles.searchInputWrapper, { borderColor: inputFocus ? '#1EABE6' : 'transparent' }]}>
              <Image source={SearchIcon} style={styles.searchImg} />
              <TextInput
                placeholder="Search"
                style={styles.searchInput}
                onFocus={() => {
                  setInputFocus(true)
                  handleTabBar(false)
                }}
                onBlur={() => {
                  setInputFocus(false)
                  handleTabBar(true)
                }}
              />
            </View>
          </View>
          <View style={styles.contentView}>
            <View style={styles.listView}>
              <FlatList
                data={CallWayUserData}
                renderItem={({ item }: { item: PItem }) => (
                  <CallListItem userName={item.name} userId={item.id} userStatus={item.status} userDateInfo={item.date} />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <TouchableOpacity style={styles.plusButton}>
              <Image source={PlusIcon} style={styles.plusBtnImg} />
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAccessoryNavigation nextHidden={true} previousHidden={true} inSafeAreaView={true} androidAdjustResize={true} />
      </SafeAreaView>
    </MenuProvider>
  )
}

export default CallWayListScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 10 * Theme.Ratio.H,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    height: 33 * Theme.Ratio.H,
    alignItems: 'center',
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    marginRight: 18 * Theme.Ratio.H,
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
  searchInputWrapper: {
    width: '100%',
    height: 54 * Theme.Ratio.H,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 14 * Theme.Ratio.H,
    paddingVertical: 15 * Theme.Ratio.H,
    marginTop: 15 * Theme.Ratio.H,
    borderRadius: 8,
    backgroundColor: '#EDF9FE',
    marginHorizontal: 20 * Theme.Ratio.H,
    borderWidth: 2,
  },
  searchImg: {
    width: 24 * Theme.Ratio.H,
    height: 24 * Theme.Ratio.H,
    marginRight: 10 * Theme.Ratio.H,
  },
  searchInput: {
    flex: 1,
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
  },
  contentView: {
    flex: 1,
    width: '100%',
    paddingTop: 10 * Theme.Ratio.H,
    paddingBottom: 20 * Theme.Ratio.H,
    paddingLeft: 20 * Theme.Ratio.H,
    justifyContent: 'space-between',
  },
  listView: {
    width: '100%',
    // paddingTop: 10 * Theme.Ratio.H,
  },
  plusButton: {
    width: 52 * Theme.Ratio.H,
    height: 52 * Theme.Ratio.H,
    backgroundColor: '#25AAE1',
    borderWidth: 5,
    borderColor: '#BAE8F6',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 20 * Theme.Ratio.H,
  },
  plusBtnImg: {
    width: 20.54 * Theme.Ratio.H,
    height: 20.54 * Theme.Ratio.H,
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
  filterKeyText: {
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
  itemImgWrapper: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
  },
  menuItemTxt: {
    marginLeft: 20 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
    color: '#212529',
  },
})
