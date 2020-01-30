import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'

import ReadMsgIcon from '../../../assets/Icons/Alerts/iconmonstr-email-7.png'
import RemoveIcon from '../../../assets/Icons/Alerts/remove.png'
import MsgIcon from '../../../assets/Icons/BottomTabIcons/Deactive/iconmonstr-email-1/iconmonstr-email-1.png'

import { Theme } from '../../../theme'

interface PItem {
  id: number
  eventName: string
  myEventReminder: string
  moment: string
  expire: string
  read: boolean
}

interface IProps {
  activeSlideIndex: number
  data: PItem[]
}

const EventModalSwipe = (props: IProps) => {
  const carouselRef = React.useRef(null)

  // const goForward = () => {
  //   carouselRef.current.snapToNext()
  // }

  const renderItem = ({ item, index }: { item: PItem; index: number }) => {
    return (
      <View style={{ height: 600 * Theme.Ratio.H, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 * Theme.Ratio.H }}>
        <View style={styles.mainContainer}>
          <View style={styles.modalHeader}>
            <View style={styles.txtView}>
              {!item.read ? <View style={styles.readMark} /> : null}
              <Text style={styles.modalHeaderTxt}>{item.eventName}</Text>
            </View>
            <Menu>
              <MenuTrigger>
                <View style={styles.morePopupBtnWrapper}>
                  <View style={styles.dotView} />
                  <View style={styles.dotView} />
                  <View style={styles.dotView} />
                </View>
              </MenuTrigger>
              <MenuOptions style={{ paddingVertical: 25 * Theme.Ratio.H, paddingHorizontal: 20 * Theme.Ratio.H }}>
                <MenuOption
                  onSelect={() => {
                    // setFilterKey('Unread')
                    // const FilteredEventReminderData = EventReminders.filter(item => item.read === false)
                    // setEventReminderData(FilteredEventReminderData)
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
                    // setFilterKey('Read')
                    // const FilteredEventReminderData = EventReminders.filter(item => item.read === true)
                    // setEventReminderData(FilteredEventReminderData)
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
                <MenuOption
                  onSelect={() => {
                    // setFilterKey('All')
                    // setEventReminderData(EventReminders)
                  }}
                  style={{ marginVertical: 5 * Theme.Ratio.H }}
                >
                  <View style={styles.menuItemWrapper}>
                    <View style={styles.itemImgWrapper}>
                      <Image source={RemoveIcon} style={{ width: 20 * Theme.Ratio.H, height: 24 * Theme.Ratio.H }} />
                    </View>
                    <Text style={styles.menuItemTxt}>Delete</Text>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
          <View style={styles.contentView}>
            <Text style={styles.contentTxt}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of it to make a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </Text>
          </View>
          <TouchableOpacity style={styles.addCalendarBtn}>
            <Text style={styles.addBtnTxt}>Add to Calendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <Carousel
      ref={carouselRef}
      layout={'default'}
      sliderWidth={Theme.Resolution.W}
      sliderHeight={600 * Theme.Ratio.H}
      itemWidth={Theme.Resolution.W - 40 * Theme.Ratio.H}
      data={props.data}
      renderItem={renderItem}
      loop={true}
      inactiveSlideScale={1}
      // inactiveSlideShift={10}
      inactiveSlideOpacity={1}
      firstItem={props.activeSlideIndex}
      // hasParallaxImages={true}
    />
  )
}

export default EventModalSwipe

const styles = StyleSheet.create({
  mainContainer: {
    height: 552 * Theme.Ratio.H,
    paddingHorizontal: 20 * Theme.Ratio.H,
    paddingVertical: 30 * Theme.Ratio.H,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  modalHeader: {
    height: 33 * Theme.Ratio.H,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14 * Theme.Ratio.H,
  },
  txtView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMark: {
    height: 12 * Theme.Ratio.H,
    width: 12 * Theme.Ratio.H,
    borderRadius: 50,
    backgroundColor: '#25AAE1',
    marginRight: 10 * Theme.Ratio.H,
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  modalHeaderTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
  },
  contentView: {
    height: 380 * Theme.Ratio.H,
  },
  contentTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 13 * Theme.Ratio.H,
    color: '#8A8A8F',
  },
  addCalendarBtn: {
    marginTop: 20 * Theme.Ratio.H,
    height: 45 * Theme.Ratio.H,
    backgroundColor: '#25AAE1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  addBtnTxt: {
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
    color: '#FFFFFF',
  },
  morePopupBtnWrapper: {
    width: 10 * Theme.Ratio.H,
    height: 18 * Theme.Ratio.H,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dotView: {
    borderRadius: 50,
    backgroundColor: '#292929',
    width: 4 * Theme.Ratio.H,
    height: 4 * Theme.Ratio.H,
  },
  menuItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImgWrapper: {
    width: 24 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
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
