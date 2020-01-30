import React, { useRef, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import { useNavigation } from 'react-navigation-hooks'

import NavHeader from '../../../../../components/navHeader'

import PhoneIcon from '../../../../../assets/Icons/BottomTabIcons/Active/ic_call_24px/ic_call_24px.png'
import CityIcon from '../../../../../assets/Icons/CogWheel/ic_domain_24px.png'
import PersonPinIcon from '../../../../../assets/Icons/CogWheel/ic_person_pin_24px.png'
import ZipcodeIcon from '../../../../../assets/Icons/CogWheel/ic_picture_in_picture_24px.png'
import StreetIcon from '../../../../../assets/Icons/CogWheel/ic_place_24px.png'
import CountryIcon from '../../../../../assets/Icons/CogWheel/ic_public_26px.png'
import ChatIcon from '../../../../../assets/Icons/Prospects/ic_chat_24px.png'
import LocalOfferIcon from '../../../../../assets/Icons/Prospects/ic_local_offer_24px.png'
import SubstractionIcon from '../../../../../assets/Icons/Prospects/SubtractionA.png'
import ArrowIcon from '../../../../../assets/Icons/Training/arrow-right.png'

import { Theme } from '../../../../../theme'

const CreateEventScreen = () => {
  const navigation = useNavigation()

  const handleCheckBtnClick = () => {
    navigation.navigate('EventDetail')
  }
  const fullNameInputRef = useRef<TextInput | null>(null)
  const dateInputRef = useRef<TextInput | null>(null)
  const descriptionInputRef = useRef<TextInput | null>(null)
  const phoneInputRef = useRef<TextInput | null>(null)
  const zipcodeInputRef = useRef<TextInput | null>(null)
  const streetInputRef = useRef<TextInput | null>(null)

  const inputRefs = [fullNameInputRef, dateInputRef, descriptionInputRef, phoneInputRef, zipcodeInputRef, streetInputRef]

  const [activeInputIndex, setActiveInputIndex] = useState(-1)
  const [nextFocusDisabled, setNextFocusDisabled] = useState(false)
  const [previousFocusDisabled, setPreviousFocusDisabled] = useState(false)

  const handleFocus = (index: number) => {
    setNextFocusDisabled(index === inputRefs.length - 1)
    setPreviousFocusDisabled(index === 0)
    setActiveInputIndex(index)
  }

  const handleFocusNext = () => {
    if (nextFocusDisabled) {
      return
    }
    inputRefs[activeInputIndex + 1].current!.focus()
  }
  const handleFocusPrevious = () => {
    if (previousFocusDisabled) {
      return
    }
    inputRefs[activeInputIndex - 1].current!.focus()
  }

  const handleDone = () => {
    setActiveInputIndex(-1)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavHeader type="withCheck" handleCheck={() => handleCheckBtnClick()} />
      <View style={styles.mainContainer}>
        <Text style={styles.headerTxt}>Create Event</Text>
        <ScrollView>
          <View style={styles.contentWrapper}>
            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor: activeInputIndex === 0 ? '#1EABE6' : 'transparent',
                },
              ]}
            >
              <View style={styles.logoWrapper}>
                <Image source={PersonPinIcon} style={{ width: 18 * Theme.Ratio.H, height: 21 * Theme.Ratio.H }} />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputLabelTxt}>Title</Text>
                <TextInput ref={inputRefs[0]} style={styles.txtInput} secureTextEntry={true} placeholder="Sarah Steiner" onFocus={() => handleFocus(0)} />
              </View>
            </View>
            <TouchableOpacity style={styles.pickerWrapper}>
              <View style={styles.logoWrapper}>
                <Image source={LocalOfferIcon} style={{ width: 20 * Theme.Ratio.H, height: 20 * Theme.Ratio.H }} />
              </View>
              <View style={styles.item_right_section}>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={styles.pickerLabel}>Category</Text>
                  <Text style={styles.pickerText}>WebCast</Text>
                </View>
                <Image source={ArrowIcon} style={styles.arrowImg} />
              </View>
            </TouchableOpacity>
            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor: activeInputIndex === 1 ? '#1EABE6' : 'transparent',
                },
              ]}
            >
              <View style={styles.logoWrapper}>
                <Image source={SubstractionIcon} style={{ width: 21 * Theme.Ratio.H, height: 21 * Theme.Ratio.H }} />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputLabelTxt}>Date & Time</Text>
                <TextInput ref={inputRefs[1]} style={styles.txtInput} secureTextEntry={true} placeholder="09.09.19, 10:00 AM" onFocus={() => handleFocus(1)} />
              </View>
            </View>
            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor: activeInputIndex === 2 ? '#1EABE6' : 'transparent',
                },
              ]}
            >
              <View style={styles.logoWrapper}>
                <Image source={ChatIcon} style={{ width: 20 * Theme.Ratio.H, height: 20 * Theme.Ratio.H }} />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputLabelTxt}>Description</Text>
                <TextInput ref={inputRefs[2]} style={styles.txtInput} secureTextEntry={true} placeholder="Lorem Ipsum" onFocus={() => handleFocus(2)} />
              </View>
            </View>
            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor: activeInputIndex === 3 ? '#1EABE6' : 'transparent',
                },
              ]}
            >
              <View style={styles.logoWrapper}>
                <Image source={PhoneIcon} style={{ width: 19.5 * Theme.Ratio.H, height: 19.5 * Theme.Ratio.H }} />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputLabelTxt}>Phone</Text>
                <TextInput ref={inputRefs[3]} style={styles.txtInput} secureTextEntry={true} placeholder="345 00 00 000" onFocus={() => handleFocus(3)} />
              </View>
            </View>
            <TouchableOpacity style={styles.pickerWrapper}>
              <View style={styles.logoWrapper}>
                <Image source={CountryIcon} style={{ width: 20 * Theme.Ratio.H, height: 20 * Theme.Ratio.H }} />
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
              <View style={styles.logoWrapper}>
                <Image source={CityIcon} style={{ width: 20 * Theme.Ratio.H, height: 18 * Theme.Ratio.H }} />
              </View>
              <View style={styles.item_right_section}>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={styles.pickerLabel}>City</Text>
                  <Text style={styles.pickerText}>Los Angels</Text>
                </View>
                <Image source={ArrowIcon} style={styles.arrowImg} />
              </View>
            </TouchableOpacity>
            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor: activeInputIndex === 4 ? '#1EABE6' : 'transparent',
                },
              ]}
            >
              <View style={styles.logoWrapper}>
                <Image source={ZipcodeIcon} style={{ width: 21.5 * Theme.Ratio.H, height: 17.6 * Theme.Ratio.H }} />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputLabelTxt}>Zip Code</Text>
                <TextInput ref={inputRefs[4]} style={styles.txtInput} secureTextEntry={true} placeholder="00001001" onFocus={() => handleFocus(4)} />
              </View>
            </View>
            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor: activeInputIndex === 5 ? '#1EABE6' : 'transparent',
                },
              ]}
            >
              <View style={styles.logoWrapper}>
                <Image source={StreetIcon} style={{ width: 15 * Theme.Ratio.H, height: 21.5 * Theme.Ratio.H }} />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputLabelTxt}>Street</Text>
                <TextInput ref={inputRefs[5]} style={styles.txtInput} secureTextEntry={true} placeholder="561 Calico Drive" onFocus={() => handleFocus(5)} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <KeyboardAccessoryNavigation
        nextDisabled={nextFocusDisabled}
        previousDisabled={previousFocusDisabled}
        onNext={() => handleFocusNext()}
        onPrevious={() => handleFocusPrevious()}
        onDone={() => handleDone()}
        inSafeAreaView={true}
        androidAdjustResize={true}
        avoidKeyboard={true}
      />
    </SafeAreaView>
  )
}

export default CreateEventScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
  },
  contentWrapper: {
    paddingTop: 15 * Theme.Ratio.H,
  },
  inputWrapper: {
    height: 54 * Theme.Ratio.H,
    backgroundColor: '#EDF9FE',
    flexDirection: 'row',
    borderRadius: 7,
    marginBottom: 20 * Theme.Ratio.H,
    borderWidth: 2,
  },
  logoWrapper: {
    width: 48 * Theme.Ratio.H,
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
  inputView: {
    flex: 1,
    justifyContent: 'center',
  },
  inputLabelTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 13 * Theme.Ratio.H,
    color: '#15AEED',
  },
  txtInput: {
    height: 23 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
  },
  pickerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54 * Theme.Ratio.H,
    backgroundColor: '#EDF9FE',
    borderRadius: 7,
    paddingRight: 14 * Theme.Ratio.H,
    marginBottom: 22 * Theme.Ratio.H,
  },
  item_right_section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
})
