import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MobileEvent } from '../../graphql'
import XDate from 'xdate'
import moment from 'moment'

import GradientBorderComponent from '../../components/GradientBorderComponent'

import SubtractionIcon from '../../assets/Icons/Prospects/SubtractionA.png'

import { Theme } from '../../theme'

interface IProps {
  eventInfo: MobileEvent
  eventDate: string
  id: number
  handleClick: () => void
}

const CalendarEventItem = (props: IProps) => {
  const renderDay = (dayOfWeek: number) => {
    let day = ''

    switch (dayOfWeek) {
      case 0:
        day = 'SUN'
        break
      case 1:
        day = 'MON'
        break
      case 2:
        day = 'TUE'
        break
      case 3:
        day = 'WED'
        break
      case 4:
        day = 'THU'
        break
      case 5:
        day = 'FRI'
        break
      case 6:
        day = 'SAT'
        break
    }
    return day
  }

  const handleClick = () => {
    props.handleClick()
  }

  const xDate = new XDate(props.eventDate)
  const date_EventDate = xDate.getDate()
  const dayOfWeek_EventDate = xDate.getDay()

  const displayTime = moment(props.eventInfo.when)
    .local()
    .format('MMMM Do YYYY, h:mm:ss A')

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={() => handleClick()}>
      {props.id === 0 ? (
        <View style={styles.dateView}>
          <Text style={styles.dayTxt}>{renderDay(dayOfWeek_EventDate)}</Text>
          <Text style={styles.dateTxt}>{date_EventDate}</Text>
        </View>
      ) : (
        <View style={styles.dateView} />
      )}
      <GradientBorderComponent>
        <View style={styles.infoWrapper}>
          <Text style={styles.eventNameTxt}>{props.eventInfo.where}</Text>
          <View style={styles.timeRangeWrapper}>
            <Image source={SubtractionIcon} style={{ width: 13 * Theme.Ratio.H, height: 13 * Theme.Ratio.H }} />
            <Text style={styles.timeRangeTxt}>{displayTime}</Text>
          </View>
        </View>
      </GradientBorderComponent>
    </TouchableOpacity>
  )
}

export default CalendarEventItem

const styles = StyleSheet.create({
  mainContainer: {
    height: 78 * Theme.Ratio.H,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateView: {
    width: 65 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayTxt: {
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 13 * Theme.Ratio.H,
    color: '#434343',
    opacity: 0.6,
  },
  dateTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 21 * Theme.Ratio.H,
    color: '#231F20',
  },
  infoWrapper: {
    height: 78 * Theme.Ratio.H,
    justifyContent: 'center',
  },
  eventNameTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
    color: '#212529',
  },
  timeRangeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeRangeTxt: {
    marginLeft: 7 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 13 * Theme.Ratio.H,
    color: '#8A8A8F',
  },
})
