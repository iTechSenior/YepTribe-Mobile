import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ContactListItem from '../../../../components/ContactListItem'
import { Theme } from '../../../../theme'

import { ContactInfo } from '../../../../dummydata'

const ContactScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <Text style={styles.headerTxt}>Contact</Text>
        <Text style={styles.descriptionTxt}>For corporate matters such as enrollment, orders, and/or backoffice, call or mail</Text>
        <View style={styles.contactInfoWrapper}>
          <ContactListItem contactType={ContactInfo[0].contactType} contactInfo={ContactInfo[0].contactInfo} />
          <ContactListItem contactType={ContactInfo[1].contactType} contactInfo={ContactInfo[1].contactInfo} />
        </View>
        <Text style={styles.forQuestionContactTxt}>For questions using this app, email</Text>
        <View style={styles.contactInfoWrapper}>
          <ContactListItem contactType={ContactInfo[2].contactType} contactInfo={ContactInfo[2].contactInfo} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 10,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
    marginHorizontal: 20 * Theme.Ratio.H,
  },
  descriptionTxt: {
    marginTop: 10 * Theme.Ratio.H,
    marginBottom: 14 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
    opacity: 0.6,
    marginHorizontal: 21 * Theme.Ratio.H,
  },
  contactInfoWrapper: {
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  forQuestionContactTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 16 * Theme.Ratio.H,
    marginTop: 34 * Theme.Ratio.H,
    marginBottom: 14 * Theme.Ratio.H,
    marginHorizontal: 21 * Theme.Ratio.H,
    color: '#231F20',
    opacity: 0.6,
  },
})
