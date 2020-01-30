import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { Theme } from '../../../../theme'

import LogOutIcon from '../../../../assets/Icons/CogWheel/Logout.png'

import CogWheelListItem from '../../../../components/CogWheelListItem'

import { CogWheelOptions, SCREENS } from '../../../../utility/Common'

const CogWheelScreen = () => {
  const navigation = useNavigation()

  const handleOptionClick = (optionName: string) => {
    navigation.navigate(optionName)
  }

  const handleLogOut = () => {
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>Settings</Text>
          <TouchableOpacity onPress={() => handleLogOut()}>
            <Image source={LogOutIcon} style={styles.LogoutBtnImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.listView}>
          {CogWheelOptions.map((item, index) => {
            if (index !== CogWheelOptions.length - 1) {
              return (
                <TouchableOpacity key={index} onPress={() => handleOptionClick(item)}>
                  <CogWheelListItem option={item} />
                </TouchableOpacity>
              )
            }
            return <CogWheelListItem key={index} option={item} />
          })}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CogWheelScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 10 * Theme.Ratio.H,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
  },
  LogoutBtnImg: {
    width: 24 * Theme.Ratio.H,
    height: 20 * Theme.Ratio.H,
  },
  listView: {
    flex: 1,
    paddingTop: 15 * Theme.Ratio.H,
    paddingHorizontal: 22 * Theme.Ratio.H,
  },
})
