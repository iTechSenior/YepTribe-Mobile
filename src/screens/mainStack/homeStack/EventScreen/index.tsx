import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import { useNavigation } from 'react-navigation-hooks'
import XDate from 'xdate'
import { xdateToData } from '../../../../components/Calendar/src/interface'
import { MobileEvent, useLocalEventsForMobileQuery } from '../../../../graphql'

import { Calendar } from '../../../../components/Calendar/src'
import CalendarEventItem from '../../../../components/CalendarEventItem'
import NavHeader from '../../../../components/navHeader'
import SearchInput from '../../../../components/SearchInput'

import debounce from 'lodash/debounce'

// import PlusIcon from '../../../../assets/Icons/3WayCalls/IconClose/IconClose.png'
import ArrowIcon from '../../../../assets/Icons/Training/arrow-right.png'

import { Theme } from '../../../../theme'

interface TDate {
  year: number
  month: string
  day: number
  dayOfWeek: number
  timestamp: string
  dateString: string
}

const EventScreen = () => {
  const dotItem1 = { key: '1', color: '#25AAE1', selectedDotColor: 'white' }
  const dotItem2 = { key: '2', color: '#25AAE1', selectedDotColor: 'white' }

  const [weeklyShow, setWeeklyShow] = useState(true)
  const [eventData, setEventData] = useState()
  const [dayOfWeek, setDayOfWeek] = useState<number | null>(null)
  const [date, setDate] = useState()

  const [searchText, setSearchText] = React.useState('')

  // const convData: any = {}
  // DailyEvents.forEach((item, index) => {
  //   convData[item.date] = { dots: item.events.length < 2 ? [dotItem1] : [dotItem1, dotItem2] }
  // })
  const [markedDates, setMarkedDates] = useState()

  const convData: any = {}

  const today = new XDate()
  // console.log('today', today)
  const currentDateData = xdateToData(today)

  const [currentYear, setCurrentYear] = useState(currentDateData.year)
  const [currentMonth, setCurrentMonth] = useState(currentDateData.month)

  const { loading, data } = useLocalEventsForMobileQuery({ variables: { month: currentMonth, year: currentYear, searchText }, fetchPolicy: 'network-only' })
  // if (!loading && data) console.log('query data', data)
  const setMarkDates = (key: string) => {
    data!.getLocalEventsForMobile.groupedEvents.forEach((item, index) => {
      convData[item.day] = { dots: item.events.length < 2 ? [dotItem1] : [dotItem1, dotItem2] }
    })
    // if (!markedDates) {
    // setMarkedDates(convData)
    // }

    setSelectedDate(key, convData)

    // console.log('second convData', convData)
  }
  useEffect(() => {
    if (!loading && data && !markedDates) {
      setMarkDates(currentDateData.dateString)
      setSelectedDateEventData(currentDateData)
      // setCurrentDate(currentDateData)
      // setSelectedDate()
    }
  })

  const navigation = useNavigation()

  const handleAddEventBtnClick = () => {
    navigation.navigate('CreateEvent')
  }

  const onClickToggleDownCalendar = () => {
    setWeeklyShow(false)
  }

  const setSelectedDate = (key: string, convData: any) => {
    let markedDate2 = {}
    // console.log('-----------key', key)
    // console.log('---------------convdata', convData)

    Object.keys(convData).forEach((element: string) => {
      if ('selected' in convData[element]) {
        if (convData[element].selected) {
          markedDate2 = { [element]: { ...convData[element], selected: false } }
        }
        return
      }
    })
    let markedDate1 = {}

    markedDate1 = typeof convData[key] !== 'undefined' ? { [key]: { ...convData[key], selected: true } } : { [key]: { selected: true } }

    const newMarkedDates = JSON.stringify({ ...convData, ...markedDate2, ...markedDate1 })

    if (JSON.stringify(markedDates) !== newMarkedDates) {
      setMarkedDates({ ...convData, ...markedDate2, ...markedDate1 })
    }
  }

  const setSelectedDateEventData = (day: TDate) => {
    if (!loading && data) {
      const selectedDateEventData = data.getLocalEventsForMobile.groupedEvents.find(item => item.day === day.dateString)

      // console.log('seletectDateEventData', selectedDateEventData)
      if (selectedDateEventData) {
        setEventData(selectedDateEventData)
        setDayOfWeek(day.dayOfWeek)
        setDate(day.day)
      } else {
        setEventData(null)
      }
    }
  }

  const onDayPress = (day: TDate) => {
    setWeeklyShow(true)
    if (markedDates) {
      setSelectedDate(day.dateString, markedDates)
    }
    setSelectedDateEventData(day)
  }

  const onChangeText = debounce((s: string) => {
    setSearchText(s)
  }, 1000)

  const clearText = () => {
    setSearchText('')
  }

  const handleEventClick = (index: number, id?: number) => {
    if (id !== undefined) {
      const eventDetailData = data!.getLocalEventsForMobile.groupedEvents[index].events[id]
      navigation.navigate('EventDetail', { EventDetailData: eventDetailData })
    } else {
      navigation.navigate('EventDetail', { EventDetailData: eventData.events[index] })
    }
  }

  // const handleMonthChange = month => {
  //   console.log('MonthChange', month)
  // }

  // const handlePressArrow = calendar => {
  //   console.log('arrowleft', calendar)
  // }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavHeader type="normal" />
      <View style={styles.mainContainer}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTxt}>Events</Text>
          {/* <Text style={styles.headerDateTxt}>July 2019</Text> */}
        </View>
        <View style={styles.searchInputWrapper}>
          <SearchInput onChangeText={(text: string) => onChangeText(text)} clearText={() => clearText()} />
        </View>
        {!searchText && (
          <>
            <View style={styles.calendarWrapper}>
              <Calendar
                onDayPress={(day: TDate) => onDayPress(day)}
                style={styles.calendar}
                // hideExtraDays={false}
                markedDates={{ ...markedDates }}
                markingType={'multi-dot'}
                weeklyShow={weeklyShow}
                // onMonthChange={month => handleMonthChange(month)}
                // onPressArrowLeft={calendar => handlePressArrow(calendar)}
                // onPressArrowRight={() => handleChangeMonth()}
              />
              {weeklyShow && (
                <TouchableOpacity onPress={() => onClickToggleDownCalendar()}>
                  <Image source={ArrowIcon} style={styles.arrowImg} />
                </TouchableOpacity>
              )}
            </View>
            {eventData && (
              <FlatList
                data={eventData.events}
                renderItem={({ item, index }: { item: MobileEvent; index: number }) => (
                  <CalendarEventItem id={index} eventDate={eventData.day} eventInfo={item} handleClick={() => handleEventClick(index)} />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            )}
          </>
        )}

        {!!searchText && !loading && data && (
          <ScrollView>
            {data.getLocalEventsForMobile.groupedEvents.map((i, index) => (
              <View key={index} style={styles.searchResultView}>
                {i.events.map((item, id) => (
                  <CalendarEventItem key={id} id={id} eventDate={i.day} eventInfo={item} handleClick={() => handleEventClick(index, id)} />
                ))}
              </View>
            ))}
          </ScrollView>
        )}
      </View>
      {/* <TouchableOpacity onPress={() => handleAddEventBtnClick()} style={styles.plusButton}>
        <Image source={PlusIcon} style={styles.plusBtnImg} />
      </TouchableOpacity> */}
      <KeyboardAccessoryNavigation inSafeAreaView={true} androidAdjustResize={true} nextHidden={true} previousHidden={true} />
    </SafeAreaView>
  )
}

export default EventScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20 * Theme.Ratio.H,
    marginBottom: 15 * Theme.Ratio.H,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
  },
  headerDateTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
  },
  searchInputWrapper: {
    paddingHorizontal: 20 * Theme.Ratio.H,
    marginBottom: 10 * Theme.Ratio.H,
  },
  calendarWrapper: {
    alignItems: 'center',
    marginBottom: 10 * Theme.Ratio.H,
  },
  calendar: {
    width: '100%',
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
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
  arrowImg: {
    marginTop: 10,
    width: 25 * Theme.Ratio.H,
    height: 14 * Theme.Ratio.H,
  },
  searchResultView: {
    flex: 1,
    paddingTop: 10 * Theme.Ratio.H,
  },
})
