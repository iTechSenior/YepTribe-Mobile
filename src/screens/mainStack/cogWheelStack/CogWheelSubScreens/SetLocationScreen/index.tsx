import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import { SafeAreaView } from 'react-navigation'

import NavHeader from '../../../../../components/navHeader'

import CityIcon from '../../../../../assets/Icons/CogWheel/ic_domain_24px.png'
import ZipIcon from '../../../../../assets/Icons/CogWheel/ic_picture_in_picture_24px.png'
import StreetIcon from '../../../../../assets/Icons/CogWheel/ic_place_24px.png'
import CountryIcon from '../../../../../assets/Icons/CogWheel/ic_public_26px.png'
import ArrowIcon from '../../../../../assets/Icons/Training/arrow-right.png'

import { Theme } from '../../../../../theme'

const LocationScreen = () => {
  const [firstTxtInputFocus, setFirstTxtInputFocus] = useState(false)
  const [secondTxtInputFocus, setSecondTxtInputFocus] = useState(false)

  const [nextFocusDisabled, setNextFocusDisabled] = useState(false)
  const [previousFocusDisabled, setPreviousFocusDisabled] = useState(false)

  const firstTxtInputRef = React.useRef<TextInput | null>(null)
  const secondTxtInputRef = React.useRef<TextInput | null>(null)

  const handleNextAccessoryClick = () => {
    secondTxtInputRef.current!.focus()
  }

  const handlePreviousAccessoryClick = () => {
    firstTxtInputRef.current!.focus()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavHeader type="withCheck" />
      <View style={styles.mainContainer}>
        <Text style={styles.headerTxt}>Location</Text>
        <ScrollView>
          <View style={styles.widgetsWrapper}>
            <TouchableOpacity style={styles.pickerWrapper}>
              <View style={styles.iconWrapper}>
                <Image source={CountryIcon} style={styles.countryImg} />
              </View>
              <View style={styles.item_right_section}>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={styles.pickerLabel}>Country</Text>
                  <Text style={styles.pickerText}>USA</Text>
                </View>
                <Image source={ArrowIcon} style={styles.arrowImg} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pickerWrapper}>
              <View style={styles.iconWrapper}>
                <Image source={CityIcon} style={styles.cityImg} />
              </View>
              <View style={styles.item_right_section}>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={styles.pickerLabel}>City</Text>
                  <Text style={styles.pickerText}>Los Angeles</Text>
                </View>
                <Image source={ArrowIcon} style={styles.arrowImg} />
              </View>
            </TouchableOpacity>
            <View style={[styles.inputWrapper, { borderColor: firstTxtInputFocus ? '#1EABE6' : 'transparent' }]}>
              <View style={styles.iconWrapper}>
                <Image source={ZipIcon} style={styles.zipImg} />
              </View>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.pickerLabel}>ZIP code</Text>
                <TextInput
                  ref={firstTxtInputRef}
                  style={styles.pickerText}
                  onFocus={() => {
                    setFirstTxtInputFocus(true)
                    setPreviousFocusDisabled(true)
                    setNextFocusDisabled(false)
                  }}
                  onBlur={() => {
                    setFirstTxtInputFocus(false)
                  }}
                >
                  00001001
                </TextInput>
              </View>
            </View>
            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor: secondTxtInputFocus ? '#1EABE6' : 'transparent',
                },
              ]}
            >
              <View style={styles.iconWrapper}>
                <Image source={StreetIcon} style={styles.streetImg} />
              </View>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.pickerLabel}>Street</Text>
                <TextInput
                  ref={secondTxtInputRef}
                  style={styles.pickerText}
                  onFocus={() => {
                    setSecondTxtInputFocus(true)
                    setNextFocusDisabled(true)
                    setPreviousFocusDisabled(false)
                  }}
                  onBlur={() => {
                    setSecondTxtInputFocus(false)
                  }}
                >
                  561 Calico Drive
                </TextInput>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <KeyboardAccessoryNavigation
        nextDisabled={nextFocusDisabled}
        previousDisabled={previousFocusDisabled}
        onNext={() => handleNextAccessoryClick()}
        onPrevious={() => handlePreviousAccessoryClick()}
        inSafeAreaView={true}
        androidAdjustResize={true}
        avoidKeyboard={true}
      />
    </SafeAreaView>
  )
}

export default LocationScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20 * Theme.Ratio.H,
    justifyContent: 'center',
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
  },
  widgetsWrapper: {
    paddingTop: 24 * Theme.Ratio.H,
  },
  pickerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54 * Theme.Ratio.H,
    backgroundColor: '#EDF9FE',
    borderRadius: 6,
    marginBottom: 22 * Theme.Ratio.H,
  },
  iconWrapper: {
    width: 50 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4.65,
    elevation: 9,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54 * Theme.Ratio.H,
    backgroundColor: '#EDF9FE',
    borderRadius: 6,
    marginBottom: 22 * Theme.Ratio.H,
    borderWidth: 2,
  },
  countryImg: {
    width: 21 * Theme.Ratio.H,
    height: 21 * Theme.Ratio.H,
  },
  item_right_section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 14 * Theme.Ratio.H,
  },
  pickerLabel: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 13 * Theme.Ratio.H,
    color: '#15AEED',
  },
  pickerText: {
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
  },
  arrowImg: {
    width: 12.01 * Theme.Ratio.H,
    height: 7 * Theme.Ratio.H,
  },
  cityImg: {
    width: 20 * Theme.Ratio.H,
    height: 18 * Theme.Ratio.H,
  },
  zipImg: {
    width: 21.51 * Theme.Ratio.H,
    height: 17.58 * Theme.Ratio.H,
  },
  streetImg: {
    width: 15.05 * Theme.Ratio.H,
    height: 21.5 * Theme.Ratio.H,
  },
})
