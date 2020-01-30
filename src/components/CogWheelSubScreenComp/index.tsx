import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'

import NavHeader from '../navHeader'

import PhoneIcon from '../../assets/Icons/BottomTabIcons/Active/ic_call_24px/ic_call_24px.png'
import EmailIcon from '../../assets/Icons/BottomTabIcons/Active/iconmonstr-email-1/iconmonstr-email-1.png'
import LockIcon from '../../assets/Icons/CogWheel/ic_lock_blue_24px.png'
import PersonPinIcon from '../../assets/Icons/CogWheel/ic_person_pin_24px.png'

import { CogWheelSubScreenStringData } from '../../utility/Common'

import { Theme } from '../../theme'

interface IProps {
  screenName: string
  handleCheck: () => void
}

const CogWheelSubScrenComp = (props: IProps) => {
  const [firstTxtInputFocus, setFirstTxtInputFocus] = useState(false)
  const [secondTxtInputFocus, setSecondTxtInputFocus] = useState(false)

  const [nextFocusDisabled, setNextFocusDisabled] = useState(false)
  const [previousFocusDisabled, setPreviousFocusDisabled] = useState(false)

  const [dataForScreen, setDataForScreen] = useState()

  useEffect(() => {
    switch (props.screenName) {
      case 'Full Name':
        setDataForScreen(CogWheelSubScreenStringData[0])
        break
      case 'Email':
        setDataForScreen(CogWheelSubScreenStringData[1])
        break
      case 'Phone Number':
        setDataForScreen(CogWheelSubScreenStringData[2])
        break
    }
  }, [dataForScreen])

  const firstTxtInputRef = React.useRef<TextInput | null>(null)
  const secondTxtInputRef = React.useRef<TextInput | null>(null)

  const handleNextAccessoryClick = () => {
    secondTxtInputRef.current!.focus()
  }

  const handlePreviousAccessoryClick = () => {
    firstTxtInputRef.current!.focus()
  }

  const renderFirstTxTInputIIcon = () => {
    let firstTxtInputIcon = null
    switch (props.screenName) {
      case 'Full Name':
        firstTxtInputIcon = <Image source={PersonPinIcon} style={{ width: 18 * Theme.Ratio.H, height: 21 * Theme.Ratio.H }} />
        break
      case 'Email':
        firstTxtInputIcon = (
          <Image
            source={EmailIcon}
            style={{
              width: 20.66 * Theme.Ratio.H,
              height: 15.49 * Theme.Ratio.H,
            }}
          />
        )
        break
      case 'Phone Number':
        firstTxtInputIcon = (
          <Image
            source={PhoneIcon}
            style={{
              width: 16.26 * Theme.Ratio.H,
              height: 16.26 * Theme.Ratio.H,
            }}
          />
        )
        break
    }
    return firstTxtInputIcon
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavHeader type="withCheck" handleCheck={props.handleCheck} />
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>{dataForScreen ? dataForScreen.headerTxt : ''}</Text>
          <Text style={styles.labelTxt}>{dataForScreen ? dataForScreen.labelTxt : ''}</Text>
          <Text style={styles.valueTxt}>{dataForScreen ? dataForScreen.valueTxt : ''}</Text>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentViewLabelTxt}>{dataForScreen ? dataForScreen.formLabelTxt : ''}</Text>
          <View style={[styles.inputWrapper, { borderColor: firstTxtInputFocus ? '#1EABE6' : 'transparent' }]}>
            <View style={styles.iconWrapper}>{renderFirstTxTInputIIcon()}</View>
            <TextInput
              ref={firstTxtInputRef}
              style={styles.inputTxt}
              placeholder={dataForScreen ? dataForScreen.headerTxt : ''}
              onFocus={() => {
                setFirstTxtInputFocus(true)
                setPreviousFocusDisabled(true)
                setNextFocusDisabled(false)
              }}
              onBlur={() => {
                setFirstTxtInputFocus(false)
              }}
            />
          </View>
          {/* <View style={[styles.inputWrapper, { borderColor: firstTxtInputFocus ? '#1EABE6' : 'transparent' }]}>
            <View style={styles.iconWrapper}>{renderFirstTxTInputIIcon()}</View>
            <TextInput
              ref={firstTxtInputRef}
              style={styles.inputTxt}
              placeholder={dataForScreen ? dataForScreen.lastName : ''}
              onFocus={() => {
                setFirstTxtInputFocus(true)
                setPreviousFocusDisabled(true)
                setNextFocusDisabled(false)
              }}
              onBlur={() => {
                setFirstTxtInputFocus(false)
              }}
            />
          </View> */}
          <View style={[styles.inputWrapper, { borderColor: secondTxtInputFocus ? '#1EABE6' : 'transparent' }]}>
            <View style={styles.iconWrapper}>
              <Image source={LockIcon} style={styles.lockImg} />
            </View>
            <TextInput
              ref={secondTxtInputRef}
              style={styles.inputTxt}
              placeholder="Password"
              onFocus={() => {
                setSecondTxtInputFocus(true)
                setNextFocusDisabled(true)
                setPreviousFocusDisabled(false)
              }}
              onBlur={() => {
                setSecondTxtInputFocus(false)
              }}
            />
          </View>
        </View>
      </View>
      <KeyboardAccessoryNavigation
        nextDisabled={nextFocusDisabled}
        previousDisabled={previousFocusDisabled}
        onNext={() => handleNextAccessoryClick()}
        onPrevious={() => handlePreviousAccessoryClick()}
        inSafeAreaView={true}
        androidAdjustResize={true}
      />
    </SafeAreaView>
  )
}

export default CogWheelSubScrenComp

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
    marginBottom: 10 * Theme.Ratio.H,
    paddingLeft: 20 * Theme.Ratio.H,
  },
  labelTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
    opacity: 0.6,
    marginBottom: 10 * Theme.Ratio.H,
    paddingLeft: 21 * Theme.Ratio.H,
  },
  valueTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
    color: '#212529',
    paddingLeft: 21 * Theme.Ratio.H,
  },
  contentView: {
    marginTop: 40 * Theme.Ratio.H,
  },
  contentViewLabelTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
    opacity: 0.6,
    marginBottom: 10 * Theme.Ratio.H,
    paddingLeft: 21 * Theme.Ratio.H,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF9FE',
    borderRadius: 6,
    borderWidth: 2,
    height: 54 * Theme.Ratio.H,
    marginBottom: 20 * Theme.Ratio.H,
    marginHorizontal: 20 * Theme.Ratio.H,
  },
  iconWrapper: {
    width: 52 * Theme.Ratio.H,
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
  inputTxt: {
    flex: 1,
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
    height: 54 * Theme.Ratio.H,
  },
  lockImg: {
    width: 16 * Theme.Ratio.H,
    height: 21 * Theme.Ratio.H,
  },
})
