import React, { useContext, useState } from 'react'
import { Alert, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PushNotification from 'react-native-push-notification'
import PushNotificationIOS from '@react-native-community/push-notification-ios'
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'

import NavHeader from '../../../../../components/navHeader'

import { ApolloError } from 'apollo-client'
import { ExecutionResult } from 'react-apollo'
import { ProspectDataContext } from '../../../../../contexts/ProspectDataContext'
import { UserContext } from '../../../../../contexts/UserContext'
import { AddProspectMutation, useAddProspectMutation } from '../../../../../graphql'
import { Theme } from '../../../../../theme'

const SetReminderScreen = () => {
  const navigation = useNavigation()
  const prospectDataContext = useContext(ProspectDataContext)
  const userContext = useContext(UserContext)
  const [addProspectMutation] = useAddProspectMutation()

  const [error, setError] = useState<ApolloError | null>(null)

  const handleAddProspect = async () => {
    const addProspectResponse: void | ExecutionResult<AddProspectMutation> = await addProspectMutation({
      variables: {
        id: prospectDataContext.data!.id,
        firstName: prospectDataContext.data!.firstName!,
        lastName: prospectDataContext.data!.lastName!,
        deliveryEndpoint: prospectDataContext.data!.deliveryEndpoint!,
        deliveryMethod: prospectDataContext.data!.shareType!,
        certificateId: prospectDataContext.data!.certificateId!,
        personalizedMessage: prospectDataContext.data!.personalizedMessage!,
      },
    }).catch((err: ApolloError) => {
      setError(err)
    })
    if (addProspectResponse) {
      console.log('addProspect', addProspectResponse)
    }
  }

  const handleSetReminder = (option: string) => {
    // PushNotification.localNotificationSchedule({
    //   title: 'Follow Up Reminder',
    //   message: '',
    //   userInfo: { ...prospectDataContext!.data! },
    //   date: new Date(Date.now() + 5 * 1000),
    // })
    // PushNotification.getApplicationIconBadgeNumber((num: number) => {
    //   let currentNumCnt: number
    //   currentNumCnt = num === -1 ? num + 2 : num + 1
    if (option === '24h') {
      PushNotification.localNotificationSchedule({
        title: 'Follow Up Reminder',
        message: '',
        userInfo: { ...prospectDataContext!.data! },
        date: new Date(Date.now() + 10 * 1000),
        // number: currentNumCnt.toString(),
      })
    } else if (option === '3d') {
      PushNotification.localNotificationSchedule({
        title: 'Follow Up Reminder',
        message: '',
        date: new Date(Date.now() + 60 * 60 * 24 * 3 * 1000),
        // number: currentNumCnt.toString(),
      })
    } else if (option === '7d') {
      PushNotification.localNotificationSchedule({
        title: 'Follow Up Reminder',
        message: '',
        date: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000),
        // number: currentNumCnt.toString(),
      })
    }
    // })
  }

  const handleReminderOptionBtnClick = (option: string) => {
    handleSetReminder(option)
    handleAddProspect()
    if (prospectDataContext.data!.shareType === 'Whatsapp') {
      shareToWhatsApp(prospectDataContext.data!.personalizedMessage!)
    } else if (prospectDataContext.data!.shareType === 'email') {
      sendMailByOS(prospectDataContext.data!.personalizedMessage!)
    } else if (prospectDataContext.data!.shareType === 'Email') {
      {
        error ? Alert.alert('Failed', 'Sorry, fail to send an invitation.') : Alert.alert('Success', 'Invitation had been sent successfully.')
      }
    } else if (prospectDataContext.data!.shareType === 'Text') {
      sendMessage(prospectDataContext.data!.personalizedMessage!)
    } else if (prospectDataContext.data!.shareType === 'Messenger') {
      shareToMessenger(prospectDataContext.data!.personalizedMessage!)
    }
    navigation.navigate('Certificates')
  }

  const shareToMessenger = (text: string) => {
    Linking.openURL(
      `fb-messenger://share?text=${text}\n\nhttps://incentives.tripvalet.com/view/${prospectDataContext.data!.certificateId}/${userContext.user!.uuid}`
    )
  }

  const sendMessage = (text: string) => {
    const url = `sms:/open?addresses=${prospectDataContext.data!.phoneNumber}&body=${text}\n\nhttps://incentives.tripvalet.com/view/${
      prospectDataContext.data!.certificateId
    }/${userContext.user!.uuid}`
    Linking.openURL(url)
  }

  const sendMailByOS = (text: string) => {
    const subject = `Enjoy a ${prospectDataContext.data!.certificateTitle}`
    const url = `mailto:${prospectDataContext.data!.deliveryEndpoint}?subject=${subject}&body=${text}\n\nhttps://incentives.tripvalet.com/view/${
      prospectDataContext.data!.certificateId
    }/${userContext.user!.uuid}`
    Linking.openURL(url)
  }

  const shareToWhatsApp = (text: string) => {
    Linking.openURL(
      `whatsapp://send?text=${text}\n\nhttps://incentives.tripvalet.com/view/${prospectDataContext.data!.certificateId}/${userContext.user!.uuid}`
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavHeader type="normal" />
      <View style={styles.mainContainer}>
        <Text style={styles.quizTxt}>{`Set Reminder for follow up to ${prospectDataContext.data!.firstName} ${prospectDataContext.data!.lastName}`}</Text>
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
