import React from 'react'
import { createStackNavigator, NavigationScreenProps } from 'react-navigation'

import AlertsScreen from '../../screens/mainStack/homeStack/AlertScreen'
import CertificateScreen from '../../screens/mainStack/homeStack/CertificateScreen'
import EventScreen from '../../screens/mainStack/homeStack/EventScreen'
import CreateEventScreen from '../../screens/mainStack/homeStack/EventScreen/CreateEventScreen'
import EventDetailScreen from '../../screens/mainStack/homeStack/EventScreen/EventDetail'
import HomeScreen from '../../screens/mainStack/homeStack/HomeScreen'
import MessageScreen from '../../screens/mainStack/homeStack/MessageScreen'
import MessageScreenForShare from '../../screens/mainStack/homeStack/ShareScreen/MessageScreenForShare'
import ProspectNavScreenForShare from '../../screens/mainStack/homeStack/ShareScreen/ProspectScreenForShare/ProspectScreenNavScreenForShare'
import ProspectScreen from '../../screens/mainStack/homeStack/ProspectScreen'
import PersonPinScreen from '../../screens/mainStack/homeStack/ProspectScreen/PersonPinScreen'
import ProspectUserProfileEditScreen from '../../screens/mainStack/homeStack/ProspectScreen/ProspectUserProfileEditScreen'
import SendMsgByScreen from '../../screens/mainStack/homeStack/SendMsgByScreen'
import SendMsgNavScreen from '../../screens/mainStack/homeStack/SendMsgNavScreen'
import ProspectUserProfileScreen from '../../screens/mainStack/homeStack/SendMsgNavScreen/ProspectUserProfileScreen'
import ProspectUserProfileScreenForShare from '../../screens/mainStack/homeStack/ShareScreen/ProspectScreenForShare/ProspectUserProfileForShare'
import SetReminderScreen from '../../screens/mainStack/homeStack/SendMsgNavScreen/SetReminderScreen'
import SetReminderScreenForShare from '../../screens/mainStack/homeStack/ShareScreen/SetReminderScreenForShare'
import ShareScreen from '../../screens/mainStack/homeStack/ShareScreen'
import ContactReminderScreen from '../../screens/mainStack/homeStack/ContactReminderScreen'

const HomeStackNav = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Share: { screen: ShareScreen },
    Prospects: { screen: ProspectScreen },
    Certificates: { screen: CertificateScreen },
    Alerts: { screen: AlertsScreen },
    Message: { screen: MessageScreen },
    MessageForShare: { screen: MessageScreenForShare },
    SendMsgNav: { screen: SendMsgNavScreen },
    ProspectNavForShare: { screen: ProspectNavScreenForShare },
    ProspectUserProfile: { screen: ProspectUserProfileScreen },
    ProspectUserProfileForShare: { screen: ProspectUserProfileScreenForShare },
    SendMsgBy: { screen: SendMsgByScreen },
    PersonPin: { screen: PersonPinScreen },
    ProspectUserProfileEdit: { screen: ProspectUserProfileEditScreen },
    Events: { screen: EventScreen },
    CreateEvent: { screen: CreateEventScreen },
    EventDetail: { screen: EventDetailScreen },
    SetReminder: { screen: SetReminderScreen },
    SetReminderForShare: { screen: SetReminderScreenForShare },
    ContactReminder: { screen: ContactReminderScreen, path: 'share/:firstName/:lastName/:email/:phoneNumber' },
    // Events: { screen: EventScreen },
    // Office: { screen: OfficeScreen },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

HomeStackNav.navigationOptions = ({ navigation }: NavigationScreenProps) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }
  // const tabBarVisible = navigation.state.routes[navigation.state.index].params
  //   ? navigation.state.routes[navigation.state.index].params!.tabBarVisible
  //   : true
  return { tabBarVisible }
}

export default HomeStackNav
