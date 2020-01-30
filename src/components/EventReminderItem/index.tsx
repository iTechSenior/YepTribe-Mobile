import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Swipeout from 'react-native-swipeout'

import GradientBorderComponent from '../GradientBorderComponent'

import ReadMsgIcon from '../../assets/Icons/Alerts/iconmonstr-email-7.png'
import UnreadMsgIcon from '../../assets/Icons/BottomTabIcons/Active/iconmonstr-email-1/iconmonstr-email-1.png'
import RecycleIcon from '../../assets/Icons/Prospects/remove.png'

import { Theme } from '../../theme'

interface PItem {
  id: number
  eventName: string
  myEventReminder: string
  moment: string
  expire: string
  read: boolean
}

interface IProps {
  data: PItem

  handleEventItemClick: () => void
}

const EventReminderItem = (props: IProps) => {
  const swipeButtons = [
    {
      component: (
        <View
          style={{
            height: 78 * Theme.Ratio.H,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              shadowColor: '#25AAE1',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.2,
              shadowRadius: 4.65,

              elevation: 6,
            }}
          >
            <Image
              source={UnreadMsgIcon}
              style={{
                width: 24 * Theme.Ratio.H,
                height: 18 * Theme.Ratio.H,
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
      ),
      backgroundColor: 'white',
    },
    {
      component: (
        <View
          style={{
            height: 78 * Theme.Ratio.H,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.2,
              shadowRadius: 4.65,

              elevation: 6,
            }}
          >
            <Image
              source={ReadMsgIcon}
              style={{
                width: 24 * Theme.Ratio.H,
                height: 23.96 * Theme.Ratio.H,
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
      ),
      backgroundColor: 'white',
    },
    {
      component: (
        <View
          style={{
            height: 78 * Theme.Ratio.H,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              shadowColor: '#E12525',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.2,
              shadowRadius: 4.65,

              elevation: 6,
            }}
          >
            <Image
              source={RecycleIcon}
              style={{
                width: 20 * Theme.Ratio.H,
                height: 24 * Theme.Ratio.H,
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
      ),
      backgroundColor: 'white',
    },
  ]

  const renderImage = () => {
    let image = null

    image = props.data.read ? (
      <View style={styles.readMsgImgWrapper}>
        <Image source={ReadMsgIcon} style={styles.readMagImg} />
      </View>
    ) : (
      <View style={styles.unreadMsgImgWrapper}>
        <Image source={UnreadMsgIcon} style={styles.unreadMsgImg} />
      </View>
    )
    return image
  }

  return (
    <Swipeout right={swipeButtons} backgroundColor={'#F2F2F2'} buttonWidth={78}>
      <TouchableOpacity style={styles.mainContainer} onPress={props.handleEventItemClick}>
        <View
          style={{
            height: 78 * Theme.Ratio.H,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 22 * Theme.Ratio.H,
            paddingRight: 20 * Theme.Ratio.H,
            backgroundColor: 'white',
          }}
        >
          {renderImage()}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <GradientBorderComponent>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.eventReminderTxt}>{props.data.eventName}</Text>
                <Text style={styles.myEventReminderTxt}>{props.data.myEventReminder}</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  paddingRight: 20 * Theme.Ratio.H,
                }}
              >
                <Text style={styles.momentTxt}>{props.data.momnet}</Text>
                <Text style={[styles.expTxt, { color: props.data.read ? '#ED1C24' : '#1AACE9' }]}>{props.data.expire}</Text>
              </View>
            </View>
          </GradientBorderComponent>
        </View>
      </TouchableOpacity>
    </Swipeout>
  )
}

export default EventReminderItem

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 78 * Theme.Ratio.H,
  },
  eventReminderTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
    color: '#212529',
  },
  myEventReminderTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 13 * Theme.Ratio.H,
    color: '#8A8A8F',
  },
  momentTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 13 * Theme.Ratio.H,
    color: '#8A8A8F',
  },
  expTxt: {
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 13 * Theme.Ratio.H,
  },
  readMagImg: {
    width: 24 * Theme.Ratio.H,
    height: 23.96 * Theme.Ratio.H,
  },
  unreadMsgImg: {
    width: 24 * Theme.Ratio.H,
    height: 18 * Theme.Ratio.H,
  },
  readMsgImgWrapper: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,
    elevation: 9,
  },
  unreadMsgImgWrapper: {
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,
    elevation: 9,
  },
})
