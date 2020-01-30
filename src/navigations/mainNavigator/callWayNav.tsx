import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { createStackNavigator, NavigationScreenProps } from 'react-navigation'
import AddNewHelperScreen from '../../screens/mainStack/callWayStack/CallWayAddNewHelperScreen'
import CallWayListScreen from '../../screens/mainStack/callWayStack/CallWayListScreen'

const CallWayStack = createStackNavigator(
  {
    CallWayList: { screen: CallWayListScreen },
  },
  {
    initialRouteName: 'CallWayList',
    headerMode: 'none',
  }
)
CallWayStack.navigationOptions = ({ navigation }: NavigationScreenProps) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }
  tabBarVisible =
    navigation.state.index > 0
      ? false
      : navigation.state.routes[navigation.state.index].params
      ? navigation.state.routes[navigation.state.index].params!.tabBarVisible
      : true
  return { tabBarVisible }
}

export default CallWayStack
