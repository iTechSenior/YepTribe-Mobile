import React, { useContext } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'
import { Gravatar } from 'react-native-gravatar'

import GradientBorderComponent from '../../../../../components/GradientBorderComponent'
import NavHeader from '../../../../../components/navHeader'

import PhoneIcon from '../../../../../assets/Icons/BottomTabIcons/Deactive/ic_call_24px/ic_call_24px.png'
import EmailIcon from '../../../../../assets/Icons/BottomTabIcons/Deactive/iconmonstr-email-1/iconmonstr-email-1.png'
import Logo from '../../../../../assets/Icons/Home/Rectangle304.png'
import UserIcon from '../../../../../assets/Icons/Prospects/ic_person_pin_24px.png'

import { ProspectDataContext } from '../../../../../contexts/ProspectDataContext'
import { Theme } from '../../../../../theme'

const ProspectUserProfileScreen = () => {
  const navigation = useNavigation()

  const handleCheckBtnClick = () => {
    navigation.navigate('SetReminderForShare')
  }

  const prospectDataContext = useContext(ProspectDataContext)

  const prospectInfo = useNavigationParam('prospectInfo')
  // console.log('prospectInfo', prospectInfo)
  prospectDataContext.setProspectData({
    firstName: prospectInfo.firstName,
    lastName: prospectInfo.lastName,
    deliveryEndpoint: prospectInfo.email,
    // phoneNumber: prospectInfo.phoneNumber,
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavHeader type="withCheck" handleCheck={() => handleCheckBtnClick()} />
      <View style={styles.mainContainer}>
        <View style={styles.logoWrapper}>
          {/* <Image source={Logo} style={{ width: 42.8 * Theme.Ratio.H, height: 42.8 * Theme.Ratio.H }} /> */}
          <Gravatar options={{ email: prospectInfo.email, parameters: { size: '100', d: 'mm' }, secure: true }} style={styles.avatarImg} />
        </View>
        <Text style={styles.userNameTxt}>{prospectInfo.firstName + ' ' + prospectInfo.lastName}</Text>
        {/* <View style={styles.infoItemWrapper}>
          <View style={styles.iconWrapper}>
            <Image source={UserIcon} style={{ width: 18 * Theme.Ratio.H, height: 21 * Theme.Ratio.H }} />
          </View>
          <GradientBorderComponent>
            <View style={styles.infoWrapper}>
              <Text style={styles.infoLabelTxt}>Full Name</Text>
              <Text style={styles.infoTxt}>{`${prospectInfo.firstName} ${prospectInfo.lastName}`}</Text>
            </View>
          </GradientBorderComponent>
        </View> */}
        <View style={styles.infoItemWrapper}>
          <View style={styles.iconWrapper}>
            <Image source={EmailIcon} style={{ width: 22 * Theme.Ratio.H, height: 16.5 * Theme.Ratio.H }} />
          </View>
          <GradientBorderComponent>
            <View style={styles.infoWrapper}>
              <Text style={styles.infoLabelTxt}>Email</Text>
              <Text style={styles.infoTxt}>{prospectInfo.email}</Text>
            </View>
          </GradientBorderComponent>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProspectUserProfileScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  logoWrapper: {
    justifyContent: 'center',
    marginBottom: 7 * Theme.Ratio.H,
  },
  avatarImg: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: '#BCECFE',
    borderRadius: 50,
  },
  userNameTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
    marginBottom: 20 * Theme.Ratio.H,
  },
  infoItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 28 * Theme.Ratio.H,
    height: 78 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18 * Theme.Ratio.H,
  },
  infoWrapper: {
    // flex: 1,
    paddingVertical: 20 * Theme.Ratio.H,
  },
  infoLabelTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 13 * Theme.Ratio.H,
    color: '#8A8A8F',
  },
  infoTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
    color: '#212529',
  },
})
