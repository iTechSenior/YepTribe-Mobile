import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { createStackNavigator, NavigationScreenProps } from 'react-navigation'
import VideoDetailScreen from '../../screens/mainStack/trainingStack/VideoDetailScreen'
import TrainingScreen from '../../screens/mainStack/trainingStack/TrainingScreen'
import VideoPlayScreen from '../../screens/mainStack/trainingStack/VideoPlayScreen'

const TrainStackNav = createStackNavigator(
  {
    TrainList: { screen: TrainingScreen },
    VideoDetailScreen: { screen: VideoDetailScreen },
    VideoPlayScreen: { screen: VideoPlayScreen },
  },
  {
    initialRouteName: 'TrainList',
    headerMode: 'none',
  }
)
TrainStackNav.navigationOptions = ({ navigation }: NavigationScreenProps) => {
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

export default TrainStackNav
