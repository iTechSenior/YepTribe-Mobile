import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import CustomTabBar from '../../../components/SendMsgScreenCustomTabBar'

import ExistingProspectScreen from '../../../screens/mainStack/homeStack/SendMsgNavScreen/ExistingProspectScreen'
import NewProspectScreen from '../../../screens/mainStack/homeStack/SendMsgNavScreen/NewProspectScreen'

const AppointmentNav = createMaterialTopTabNavigator(
  {
    'Existing Prospects': { screen: ExistingProspectScreen },
    'New Prospect': { screen: NewProspectScreen },
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
