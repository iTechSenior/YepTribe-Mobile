/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { FunctionComponent, useEffect } from 'react'
import AppNavigation from './navigations'

import PushNotificationIOS from '@react-native-community/push-notification-ios'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { from } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import { Linking, Platform } from 'react-native'
import PushNotification from 'react-native-push-notification'
import { prospectData, ProspectDataContextProvider } from './contexts/ProspectDataContext'
import { UserContextProvider, userInitialState } from './contexts/UserContext'
import { getToken } from './utility/AsyncManager'
import { uriPrefix } from './utility/Common'
import NavigationService from './utility/navigation-service'

const GRAPHQL_ENDPOINT = `https://api.yeptribe.com/graphql`
// const GRAPHQL_ENDPOINT = `http://localhost:5000/graphql`

export const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
})

const authMiddleware = setContext(async (req, { headers }) => {
  const token = await getToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: from([authMiddleware, httpLink]),
  cache: new InMemoryCache(),
})

const handleNotification = (notification: any) => {
  // console.log('notification data', notification)
  // if (Platform.OS === 'ios') {
  // alert(JSON.stringify(notification));
  NavigationService.navigate('ContactReminder', {
    firstName: Platform.OS === 'ios' ? notification.data.firstName : notification.userInfo.firstName,
    lastName: Platform.OS === 'ios' ? notification.data.lastName : notification.userInfo.lastName,
    email: Platform.OS === 'ios' ? notification.data.deliveryEndpoint : notification.userInfo.email,
    phoneNumber: Platform.OS === 'ios' ? notification.data.phoneNumber : notification.userInof.phoneNumber,
  })
  // } else if (Platform.OS === 'android') {
  //   // Linking.openURL(
  //   //   `${uriPrefix}home/share/${notification.userInfo.firstName}/${notification.userInfo.lastName}/${notification.userInfo.deliveryEndpoint}/${notification.userInfo.phoneNumber}`
  //   // )
  //   NavigationService.navigate('ContactReminder', {
  //     firstName: notification.userInfo.firstName,
  //     lastName: notification.userInfo.lastName,
  //     email: notification.userInfo.deliveryEndpoint,
  //     phoneNumber: notification.userInfo.phoneNumber,
  //   })
  // }
}

PushNotification.configure({
  onNotification: (notification: any) => {
    if (Platform.OS === 'android') {
      if (
        (notification.foreground === false && notification.userInteraction === true) ||
        (notification.foreground === false && !('userInteraction' in notification))
      ) {
        handleNotification(notification)
      }
    } else if (Platform.OS === 'ios') {
      if (notification.userInteraction) {
        handleNotification(notification)
      }
      notification.finish(PushNotificationIOS.FetchResult.NoData)
    }
  },
  popInitialNotification: true,
  requestPermissions: true,
})

const App: FunctionComponent<{}> = () => {
  useEffect(() => {
    Linking.addEventListener('url', handleOpenUrl)
    return function() {
      Linking.removeEventListener('url', handleOpenUrl)
    }
  })

  const handleOpenUrl = ({ url }: { url: string }) => {
    console.log('url', url)
  }

  // const onNotification = notification => {
  //   if (notification.userInteraction) {
  //     Alert.alert('aaaa')
  //     PushNotification.getApplicationIconBadgeNumber(number => {
  //       const currentNumCnt = number - 2
  //       PushNotification.setApplicationIconBadgeNumber(currentNumCnt)
  //     })
  //   } else {
  //     Alert.alert('aaaa')
  //   }
  // }

  // const [badgeNumber, setBadgeNumber] = React.useState(0)

  // useEffect(() => {
  //   PushNotification.configure({
  //     // (optional) Called when Token is generated (iOS and Android)
  //     // localNotification: function(token) {
  //     //   Alert.alert('aaaa')
  //     // },
  //     // // (required) Called when a remote or local notification is opened or received
  //     // onNotification: onNotification, //this._onNotification,
  //     // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
  //     onNotification: onNotification,
  //     senderID: '',
  //     // IOS ONLY (optional): default: all - Permissions to register.
  //     permissions: {
  //       alert: true,
  //       badge: true,
  //       sound: true,
  //     },
  //     // Should the initial notification be popped automatically
  //     // default: true
  //     popInitialNotification: true,
  //     /**
  //      * (optional) default: true
  //      * - Specified if permissions (ios) and token (android and ios) will requested or not,
  //      * - if not, you must call PushNotificationsHandler.requestPermissions() later
  //      */
  //     requestPermissions: true,
  //   })

  //   // const appStateListener = state => {
  //   //   if (state === 'active') {
  //   //     PushNotification.popInitialNotification(notification => {
  //   //       if (notification) {
  //   //         onNotification(notification)
  //   //       }
  //   //     })
  //   //   }
  //   // }

  //   // AppState.addEventListener('change', appStateListener)
  //   PushNotification.getApplicationIconBadgeNumber(number => {
  //     const currentNumCnt = number + 2
  //     console.log('currentValue', number)

  //     PushNotification.localNotificationSchedule({
  //       title: 'My Notification Title',
  //       message: 'My Notification Message',
  //       date: new Date(Date.now() + 3 * 1000),
  //       number: currentNumCnt,
  //     })
  //   })

  //   // let currentBadgeNumberCount = badgeNumber
  //   // currentBadgeNumberCount++
  //   // setBadgeNumber(currentBadgeNumberCount)
  //   // console.log('currentValue', badgeNumber)
  //   // PushNotification.setApplicationIconBadgeNumber(badgeNumber)
  // }, [])

  return (
    <ApolloProvider client={client}>
      <UserContextProvider value={userInitialState}>
        <ProspectDataContextProvider value={prospectData}>
          <AppNavigation />
        </ProspectDataContextProvider>
      </UserContextProvider>
    </ApolloProvider>
  )
}

export default App
