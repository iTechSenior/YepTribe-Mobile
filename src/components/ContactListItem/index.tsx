import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Theme } from '../../theme'

import PhoneIcon from '../../assets/Icons/BottomTabIcons/Deactive/ic_call_24px/ic_call_24px.png'
import MsgIcon from '../../assets/Icons/BottomTabIcons/Deactive/iconmonstr-email-1/iconmonstr-email-1.png'

const ContactListItem = props => {
  const renderListItemImage = () => {
    let image
    switch (props.contactType) {
      case 'Phone':
        image = <Image source={PhoneIcon} style={styles.listItemPhoneImg} />
        break
      case 'Email':
        image = <Image source={MsgIcon} style={styles.listItemMsgImg} />
        break
    }
    return image
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconWrapper}>{renderListItemImage()}</View>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#D2D2D2', '#FAFAFA', '#FFFFFF']} style={styles.linearGradient}>
        <View style={styles.infoWrapper}>
          <Text style={styles.contactTypeTxt}>{props.contactType}</Text>
          <Text style={styles.contactInfoTxt}>{props.contactInfo}</Text>
        </View>
      </LinearGradient>
    </View>
  )
}

export default ContactListItem

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 78 * Theme.Ratio.H,
  },
  iconWrapper: {
    width: 46 * Theme.Ratio.H,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 9,
  },
  listItemPhoneImg: {
    width: 22 * Theme.Ratio.H,
    height: 22 * Theme.Ratio.H,
  },
  listItemMsgImg: {
    width: 22 * Theme.Ratio.H,
    height: 16.5 * Theme.Ratio.H,
  },
  linearGradient: {
    flex: 1,
    // marginLeft: 20 * Theme.Ratio.H,
    paddingBottom: 1,
    height: 78 * Theme.Ratio.H,
  },
  infoWrapper: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  contactTypeTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 13 * Theme.Ratio.H,
    color: '#8A8A8F',
  },
  contactInfoTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
    color: '#212529',
  },
})
