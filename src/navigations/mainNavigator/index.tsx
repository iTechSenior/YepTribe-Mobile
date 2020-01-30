import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

import CallWayStackNav from './callWayNav'
import CogWheelStackNav from './cogNav'
import ContactStackNav from './contactNav'
import HomeStackNav from './homeNav'
import TrainStackNav from './trainingNav'

import { SCREENS } from '../../utility/Common'

import HomeBtmTabIcon_A from '../../assets/Icons/BottomTabIcons/Active/ic_apps_24px/ic_apps_24px.png'
import HomeBtmTabIcon_D from '../../assets/Icons/BottomTabIcons/Deactive/ic_apps_24px/ic_apps_24px.png'

import CallWayBtmTabIcon_A from '../../assets/Icons/BottomTabIcons/Active/ic_call_24px/ic_call_24px.png'
import CallWayBtnTabIcon_D from '../../assets/Icons/BottomTabIcons/Deactive/ic_call_24px/ic_call_24px.png'

import TrainingBtmTabIcon_A from '../../assets/Icons/BottomTabIcons/Active/ic_local_library_24px/ic_local_library_24px.png'
import TrainingBtmTabIcon_D from '../../assets/Icons/BottomTabIcons/Deactive/ic_local_library_24px/ic_local_library_24px.png'

import ContactBtmTabIcon_A from '../../assets/Icons/BottomTabIcons/Active/iconmonstr-email-1/iconmonstr-email-1.png'
import ContactBtmTabIcon_D from '../../assets/Icons/BottomTabIcons/Deactive/iconmonstr-email-1/iconmonstr-email-1.png'

import CogWheelBtmTabIcon_A from '../../assets/Icons/BottomTabIcons/Active/ic_brightness_high_24px/ic_brightness_high_24px.png'
import CogWheelBtmTabIcon_D from '../../assets/Icons/BottomTabIcons/Deactive/ic_brightness_high_24px/ic_brightness_high_24px.png'

import { Theme } from '../../theme'

const MainStackNav = createBottomTabNavigator(
  {
    Home: { screen: HomeStackNav, path: 'home' },
    // CallWay: { screen: CallWayStackNav },
    Training: { screen: TrainStackNav },
    Contact: { screen: ContactStackNav },
    CogWheel: { screen: CogWheelStackNav },
  },
  {
    initialRouteName: SCREENS.Home,
    defaultNavigationOptions: ({ navigation }) => ({
      // paths: [{ Home: 'home' }, { CallWay: 'call' }, { Training: 'train' }, { Contact: 'contact' }, { CogWheel: 'cogwheel' }],
      tabBarIcon: ({ tintColor, focused }) => {
        const { routeName } = navigation.state
        let image
        let imgHeight
        let imgWidth
        let shadowColor
        switch (routeName) {
          case SCREENS.Home:
            image = focused ? HomeBtmTabIcon_A : HomeBtmTabIcon_D
            imgHeight = 16 * Theme.Ratio.H
            imgWidth = 16 * Theme.Ratio.H
            shadowColor = focused ? '#25AAE1' : '#000000'
            break
          case SCREENS.CallWay:
            image = focused ? CallWayBtmTabIcon_A : CallWayBtnTabIcon_D
            imgHeight = 18 * Theme.Ratio.H
            imgWidth = 18 * Theme.Ratio.H
            shadowColor = focused ? '#25AAE1' : '#000000'
            break
          case SCREENS.Training:
            image = focused ? TrainingBtmTabIcon_A : TrainingBtmTabIcon_D
            imgHeight = 20.55 * Theme.Ratio.H
            imgWidth = 18 * Theme.Ratio.H
            shadowColor = focused ? '#25AAE1' : '#000000'
            break
          case SCREENS.Contact:
            image = focused ? ContactBtmTabIcon_A : ContactBtmTabIcon_D
            imgHeight = 15.39 * Theme.Ratio.H
            imgWidth = 20.51 * Theme.Ratio.H
            shadowColor = focused ? '#25AAE1' : '#000000'
            break
          case SCREENS.CogWheel:
            image = focused ? CogWheelBtmTabIcon_A : CogWheelBtmTabIcon_D
            imgHeight = 29.45 * Theme.Ratio.H
            imgWidth = 29.45 * Theme.Ratio.H
            shadowColor = focused ? '#25AAE1' : '#000000'
            break
        }
        return (
          <View style={[styles.imageWrapper, { shadowColor }]}>
            <Image source={image} style={{ height: imgHeight, width: imgWidth }} />
          </View>
        )
      },

      tabBarOptions: {
        showLabel: false,
        style: {
          backgroundColor: navigation.state.routeName === SCREENS.Training ? 'black' : 'white',
        },
      },
    }),
  }
)

export default MainStackNav

const styles = StyleSheet.create({
  imageWrapper: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 9,
  },
})
