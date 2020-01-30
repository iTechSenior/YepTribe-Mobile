import React, { useContext } from 'react'
import { Alert, Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'

import CardView from '../../../../components/DashboardCard'
import NavHeader from '../../../../components/navHeader'

import CardViewBackground5 from '../../../../assets/Icons/Path225/Path225.png'
import CardViewBackground6 from '../../../../assets/Icons/Path226/Path226.png'
import CardViewBackground1 from '../../../../assets/Icons/Path227/Path227.png'
import CardViewBackground2 from '../../../../assets/Icons/Path228/Path228.png'
import CardViewBackground3 from '../../../../assets/Icons/Path229/Path229.png'
import CardViewBackground4 from '../../../../assets/Icons/Path238/Path238.png'
import OsEmailIcon from '../../../../assets/Icons/SendMessageBy/iconmonstr-email-1-1.png'
import DefaultEmailIcon from '../../../../assets/Icons/SendMessageBy/iconmonstr-email-1.png'
import MessengerIcon from '../../../../assets/Icons/SendMessageBy/Messenger.png'
import TextIcon from '../../../../assets/Icons/SendMessageBy/sms.png'
import WhatsappIcon from '../../../../assets/Icons/SendMessageBy/WhatsApp.png'

import { ProspectDataContext } from '../../../../contexts/ProspectDataContext'
import { Theme } from '../../../../theme'

const CardData = [
  {
    backgroundImage: CardViewBackground1,
    cardName: 'Email',
    type: 'Default',
    icon: DefaultEmailIcon,
  },
  {
    backgroundImage: CardViewBackground2,
    cardName: 'email',
    type: 'OS',
    icon: OsEmailIcon,
  },
  {
    backgroundImage: CardViewBackground3,
    cardName: 'Text',
    icon: TextIcon,
  },
  {
    backgroundImage: CardViewBackground4,
    cardName: 'WhatsApp',
    icon: WhatsappIcon,
  },
  {
    backgroundImage: CardViewBackground5,
    cardName: 'Messenger',
    icon: MessengerIcon,
  },
]

const SendMsgByScreen = () => {
  const navigation = useNavigation()
  const prospectDataContext = useContext(ProspectDataContext)

  const handleCardClick = (cardName: string) => {
    prospectDataContext.setProspectData({ shareType: cardName })
    if (cardName === 'WhatsApp') {
      Linking.canOpenURL('whatsapp://send?text=text')
        .then((supported: boolean) => {
          if (!supported) {
            Alert.alert('Warning', 'Sorry, Whatsapp is not installed.')
          } else {
            navigation.navigate('Message')
          }
        })
        .catch(err => console.error('An error occurred', err))
    } else if (cardName === 'Messenger') {
      Linking.canOpenURL('fb-messenger://')
        .then(supported => {
          if (!supported) {
            Alert.alert('Warning', 'Sorry, Messenger is not installed.')
          } else {
            navigation.navigate('Message')
          }
        })
        .catch(err => console.log(err))
    } else {
      navigation.navigate('Message')
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavHeader type="normal" />
      <View style={styles.mainContainer}>
        <Text style={styles.headerTxt}>Send Message by</Text>
        <View style={styles.cardViewWrapper}>
          {CardData.map((item, index) => (
            // <View key={index} style={{ marginBottom: 16 * Theme.Ratio.H }}>
            <CardView
              key={index}
              cardViewIcon={item.icon}
              cardName={item.cardName}
              emailType={item.type}
              onCardClick={(cardName: string) => handleCardClick(cardName)}
            />
            // </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SendMsgByScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
  },
  cardViewWrapper: {
    flex: 1,
    width: '100%',
    paddingTop: 36 * Theme.Ratio.H,
    paddingBottom: 20 * Theme.Ratio.H,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
})
