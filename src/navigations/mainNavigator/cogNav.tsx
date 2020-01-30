import React from 'react'
import { createStackNavigator, NavigationScreenProps } from 'react-navigation'
import CogWheelScreen from '../../screens/mainStack/cogWheelStack/CogWheelScreen'
import ChangePasswordScreen from '../../screens/mainStack/cogWheelStack/CogWheelSubScreens/ChangePasswordScreen'
import ProfileScreen from '../../screens/mainStack/cogWheelStack/CogWheelSubScreens/ProfileScreen'
import EmailScreen from '../../screens/mainStack/cogWheelStack/CogWheelSubScreens/SetEmailScreen'
import FullNameScreen from '../../screens/mainStack/cogWheelStack/CogWheelSubScreens/SetFullNameScreen'
import LocationScreen from '../../screens/mainStack/cogWheelStack/CogWheelSubScreens/SetLocationScreen'
import PhoneNumberScreen from '../../screens/mainStack/cogWheelStack/CogWheelSubScreens/SetPhoneNumberScreen'
import WebSiteScreen from '../../screens/mainStack/cogWheelStack/CogWheelSubScreens/SetWebSiteScreen'

const CogStackNav = createStackNavigator(
  {
    CogWheel: { screen: CogWheelScreen },
    Profile: { screen: ProfileScreen },
    'Full Name': { screen: FullNameScreen },
    Email: { screen: EmailScreen },
    'Phone Number': { screen: PhoneNumberScreen },
    'Change Password': { screen: ChangePasswordScreen },
    'Web Site': { screen: WebSiteScreen },
    Location: { screen: LocationScreen },
  },
  {
    initialRouteName: 'CogWheel',
    headerMode: 'none',
  }
)

CogStackNav.navigationOptions = ({ navigation }: NavigationScreenProps) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }
  return { tabBarVisible }
}

export default CogStackNav
