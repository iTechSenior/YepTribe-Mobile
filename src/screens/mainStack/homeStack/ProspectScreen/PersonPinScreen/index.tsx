import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from 'react-navigation-hooks'

import GradienBorderComponent from '../../../../../components/GradientBorderComponent'
import NavHeader from '../../../../../components/navHeader'

import BluePhoneIcon from '../../../../../assets/Icons/BottomTabIcons/Active/ic_call_24px/ic_call_24px.png'
import PhoneIcon from '../../../../../assets/Icons/BottomTabIcons/Deactive/ic_call_24px/ic_call_24px.png'
import EmailIcon from '../../../../../assets/Icons/BottomTabIcons/Deactive/iconmonstr-email-1/iconmonstr-email-1.png'
import Logo from '../../../../../assets/Icons/Home/Rectangle304.png'
import ChatIcon from '../../../../../assets/Icons/Prospects/ic_chat_24px_d.png'
import CommentIcon from '../../../../../assets/Icons/Prospects/ic_comment_24px_a.png'
import EditIcon from '../../../../../assets/Icons/Prospects/ic_edit_24px.png'
import ShareIcon from '../../../../../assets/Icons/Prospects/ic_share_24px_a.png'
import SubstractionIcon from '../../../../../assets/Icons/Prospects/Subtraction1.png'

import { ProspectsUserListData } from '../../../../../dummydata'
import { Theme } from '../../../../../theme'

const PersonPinScreen = () => {
  const navigation = useNavigation()

  const prospectUserId = navigation.getParam('prospectUserId')
  const prospectUserData = ProspectsUserListData.filter(item => item.id === prospectUserId)

  const renderStatusBadge = () => {
    let statusBadge = null

    switch (prospectUserData[0].status) {
      case 'Warm':
        statusBadge = (
          <View style={[styles.linearGradientWrapper, { shadowColor: '#F6C130' }]}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#F6C130', '#FF9100']} style={styles.linearGradient}>
              <Text style={styles.statusTxt}>{prospectUserData[0].status}</Text>
            </LinearGradient>
          </View>
        )
        break
      case 'Hot':
        statusBadge = (
          <View style={[styles.linearGradientWrapper, { shadowColor: '#FF4A4A' }]}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#E12525', '#FF4A4A']} style={styles.linearGradient}>
              <Text style={styles.statusTxt}>{prospectUserData[0].status}</Text>
            </LinearGradient>
          </View>
        )
        break
      case 'Follow-Up Later':
        statusBadge = (
          <View style={[styles.linearGradientWrapper, { shadowColor: '#25AAE1' }]}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#25AAE1', '#00B4FF']} style={styles.linearGradient}>
              <Text style={styles.statusTxt}>{prospectUserData[0].status}</Text>
            </LinearGradient>
          </View>
        )
        break
      case 'Team Member':
        statusBadge = (
          <View style={[styles.linearGradientWrapper, { shadowColor: '#F6C130' }]}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#25E144', '#35D80E']} style={styles.linearGradient}>
              <Text style={styles.statusTxt}>{prospectUserData[0].status}</Text>
            </LinearGradient>
          </View>
        )
        break
      case 'Customer':
        statusBadge = (
          <View style={[styles.linearGradientWrapper, { shadowColor: '#B09160' }]}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#DFC498', '#B09160']} style={styles.linearGradient}>
              <Text style={styles.statusTxt}>{prospectUserData[0].status}</Text>
            </LinearGradient>
          </View>
        )
        break
      case 'New':
        statusBadge = (
          <View style={[styles.linearGradientWrapper, { shadowColor: '#25AAE1' }]}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#DB25E1', '#5400FF']} style={styles.linearGradient}>
              <Text style={styles.statusTxt}>{prospectUserData[0].status}</Text>
            </LinearGradient>
          </View>
        )
        break
    }
    return statusBadge
  }

  const handleEditBtnClick = () => {
    navigation.navigate('ProspectUserProfileEdit')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavHeader type="normal" />
      <View style={styles.headerBtnsWrapper}>
        <TouchableOpacity style={styles.headerBtn}>
          <Image source={BluePhoneIcon} style={{ width: 23.5 * Theme.Ratio.H, height: 23.5 * Theme.Ratio.H, marginRight: 30 * Theme.Ratio.H }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBtn}>
          <Image source={CommentIcon} style={{ width: 24 * Theme.Ratio.H, height: 24 * Theme.Ratio.H, marginRight: 30 * Theme.Ratio.H }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBtn}>
          <Image source={ShareIcon} style={{ width: 21.2 * Theme.Ratio.H, height: 24 * Theme.Ratio.H, marginRight: 20 * Theme.Ratio.H }} />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.logoWrapper}>
          <Image source={Logo} style={{ width: 42.8 * Theme.Ratio.H, height: 42.8 * Theme.Ratio.H }} />
        </View>
        <View style={styles.nameWrapper}>
          <Text style={styles.userNameTxt}>{prospectUserData[0].firstName + ' ' + prospectUserData[0].lastName}</Text>
          <TouchableOpacity onPress={() => handleEditBtnClick()} style={styles.editBtn}>
            <Image source={EditIcon} style={{ width: 18 * Theme.Ratio.H, height: 18 * Theme.Ratio.H }} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          {renderStatusBadge()}
          <View style={{ flex: 1 }} />
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.infoItemWrapper}>
            <View style={styles.iconWrapper}>
              <Image source={SubstractionIcon} style={styles.substractionImg} />
            </View>
            <GradienBorderComponent>
              <View style={styles.infoWrapper}>
                <Text style={styles.infoLabelTxt}>Follow Up</Text>
                <Text style={styles.infoTxt}>{prospectUserData[0].followupTime}</Text>
              </View>
            </GradienBorderComponent>
          </View>
          <View style={styles.infoItemWrapper}>
            <View style={styles.iconWrapper}>
              <Image source={PhoneIcon} style={styles.phoneImg} />
            </View>
            <GradienBorderComponent>
              <View style={styles.infoWrapper}>
                <Text style={styles.infoLabelTxt}>Phone</Text>
                <Text style={styles.infoTxt}>{prospectUserData[0].phone}</Text>
              </View>
            </GradienBorderComponent>
          </View>
          <View style={styles.infoItemWrapper}>
            <View style={styles.iconWrapper}>
              <Image source={EmailIcon} style={styles.emailImg} />
            </View>
            <GradienBorderComponent>
              <View style={styles.infoWrapper}>
                <Text style={styles.infoLabelTxt}>Email</Text>
                <Text style={styles.infoTxt}>{prospectUserData[0].email}</Text>
              </View>
            </GradienBorderComponent>
          </View>
          <View style={styles.infoItemWrapper}>
            <View style={styles.iconWrapper}>
              <Image source={ChatIcon} style={styles.chatImg} />
            </View>
            <GradienBorderComponent>
              <View style={styles.infoWrapper}>
                <Text style={styles.infoLabelTxt}>Note</Text>
                <Text style={styles.infoTxt}>{prospectUserData[0].note}</Text>
              </View>
            </GradienBorderComponent>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PersonPinScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  headerBtnsWrapper: {
    position: 'absolute',
    top: 65 * Theme.Ratio.H,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoWrapper: {
    width: 48 * Theme.Ratio.H,
    height: 48 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7 * Theme.Ratio.H,
  },
  userNameTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
    marginRight: 9 * Theme.Ratio.H,
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4 * Theme.Ratio.H,
  },
  editBtn: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 9,
  },
  linearGradientWrapper: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  statusTxt: {
    marginHorizontal: 12 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 11 * Theme.Ratio.H,
    color: '#FFFFFF',
  },
  linearGradient: {
    height: 20 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  contentWrapper: {
    paddingTop: 20 * Theme.Ratio.H,
  },
  infoItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 78 * Theme.Ratio.H,
  },
  iconWrapper: {
    width: 28 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18 * Theme.Ratio.H,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,

    elevation: 6,
  },
  infoWrapper: {
    flex: 1,
    justifyContent: 'center',
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
  substractionImg: {
    width: 24 * Theme.Ratio.H,
    height: 24 * Theme.Ratio.H,
  },
  phoneImg: {
    width: 24 * Theme.Ratio.H,
    height: 24 * Theme.Ratio.H,
  },
  emailImg: {
    width: 22 * Theme.Ratio.H,
    height: 16.5 * Theme.Ratio.H,
  },
  chatImg: {
    width: 24 * Theme.Ratio.H,
    height: 24 * Theme.Ratio.H,
  },
  headerBtn: {
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 6,
  },
})
