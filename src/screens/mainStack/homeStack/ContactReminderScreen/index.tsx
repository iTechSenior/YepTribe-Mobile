import React, { useContext } from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { useNavigationParam } from 'react-navigation-hooks'
import { UserContext } from '../../../../contexts/UserContext'
import NavHeader from '../../../../components/navHeader'
import { Theme } from '../../../../theme'

const ContactReminder = () => {
  const firstName = useNavigationParam('firstName')
  const lastName = useNavigationParam('lastName')
  const email = useNavigationParam('email')
  const phoneNumber = useNavigationParam('phoneNumber')

  const userContext = useContext(UserContext)
  const loggedInUserFirstName = userContext.user!.firstName

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavHeader type="normal" />
      <View style={styles.mainContainer}>
        <Text style={styles.headerText}>Follow Up Reminder</Text>
        <Text style={styles.bodyTxt}>Hello {loggedInUserFirstName},</Text>
        <Text style={styles.bodyTxt}>Follow up with:</Text>
        <Text style={styles.contextTxt}>{`${firstName} ${lastName}`}</Text>
        {/* <Text style={styles.contextTxt}>Telephone: {phoneNumber}</Text> */}
        <Text style={styles.contextTxt}>E-mail: {email}</Text>
      </View>
    </SafeAreaView>
  )
}

export default ContactReminder

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsBold,
    marginBottom: 30 * Theme.Ratio.H,
  },
  bodyTxt: {
    fontSize: 16 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsMedium,
    marginBottom: 20 * Theme.Ratio.H,
  },
  contextTxt: {
    fontSize: 16 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsMedium,
  },
})
