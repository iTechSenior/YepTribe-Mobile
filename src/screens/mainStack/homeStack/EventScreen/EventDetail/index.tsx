import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import { useNavigationParam } from 'react-navigation-hooks'
import { Gravatar } from 'react-native-gravatar'
// import moment from 'moment-timezone/builds/moment-timezone-with-data'
import moment from 'moment'

import GradienBorderComponent from '../../../../../components/GradientBorderComponent'
import NavHeader from '../../../../../components/navHeader'

import CategoryIcon from '../../../../../assets/Icons/Event/ic_collections_bookmark_24px.png'
import ChatIcon from '../../../../../assets/Icons/Prospects/ic_chat_24px_d.png'
import SubstractionIcon from '../../../../../assets/Icons/Prospects/Subtraction1.png'

import { Theme } from '../../../../../theme'

const EventDetailScreen = () => {
  const eventDetail = useNavigationParam('EventDetailData')

  console.log('eventime', eventDetail.when)

  const displayTime = moment(eventDetail.when)
    .local()
    .format('MMMM Do YYYY, h:mm:ss A')

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <NavHeader type="withEdit" handleEdit={() => handleEditBtnClick()} /> */}
      <NavHeader type="normal" />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.logoWrapper}>
            <Gravatar options={{ email: eventDetail.who.email, parameters: { size: '100', d: 'mm' }, secure: true }} style={styles.avatarImg} />
          </View>
          <Text style={styles.eventNameTxt}>{eventDetail.where}</Text>
          <View style={styles.contentWrapper}>
            <View style={styles.infoItemWrapper}>
              <View style={styles.iconWrapper}>
                <Image source={SubstractionIcon} style={styles.substractionImg} />
              </View>
              <GradienBorderComponent>
                <View style={styles.infoWrapper}>
                  <Text style={styles.infoLabelTxt}>Full Name</Text>
                  <Text style={styles.infoTxt}>{`${eventDetail.who.firstName} ${eventDetail.who.lastName}`}</Text>
                </View>
              </GradienBorderComponent>
            </View>
            <View style={styles.infoItemWrapper}>
              <View style={styles.iconWrapper}>
                <Image source={SubstractionIcon} style={styles.substractionImg} />
              </View>
              <GradienBorderComponent>
                <View style={styles.infoWrapper}>
                  <Text style={styles.infoLabelTxt}>Date & Time</Text>
                  <Text style={styles.infoTxt}>{displayTime}</Text>
                </View>
              </GradienBorderComponent>
            </View>
            {eventDetail.type === 'Webinar' && (
              <View style={styles.infoItemWrapper}>
                <View style={styles.iconWrapper}>
                  <Image source={CategoryIcon} style={styles.categoryImg} />
                </View>
                <GradienBorderComponent>
                  <View style={styles.infoWrapper}>
                    <Text style={styles.infoLabelTxt}>Webniar URL</Text>
                    <Text style={styles.infoTxt}>{eventDetail.webinarUrl}</Text>
                  </View>
                </GradienBorderComponent>
              </View>
            )}
            <View style={styles.desInfoItemWrapper}>
              <View style={styles.desIconWrapper}>
                <Image source={ChatIcon} style={styles.chatImg} />
              </View>
              <GradienBorderComponent>
                <View style={styles.descInfoWrapper}>
                  <Text style={styles.infoLabelTxt}>Description</Text>
                  <Text style={styles.infoTxt}>{eventDetail.description}</Text>
                </View>
              </GradienBorderComponent>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EventDetailScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  logoWrapper: {
    marginBottom: 9 * Theme.Ratio.H,
  },
  avatarImg: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: '#BCECFE',
    borderRadius: 50,
  },
  eventNameTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
  },
  contentWrapper: {
    paddingTop: 20 * Theme.Ratio.H,
  },
  infoItemWrapper: {
    flexDirection: 'row',
    // alignItems: 'center',
    // height: 78 * Theme.Ratio.H,
  },
  desInfoItemWrapper: {
    flexDirection: 'row',
  },

  iconWrapper: {
    width: 28 * Theme.Ratio.H,
    height: 78 * Theme.Ratio.H,
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
  desIconWrapper: {
    width: 28 * Theme.Ratio.H,
    height: 78 * Theme.Ratio.H,
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
    // flex: 1,
    // justifyContent: 'center',
    paddingVertical: 20 * Theme.Ratio.H,
  },
  descInfoWrapper: {
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
  chatImg: {
    width: 24 * Theme.Ratio.H,
    height: 24 * Theme.Ratio.H,
  },
  substractionImg: {
    width: 24 * Theme.Ratio.H,
    height: 24 * Theme.Ratio.H,
  },
  categoryImg: {
    width: 23 * Theme.Ratio.H,
    height: 23 * Theme.Ratio.H,
  },
})
