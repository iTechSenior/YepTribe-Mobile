import React from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useNavigation, useNavigationState } from 'react-navigation-hooks'
import ProspectNavForShare from '../../../../../navigations/mainNavigator/ProspectNavForShare'

import NavHeader from '../../../../../components/navHeader'

import { Theme } from '../../../../../theme'

interface PState {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
}

const SendMsgNavScreen = () => {
  const navigation = useNavigation()
  const navigationState = useNavigationState()

  const renderHeader = () => {
    let header = null
    switch (navigationState.index) {
      case 0:
        header = <NavHeader type="normal" />
        break
      case 1:
        header = <NavHeader type="withCheck" handleCheck={() => handleCheckBtnClick()} />
        break
    }
    return header
  }
  const [state, setState] = React.useState<PState>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  })
  const handleCheckBtnClick = () => {
    if (state.firstName === '') {
      Alert.alert('Warning', 'Please input your First Name.')
    } else if (state.lastName === '') {
      Alert.alert('Warning', 'Please input your Last Name.')
    } else if (state.phoneNumber === '') {
      Alert.alert('Warning', 'Please input your Phone Number.')
    } else if (state.email === '') {
      Alert.alert('Warning', 'Please input your Email.')
    } else {
      navigation.navigate('ProspectUserProfileForShare', { prospectInfoForShare: state })
    }
  }

  const setField = (info: Partial<PState>) => {
    setState({ ...state, ...info })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {renderHeader()}
      <View style={styles.mainContainer}>
        <Text style={styles.headerTxt}>Send Message</Text>
        <ProspectNavForShare navigation={navigation} screenProps={{ setField: (info: Partial<PState>) => setField(info) }} />
      </View>
    </SafeAreaView>
  )
}

SendMsgNavScreen.router = ProspectNavForShare.router

export default SendMsgNavScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
    marginLeft: 20 * Theme.Ratio.H,
    marginBottom: 20 * Theme.Ratio.H,
  },
})
