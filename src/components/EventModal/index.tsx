import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu'

import EventModalSwipe from '../../components/EventModal/EventModalSwipe'

import CloseIcon from '../../assets/Icons/Training/Icon-Close.png'

import { EventReminders } from '../../dummydata'
import { Theme } from '../../theme'

interface IProps {
  activeSlideIndex: number
  handleClsBtnClick: () => void
}

const EventModal = (props: IProps) => {
  const handleClsBtnClick = () => {
    props.handleClsBtnClick()
  }

  return (
    <View style={styles.modalWrapper}>
      <EventModalSwipe data={EventReminders} activeSlideIndex={props.activeSlideIndex} />
      <TouchableOpacity onPress={() => handleClsBtnClick()} style={styles.closeBtn}>
        <Image source={CloseIcon} style={{ width: 14.5 * Theme.Ratio.H, height: 14.5 * Theme.Ratio.H }} />
      </TouchableOpacity>
    </View>
  )
}

export default EventModal

const styles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalHeaderTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
    marginBottom: 14 * Theme.Ratio.H,
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
  closeBtn: {
    width: 42 * Theme.Ratio.H,
    height: 42 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'white',
    marginTop: 20 * Theme.Ratio.H,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
})
