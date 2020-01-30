import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import CustomTabBar from '../../../components/SendMsgScreenCustomTabBar'

import ExistingProspectForShareScreen from '../../../screens/mainStack/homeStack/ShareScreen/ProspectScreenForShare/ExistingProspectScreenForShare'
import NewProspectForShareScreen from '../../../screens/mainStack/homeStack/ShareScreen/ProspectScreenForShare/NewProspectScreenForShare'

const AppointmentNav = createMaterialTopTabNavigator(
  {
    'Existing Prospects': { screen: ExistingProspectForShareScreen },
    'New Prospect': { screen: NewProspectForShareScreen },
  },
  {
    tabBarComponent: () => <CustomTabBar />,
    tabBarOptions: {
      showIcon: false,
      showLabel: true,
      style: {
        backgroundColor: 'white',
      },
    },
  }
)

export default AppointmentNav
