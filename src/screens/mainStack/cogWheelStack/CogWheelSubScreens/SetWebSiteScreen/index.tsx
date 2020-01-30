import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'

import NavHeader from '../../../../../components/navHeader'
import { Theme } from '../../../../../theme'

import UrlIcon from '../../../../../assets/Icons/CogWheel/Icon-Website.png'

const SetWebSiteScreen = () => {
  const [inputFocus, setInputFocus] = useState(false)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavHeader type="withCheck" />
      <View style={styles.mainContainer}>
        <Text style={styles.headerTxt}>Website</Text>
        <View style={[styles.txtInputWrapper, { borderColor: inputFocus ? '#1EABE6' : 'transparent' }]}>
          <View style={styles.iconWrapper}>
            <Image source={UrlIcon} style={{ width: 22 * Theme.Ratio.H, height: 22 * Theme.Ratio.H }} />
          </View>
          <TextInput
            style={styles.txtInput}
            placeholder="URL"
            onFocus={() => {
              setInputFocus(true)
            }}
            onBlur={() => {
              setInputFocus(false)
            }}
          />
        </View>
      </View>
      <KeyboardAccessoryNavigation nextHidden={true} previousHidden={true} inSafeAreaView={true} androidAdjustResize={true} />
    </SafeAreaView>
  )
}

export default SetWebSiteScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
    paddingLeft: 20 * Theme.Ratio.H,
    marginBottom: 24 * Theme.Ratio.H,
  },
  txtInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54 * Theme.Ratio.H,
    backgroundColor: '#EDF9FE',
    borderRadius: 6,
    borderWidth: 2,
    marginLeft: 21.5 * Theme.Ratio.H,
    marginRight: 20 * Theme.Ratio.H,
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
  txtInput: {
    flex: 1,
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
    height: 54 * Theme.Ratio.H,
  },
})
