import React, { useContext, useState } from 'react'
import { Alert, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Share } from 'react-native'
import PushNotification from 'react-native-push-notification'
import { useNavigation } from 'react-navigation-hooks'

import NavHeader from '../../../../components/navHeader'

import { ApolloError } from 'apollo-client'
import { ExecutionResult } from 'react-apollo'
import { ShareDataContext } from '../../../../contexts/ShareDataContext'
import { UserContext } from '../../../../contexts/UserContext'
import { AddYepSharedContentProspectMutation, useAddYepSharedContentProspectMutation } from '../../../../graphql'
import { Theme } from '../../../../theme'

const SetReminderScreen = () => {
  const navigation = useNavigation()
  const shareDataContext = useContext(ShareDataContext)
  console.log('ShareData', shareDataContext)
  const userContext = useContext(UserContext)
  const [addProspectMutation] = useAddYepSharedContentProspectMutation()

  const [error, setError] = useState<ApolloError | null>(null)

  const shareId = shareDataContext.data!.contentId!.split('/')
  console.log('Shareid', shareId)
  const certURL = `https://incentives.tripvalet.com/info/${shareId[1]}/${userContext.user!.uuid}`

  const handleAddProspect = async () => {
    const addProspectResponse: void | ExecutionResult<AddYepSharedContentProspectMutation> = await addProspectMutation({
      variables: {
        args: {
          prospect: {
            id: shareDataContext.data!.id,
            firstName: shareDataContext.data!.firstName!,
            lastName: shareDataContext.data!.lastName!,
            deliveryEndpoint: shareDataContext.data!.deliveryEndpoint!,
          },
          contentId: shareDataContext.data!.contentId!,
          personalizedMessage: `${shareDataContext.data!.text}\n\n${certURL}`,
        },
      },
    }).catch((err: ApolloError) => {
      setError(err)
    })
    if (addProspectResponse) {
      console.log('addProspect', addProspectResponse)
    }
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: shareDataContext.data!.title,
        message: `${shareDataContext.data!.text}\n\n${certURL}`,
      })

      if (result.action === Share.sharedAction) {
        navigation.navigate('Share')
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('Shared With ', result.activityType)
        } else {
          // shared
          console.log('Shared, but not sure')
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed')
        // dismissed
      }
    } catch (error) {
      //error
      Alert.alert('Sorry, something went wrong')
    }
  }

  const handleSetReminder = (option: string) => {
    if (option === '24h') {
      PushNotification.localNotificationSchedule({
        title: 'Follow Up Reminder',
        message: '',
        userInfo: { ...shareDataContext!.data! },
        date: new Date(Date.now() + 10 * 1000),
      })
    } else if (option === '3d') {
      PushNotification.localNotificationSchedule({
        title: 'Follow Up Reminder',
        message: '',
        date: new Date(Date.now() + 60 * 60 * 24 * 3 * 1000),
      })
    } else if (option === '7d') {
      PushNotification.localNotificationSchedule({
        title: 'Follow Up Reminder',
        message: '',
        date: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000),
      })
    }
  }

  const handleReminderOptionBtnClick = (option: string) => {
    handleSetReminder(option)
    handleAddProspect()
    onShare()
    // sendMailByOS(shareDataContext.data?.text!)
  }

  // const shareToMessenger = (text: string) => {
  //   Linking.openURL(
  //     `fb-messenger://share?text=${text}\n\nhttps://incentives.tripvalet.com/view/${prospectDataContext.data!.certificateId}/${userContext.user!.uuid}`
  //   )
  // }

  // const sendMessage = (text: string) => {
  //   const url = `sms:/open?addresses=${shareDataContext.data!.phoneNumber}&body=${text}\n\nhttps://incentives.tripvalet.com/view/${
  //     shareDataContext.data!.contentId
  //   }/${userContext.user!.uuid}`
  //   Linking.openURL(url)
  // }

  // const sendMailByOS = (text: string) => {
  //   const subject = `Enjoy a ${shareDataContext.data!.title}`
  //   const url = `mailto:${shareDataContext.data!.deliveryEndpoint}?subject=${subject}&body=${text}\n\n${certURL}`
  //   Linking.openURL(url)
  // }

  // const shareToWhatsApp = (text: string) => {
  //   Linking.openURL(`whatsapp://send?text=${text}\n\nhttps://incentives.tripvalet.com/view/${shareDataContext.data!.certificateId}/${userContext.user!.uuid}`)
  // }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavHeader type="normal" />
      <View style={styles.mainContainer}>
        <Text style={styles.quizTxt}>{`Set Reminder for follow up to ${shareDataContext.data!.firstName} ${shareDataContext.data!.lastName}`}</Text>
        <TouchableOpacity onPress={() => handleReminderOptionBtnClick('24h')} style={styles.optionBtn}>
          <Text style={styles.btnTxt}>YES - 24 HOURS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleReminderOptionBtnClick('3d')} style={styles.optionBtn}>
          <Text style={styles.btnTxt}>YES - 3 DAYS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleReminderOptionBtnClick('7d')} style={styles.optionBtn}>
          <Text style={styles.btnTxt}>YES - 7 DAYS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleReminderOptionBtnClick('noreminder')} style={styles.optionBtn}>
          <Text style={styles.btnTxt}>NO REMINDER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SetReminderScreen

// PushNotification.configure({
//   // (optional) Called when Token is generated (iOS and Android)
//   // onRegister: onRegister, //this._onRegister.bind(this),
//   // // (required) Called when a remote or local notification is opened or received
//   // onNotification: onNotification, //this._onNotification,
//   // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
//   onRegister: function(token: string) {
//     PushNotification.setApplicationIconBadgeNumber(0)
//     console.log('TOKEN:', token)
//   },
//   onNotification(notification: any) {
//     console.log('NOTIFICATION:', notification)
//     if (notification.userInteraction) {
//       Alert.alert('aaaa')
//       PushNotification.getApplicationIconBadgeNumber((num: number) => {
//         const currentNumCnt = num - 1
//         PushNotification.setApplicationIconBadgeNumber(currentNumCnt)
//       })
//     } else {
//       // Alert.alert('aaaa')
//     }
//     // PushNotification.setApplicationIconBadgeNumber(0)
//     // process the notification
//     // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
//     notification.finish(PushNotificationIOS.FetchResult.NoData)
//     //  notification.finish('backgroundFetchResultNewData');
//   },
//   senderID: '',
//   // IOS ONLY (optional): default: all - Permissions to register.
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },
//   // Should the initial notification be popped automatically
//   // default: true
//   popInitialNotification: true,
//   /**
//    * (optional) default: true
//    * - Specified if permissions (ios) and token (android and ios) will requested or not,
//    * - if not, you must call PushNotificationsHandler.requestPermissions() later
//    */
//   requestPermissions: true,
// })

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  quizTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
    marginTop: 20 * Theme.Ratio.H,
    marginBottom: 50 * Theme.Ratio.H,
  },
  optionBtn: {
    width: 200 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25AAE1',
    // paddingHorizontal: 40 * Theme.Ratio.H,
    paddingVertical: 5 * Theme.Ratio.H,
    borderRadius: 17,
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginBottom: 30 * Theme.Ratio.H,
  },
  btnTxt: {
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 15 * Theme.Ratio.H,
    color: 'white',
  },
})
