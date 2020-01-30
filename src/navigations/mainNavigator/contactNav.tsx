import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import ContactScreen from '../../screens/mainStack/contactStack/ContactScreen'

const ContactStackNav = createStackNavigator(
  {
    Contact: { screen: ContactScreen },
  },
  {
    initialRouteName: 'Contact',
    headerMode: 'none',
  }
)

export default ContactStackNav
