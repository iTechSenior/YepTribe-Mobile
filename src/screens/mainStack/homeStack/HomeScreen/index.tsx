import React, { useContext, useState } from 'react'
import { Image, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { useGetBannersForMobileQuery } from '../../../../graphql'

import CardView from '../../../../components/DashboardCard'
import DashBoardCarousel from '../../../../components/DashboardSwipe'

import EventIcon from '../../../../assets/Icons/Home/ic_event_note_24px/ic_event_note_24px.png'
// import NotificationIcon from '../../../../assets/Icons/Home/ic_notifications_24px/ic_notifications_24px.png'

// import CardViewBackground5 from '../../../../assets/Icons/Path225/Path225.png'
import CardViewBackground6 from '../../../../assets/Icons/Path226/Path226.png'
import CardViewBackground1 from '../../../../assets/Icons/Path227/Path227.png'
import CardViewBackground2 from '../../../../assets/Icons/Path228/Path228.png'
import CardViewBackground3 from '../../../../assets/Icons/Path229/Path229.png'
import CardViewBackground4 from '../../../../assets/Icons/Path238/Path238.png'

import OfficeIcon from '../../../../assets/Icons/Home/ic_business_center_24px/ic_business_center_24px.png'
import CertificateIcon from '../../../../assets/Icons/Home/ic_featured_play_list_24px/ic_featured_play_list_24px.png'
import ProspectIcon from '../../../../assets/Icons/Home/ic_group_24px/ic_group_24px.png'
import AddMemberIcon from '../../../../assets/Icons/Home/ic_person_add_24px/ic_person_add_24px.png'
import ShareIcon from '../../../../assets/Icons/Home/ic_share_24px/ic_share_24px.png'
// import AddAffiliateIcon from '../../../../assets/Icons/Home/Union4/Union4.png'

import { UserContext } from '../../../../contexts/UserContext'
import { Theme } from '../../../../theme'
import { SCREENS } from '../../../../utility/Common'

// const images = [
//   'https://i.imgur.com/UYiroysl.jpg',
//   'https://i.imgur.com/UPrs1EWl.jpg',
//   'https://i.imgur.com/MABUbpDl.jpg',
// ]

const CardData = [
  {
    backgroundImage: CardViewBackground1,
    cardName: 'Prospects',
    icon: ProspectIcon,
  },
  {
    backgroundImage: CardViewBackground2,
    cardName: 'Certificates',
    icon: CertificateIcon,
  },
  {
    backgroundImage: CardViewBackground3,
    cardName: 'Office',
    icon: OfficeIcon,
  },
  {
    backgroundImage: CardViewBackground4,
    cardName: 'Share',
    icon: ShareIcon,
  },
  // {
  //   backgroundImage: CardViewBackground5,
  //   cardName: 'Add Affiliate',
  //   icon: AddAffiliateIcon,
  // },
  {
    backgroundImage: CardViewBackground6,
    cardName: 'Add Member',
    icon: AddMemberIcon,
  },
]

const HomeScreen = () => {
  // const [state] = useState({
  //   entries: [
  //     {
  //       title: 'image1',
  //       uri: 'https://i.imgur.com/UYiroysl.jpg',
  //     },
  //     {
  //       title: 'image2',
  //       uri: 'https://i.imgur.com/UPrs1EWl.jpg',
  //     },
  //     {
  //       title: 'image3',
  //       uri: 'https://i.imgur.com/MABUbpDl.jpg',
  //     },
  //   ],
  // })

  const navigation = useNavigation()

  const userContext = useContext(UserContext)

  const { loading, data } = useGetBannersForMobileQuery({ fetchPolicy: 'network-only' })

  const onCardClick = (cardName: string) => {
    switch (cardName) {
      case 'Prospects':
        navigation.navigate(SCREENS.Prospects)
        break
      case 'Certificates':
        navigation.navigate(SCREENS.Certificates)
        break
      case 'Share':
        navigation.navigate(SCREENS.Share)
        break
      case 'Office':
        Linking.canOpenURL('https://login.yeptribe.com').then(supported => {
          if (supported) {
            Linking.openURL('https://login.yeptribe.com')
          } else {
            // console.log("Don't know how to open URI: " + 'https://login.yeptribe.com')
          }
        })
        break
      case 'Add Affiliate':
        Linking.canOpenURL(`https://${userContext.user!.username}.yeptribefreedom.com/`).then(supported => {
          if (supported) {
            Linking.openURL(`https://${userContext.user!.username}.yeptribefreedom.com/`)
          } else {
            // console.log("Don't know how to open URI: " + `https://${userContext.user!.username}.yeptribefreedom.com/`)
          }
        })
        break
      case 'Add Member':
        Linking.canOpenURL(`https://${userContext.user!.username}.yeptribefreedom.com/`).then(supported => {
          if (supported) {
            Linking.openURL(`https://${userContext.user!.username}.yeptribefreedom.com/`)
          } else {
            // console.log("Don't know how to open URI: " + `https://${userContext.user!.username}.yeptribefreedom.com/`)
          }
        })
        break
    }
  }

  const handleNotificationClick = () => {
    navigation.navigate(SCREENS.Alerts)
  }

  const handleEventBtnClick = () => {
    navigation.navigate(SCREENS.Events)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <View style={{ height: 241 * Theme.Ratio.H, backgroundColor: 'white' }}>
          <View style={styles.header}>
            <Text style={styles.headerTxt}>Dashboard</Text>
            <View style={styles.headerRightSection}>
              {/* <TouchableOpacity style={styles.notificationBtn} onPress={() => handleNotificationClick()}>
                <Image source={NotificationIcon} style={styles.notificationImg} />
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.eventBtn} onPress={() => handleEventBtnClick()}>
                <Image source={EventIcon} style={styles.eventImg} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.carouselWrapper}>{!loading && data && <DashBoardCarousel data={data.getBannersForMobile} />}</View>
        <View style={styles.cardViewWrapper}>
          {CardData.map((item, index) => (
            <CardView
              key={index}
              // cardViewBackgroundImg={item.backgroundImage}
              cardViewIcon={item.icon}
              cardName={item.cardName}
              onCardClick={(cardName: string) => onCardClick(cardName)}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  header: {
    width: '100%',
    height: 46 * Theme.Ratio.H,
    flexDirection: 'row',
    paddingHorizontal: 20 * Theme.Ratio.H,
    paddingTop: 8 * Theme.Ratio.H,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  headerTxt: {
    height: 33 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
  },
  headerRightSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  notificationBtn: {
    marginRight: 24 * Theme.Ratio.H,
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.65,
    elevation: 9,
  },
  eventBtn: {
    // marginRight: 24 * Theme.Ratio.H,
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.65,
    elevation: 9,
  },
  notificationImg: {
    width: 18 * Theme.Ratio.H,
    height: 22 * Theme.Ratio.H,
  },
  eventImg: {
    width: 20 * Theme.Ratio.H,
    height: 22 * Theme.Ratio.H,
  },
  logo: {
    width: 32 * Theme.Ratio.H,
    height: 32 * Theme.Ratio.H,
  },
  carouselWrapper: {
    position: 'absolute',
    top: 73 * Theme.Ratio.H,
    left: 0,
    width: '100%',
    height: 185 * Theme.Ratio.H,
  },
  cardViewWrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20 * Theme.Ratio.H,
    paddingTop: 34 * Theme.Ratio.H,
    paddingBottom: 20 * Theme.Ratio.H,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
})

export default HomeScreen
