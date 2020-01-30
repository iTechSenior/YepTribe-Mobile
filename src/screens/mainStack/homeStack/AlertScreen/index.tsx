import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import Modal from 'react-native-modal'
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu'

import EventModal from '../../../../components/EventModal'
import EventReminderItem from '../../../../components/EventReminderItem'
import NavHeader from '../../../../components/navHeader'
import SearchInput from '../../../../components/SearchInput'

import FilterIcon from '../../../../assets/Icons/3WayCalls/filter/filter.png'
import FolderIcon from '../../../../assets/Icons/Alerts/Icon-Folder.png'
import ReadMsgIcon from '../../../../assets/Icons/Alerts/iconmonstr-email-7.png'
import RemoveIcon from '../../../../assets/Icons/Alerts/remove.png'
import MsgIcon from '../../../../assets/Icons/BottomTabIcons/Deactive/iconmonstr-email-1/iconmonstr-email-1.png'

import { EventReminders } from '../../../../dummydata'
import { Theme } from '../../../../theme'

interface PItem {
  id: number
  eventName: string
  myEventReminder: string
  moment: string
  expire: string
  read: boolean
}

const AlertScreen = () => {
  const [EventReminderData, setEventReminderData] = useState(EventReminders)
  const [filterKey, setFilterKey] = useState('All')
  const [modalVisible, setModalVisible] = useState<string | null>(null)
  const [selectedItemId, setSelectedItemId] = useState(0)
  const [searchKeyword, setSearchKeyword] = React.useState('')

  const handleEventItemClick = (id: number) => {
    setModalVisible('filter')
    setSelectedItemId(id)
  }

  const handleClsBtnClick = () => {
    setModalVisible(null)
  }

  const onChangeText = (text: string) => {
    setSearchKeyword(text)
  }

  const clearText = () => {
    setSearchKeyword('')
  }

  return (
    <MenuProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavHeader type="normal" />

        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTxt}>Alerts</Text>
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
                    setEventReminderData(EventReminders)
                  }}
                  style={{ marginVertical: 5 * Theme.Ratio.H }}
                >
                  <View style={styles.menuItemWrapper}>
                    <View style={styles.itemImgWrapper}>
                      <Image source={FolderIcon} style={{ width: 24 * Theme.Ratio.H, height: 20 * Theme.Ratio.H }} />
                    </View>
                    <Text style={styles.menuItemTxt}>All</Text>
                  </View>
                </MenuOption>
                <MenuOption
                  onSelect={() => {
                    setFilterKey('Unread')
                    const FilteredEventReminderData = EventReminders.filter(item => item.read === false)
                    setEventReminderData(FilteredEventReminderData)
                  }}
                  style={{ marginVertical: 5 * Theme.Ratio.H }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.itemImgWrapper}>
                      <Image source={MsgIcon} style={{ width: 24 * Theme.Ratio.H, height: 18 * Theme.Ratio.H }} />
                    </View>
                    <Text style={styles.menuItemTxt}>Unread</Text>
                  </View>
                </MenuOption>
                <MenuOption
                  onSelect={() => {
                    setFilterKey('Read')
                    const FilteredEventReminderData = EventReminders.filter(item => item.read === true)
                    setEventReminderData(FilteredEventReminderData)
                  }}
                  style={{ marginVertical: 5 * Theme.Ratio.H }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.itemImgWrapper}>
                      <Image source={ReadMsgIcon} style={{ width: 24 * Theme.Ratio.H, height: 23.96 * Theme.Ratio.H }} />
                    </View>
                    <Text style={styles.menuItemTxt}>Read</Text>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
          <View style={{ paddingHorizontal: 20 * Theme.Ratio.H }}>
            <SearchInput onChangeText={(text: string) => onChangeText(text)} value={searchKeyword} clearText={() => clearText()} />
          </View>
          <View style={{ flex: 1, paddingTop: 10 * Theme.Ratio.H }}>
            <FlatList
              data={EventReminderData}
              renderItem={({ item }: { item: PItem }) => <EventReminderItem data={item} handleEventItemClick={() => handleEventItemClick(item.id)} />}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
        <Modal isVisible={modalVisible === 'filter'} backdropColor="white" backdropOpacity={0.9}>
          <MenuProvider style={{ justifyContent: 'center' }}>
            <EventModal handleClsBtnClick={() => handleClsBtnClick()} activeSlideIndex={selectedItemId} />
          </MenuProvider>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20 * Theme.Ratio.H,
    marginBottom: 15 * Theme.Ratio.H,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
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
    elevation: 9,
  },
  menuItemTxt: {
    marginLeft: 20 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
    color: '#212529',
  },
})

export default AlertScreen
