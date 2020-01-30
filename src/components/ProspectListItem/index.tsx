import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Swipeout from 'react-native-swipeout'
import { Prospect } from '../../graphql'
import { Gravatar } from 'react-native-gravatar'
import moment from 'moment'

import GradientBorderComponent from '../GradientBorderComponent'

import PhoneIcon from '../../assets/Icons/BottomTabIcons/Deactive/ic_call_24px/ic_call_24px.png'
import Logo from '../../assets/Icons/Home/Rectangle304.png'
import EyeIcon from '../../assets/Icons/Prospects/eye.png'
import SmallCommentIcon from '../../assets/Icons/Prospects/ic_comment_24px.png'
import CommentIcon from '../../assets/Icons/Prospects/ic_comment_24px_b.png'
import PersonPinIcon from '../../assets/Icons/Prospects/ic_person_pin_24px.png'
import PostIcon from '../../assets/Icons/Prospects/ic_share_24px.png'
import RecycleIcon from '../../assets/Icons/Prospects/remove.png'
import SubtractionIcon from '../../assets/Icons/Prospects/Subtraction1.png'

import { Theme } from '../../theme'
import ProspectUserProfileScreen from '../../screens/mainStack/homeStack/SendMsgNavScreen/ProspectUserProfileScreen'

interface PItem {
  id: number
  firstName: string
  lastName: string
  commentTime: string
  eyeTime: string
  status: string
}
interface IProps {
  prospectsUserInfo: Partial<Prospect>
  handlePersonPinClick: (id: number) => void
}
const ProspectListItem = (props: IProps) => {
  // const swipeLeftButtons = [
  //   {
  //     component: (
  //       <View
  //         style={{
  //           height: 78 * Theme.Ratio.H,
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <View
  //           style={{
  //             shadowColor: '#000000',
  //             shadowOffset: {
  //               width: 0,
  //               height: 5,
  //             },
  //             shadowOpacity: 0.15,
  //             shadowRadius: 4.65,

  //             elevation: 6,
  //           }}
  //         >
  //           <Image
  //             source={PhoneIcon}
  //             style={{
  //               width: 23.53 * Theme.Ratio.H,
  //               height: 23.53 * Theme.Ratio.H,
  //               alignSelf: 'center',
  //             }}
  //           />
  //         </View>
  //       </View>
  //     ),
  //     backgroundColor: 'white',
  //   },
  //   {
  //     component: (
  //       <View
  //         style={{
  //           height: 78 * Theme.Ratio.H,
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <View
  //           style={{
  //             shadowColor: '#000000',
  //             shadowOffset: {
  //               width: 0,
  //               height: 5,
  //             },
  //             shadowOpacity: 0.15,
  //             shadowRadius: 4.65,

  //             elevation: 6,
  //           }}
  //         >
  //           <Image
  //             source={CommentIcon}
  //             style={{
  //               width: 24 * Theme.Ratio.H,
  //               height: 24 * Theme.Ratio.H,
  //             }}
  //           />
  //         </View>
  //       </View>
  //     ),
  //     backgroundColor: 'white',
  //     // underlayColor: 'gray',
  //   },

  //   {
  //     component: (
  //       <View
  //         style={{
  //           height: 78 * Theme.Ratio.H,
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <View
  //           style={{
  //             shadowColor: '#000000',
  //             shadowOffset: {
  //               width: 0,
  //               height: 5,
  //             },
  //             shadowOpacity: 0.15,
  //             shadowRadius: 4.65,

  //             elevation: 6,
  //           }}
  //         >
  //           <Image
  //             source={PostIcon}
  //             style={{
  //               width: 21.18 * Theme.Ratio.H,
  //               height: 24 * Theme.Ratio.H,
  //             }}
  //           />
  //         </View>
  //       </View>
  //     ),
  //     backgroundColor: 'white',
  //     // underlayColor: 'gray',
  //   },
  // ]

  // const swipeRightButtons = [
  //   {
  //     component: (
  //       <View
  //         style={{
  //           height: 78 * Theme.Ratio.H,
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <View
  //           style={{
  //             shadowColor: '#000000',
  //             shadowOffset: {
  //               width: 0,
  //               height: 5,
  //             },
  //             shadowOpacity: 0.15,
  //             shadowRadius: 4.65,

  //             elevation: 6,
  //           }}
  //         >
  //           <Image
  //             source={PersonPinIcon}
  //             style={{
  //               width: 20.07 * Theme.Ratio.H,
  //               height: 24 * Theme.Ratio.H,
  //             }}
  //           />
  //         </View>
  //       </View>
  //     ),
  //     backgroundColor: 'white',
  //     // underlayColor: 'gray',
  //     onPress: () => {
  //       props.handlePersonPinClick(props.prospectsUserInfo.id)
  //     },
  //   },
  //   {
  //     component: (
  //       <View
  //         style={{
  //           height: 78 * Theme.Ratio.H,
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <View
  //           style={{
  //             shadowColor: '#000000',
  //             shadowOffset: {
  //               width: 0,
  //               height: 5,
  //             },
  //             shadowOpacity: 0.15,
  //             shadowRadius: 4.65,

  //             elevation: 6,
  //           }}
  //         >
  //           <Image
  //             source={SubtractionIcon}
  //             style={{
  //               width: 24 * Theme.Ratio.H,
  //               height: 24 * Theme.Ratio.H,
  //             }}
  //           />
  //         </View>
  //       </View>
  //     ),
  //     backgroundColor: 'white',
  //     // underlayColor: 'gray',
  //   },

  //   {
  //     component: (
  //       <View
  //         style={{
  //           height: 78 * Theme.Ratio.H,
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <View
  //           style={{
  //             shadowColor: '#E12525',
  //             shadowOffset: {
  //               width: 0,
  //               height: 5,
  //             },
  //             shadowOpacity: 0.15,
  //             shadowRadius: 4.65,

  //             elevation: 6,
  //           }}
  //         >
  //           <Image
  //             source={RecycleIcon}
  //             style={{
  //               width: 20 * Theme.Ratio.H,
  //               height: 24 * Theme.Ratio.H,
  //             }}
  //           />
  //         </View>
  //       </View>
  //     ),
  //     backgroundColor: 'white',
  //     // underlayColor: 'gray',
  //   },
  // ]

  const renderStatusBadge = () => {
    let statusBadge = null

    if (props.prospectsUserInfo.redeemed) {
      return (statusBadge = (
        <View style={[styles.linearGradientWrapper, { shadowColor: '#25AAE1' }]}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#25AAE1', '#00B4FF']} style={styles.linearGradient}>
            <Text style={styles.statusTxt}>Redeemed</Text>
          </LinearGradient>
        </View>
      ))
    } else {
      return (statusBadge = (
        <View style={[styles.linearGradientWrapper, { shadowColor: '#F6C130' }]}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#25E144', '#35D80E']} style={styles.linearGradient}>
            <Text style={styles.statusTxt}>Prospect</Text>
          </LinearGradient>
        </View>
      ))
    }

    // switch (props.prospectsUserInfo.status) {
    //   case 'Warm':
    //     statusBadge = (
    //       <View style={[styles.linearGradientWrapper, { shadowColor: '#F6C130' }]}>
    //         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#F6C130', '#FF9100']} style={styles.linearGradient}>
    //           <Text style={styles.statusTxt}>{props.prospectsUserInfo.status}</Text>
    //         </LinearGradient>
    //       </View>
    //     )
    //     break
    //   case 'Hot':
    //     statusBadge = (
    //       <View style={[styles.linearGradientWrapper, { shadowColor: '#FF4A4A' }]}>
    //         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#E12525', '#FF4A4A']} style={styles.linearGradient}>
    //           <Text style={styles.statusTxt}>{props.prospectsUserInfo.status}</Text>
    //         </LinearGradient>
    //       </View>
    //     )
    //     break
    //   case 'Follow-Up Later':
    //     statusBadge = (
    //       <View style={[styles.linearGradientWrapper, { shadowColor: '#25AAE1' }]}>
    //         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#25AAE1', '#00B4FF']} style={styles.linearGradient}>
    //           <Text style={styles.statusTxt}>{props.prospectsUserInfo.status}</Text>
    //         </LinearGradient>
    //       </View>
    //     )
    //     break
    //   case 'Team Member':
    //     statusBadge = (
    //       <View style={[styles.linearGradientWrapper, { shadowColor: '#F6C130' }]}>
    //         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#25E144', '#35D80E']} style={styles.linearGradient}>
    //           <Text style={styles.statusTxt}>{props.prospectsUserInfo.status}</Text>
    //         </LinearGradient>
    //       </View>
    //     )
    //     break
    //   case 'Customer':
    //     statusBadge = (
    //       <View style={[styles.linearGradientWrapper, { shadowColor: '#B09160' }]}>
    //         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#DFC498', '#B09160']} style={styles.linearGradient}>
    //           <Text style={styles.statusTxt}>{props.prospectsUserInfo.status}</Text>
    //         </LinearGradient>
    //       </View>
    //     )
    //     break
    //   case 'New':
    //     statusBadge = (
    //       <View style={[styles.linearGradientWrapper, { shadowColor: '#25AAE1' }]}>
    //         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#DB25E1', '#5400FF']} style={styles.linearGradient}>
    //           <Text style={styles.statusTxt}>{props.prospectsUserInfo.status}</Text>
    //         </LinearGradient>
    //       </View>
    //     )
    //     break
    // }
    // return statusBadge
  }
  return (
    // <Swipeout left={swipeLeftButtons} right={swipeRightButtons} backgroundColor={'#F2F2F2'} buttonWidth={78}>
    <View style={styles.mainContainer}>
      <View
        style={{
          backgroundColor: 'white',
          paddingRight: 14 * Theme.Ratio.H,
          height: 78 * Theme.Ratio.H,
          justifyContent: 'center',
          paddingLeft: 20 * Theme.Ratio.H,
        }}
      >
        <Gravatar options={{ email: props.prospectsUserInfo.deliveryEndpoint, parameters: { size: '50', d: 'mm' }, secure: true }} style={styles.avatarImg} />
      </View>
      <View style={{ flex: 1 }}>
        <GradientBorderComponent>
          <View style={styles.userInfoWrapper}>
            <View style={styles.infoWrapper}>
              <Text style={styles.nameInfo}>{props.prospectsUserInfo.firstName + ' ' + props.prospectsUserInfo.lastName}</Text>
              <View style={styles.subInfo}>
                <View style={styles.itemInfoImgWrapper}>
                  <Image source={SmallCommentIcon} style={styles.commentImg} />
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={styles.subInfoTxt}>
                    {moment(props.prospectsUserInfo.createdAt)
                      .local()
                      .format('MMMM Do YYYY')}
                  </Text>
                  <Text style={styles.subInfoTxt}>
                    {moment(props.prospectsUserInfo.createdAt)
                      .local()
                      .format('h:mm:ss A')}
                  </Text>
                </View>
                {/* <View style={styles.itemInfoImgWrapper}>
                    <Image source={EyeIcon} style={styles.eyeImg} />
                  </View>
                  <Text style={styles.subInfoTxt}>{props.prospectsUserInfo.eyeTime}</Text> */}
              </View>
            </View>
            {renderStatusBadge()}
          </View>
        </GradientBorderComponent>
      </View>
    </View>
    // </Swipeout>
  )
}

export default ProspectListItem

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: 78 * Theme.Ratio.H,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12 * Theme.Ratio.H,
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: '#BCECFE',
    borderRadius: 50,
  },
  infoWrapper: {
    justifyContent: 'center',
  },
  nameInfo: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
    color: '#212529',
  },
  subInfo: {
    flexDirection: 'row',
  },
  statusTxt: {
    marginHorizontal: 12 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 11 * Theme.Ratio.H,
    color: '#FFFFFF',
  },
  itemInfoImgWrapper: {
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 9,
    marginRight: 7.48 * Theme.Ratio.H,
    paddingHorizontal: 5 * Theme.Ratio.H,
  },
  commentImg: {
    marginTop: 5 * Theme.Ratio.H,
    width: 12.52 * Theme.Ratio.H,
    height: 12.52 * Theme.Ratio.H,
  },
  eyeImg: {
    width: 17.86 * Theme.Ratio.H,
    height: 10.83 * Theme.Ratio.H,
    marginLeft: 12 * Theme.Ratio.H,
    marginRight: 7.14 * Theme.Ratio.H,
  },
  subInfoTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 13 * Theme.Ratio.H,
  },
  linearGradientWrapper: {
    marginRight: 20 * Theme.Ratio.H,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  linearGradient: {
    height: 20 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
})
