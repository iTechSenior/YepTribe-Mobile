import React from 'react'
import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Biometrics from 'react-native-biometrics'
import { BioMetricsMode, getBioMetrics, setBioMetrics as AsyncSetBioMetrics } from '../../utility/AsyncManager'

import PhoneIcon from '../../assets/Icons/BottomTabIcons/Deactive/ic_call_24px/ic_call_24px.png'
import MsgIcon from '../../assets/Icons/BottomTabIcons/Deactive/iconmonstr-email-1/iconmonstr-email-1.png'
import FaceIDIcon from '../../assets/Icons/CogWheel/FaceID.png'
import LockIcon from '../../assets/Icons/CogWheel/ic_lock_24px.png'
import NotificationIcon from '../../assets/Icons/CogWheel/ic_notifications_24px.png'
import UserLogoIcon from '../../assets/Icons/CogWheel/ic_person_24px.png'
import LocationIcon from '../../assets/Icons/CogWheel/ic_public_24px.png'
import AttachIcon from '../../assets/Icons/CogWheel/IconWebsite.png'

import { Theme } from '../../theme'

interface IProps {
  option: string
}

const CogWheelListView = (props: IProps) => {
  getBioMetrics().then(isBioMetricEnabled => {
    setBiometries(isBioMetricEnabled === BioMetricsMode.ENABLED ? true : false)
  })

  const [biometries, setBiometries] = React.useState(false)
  const [supportedBiometrics, setSupportedBiometrics] = React.useState<string | null>(null)

  React.useEffect(() => {
    Biometrics.isSensorAvailable().then(biometryType => {
      if (biometryType === Biometrics.TouchID) {
        setSupportedBiometrics('Fingerprint')
      } else if (biometryType === Biometrics.FaceID) {
        setSupportedBiometrics('Face ID')
      } else {
        setSupportedBiometrics(null)
      }
    })
  }, [])
  const renderImage = () => {
    let itemImg = null
    switch (props.option) {
      case 'Profile':
        itemImg = <Image source={UserLogoIcon} style={{ width: 20 * Theme.Ratio.H, height: 20 * Theme.Ratio.H }} />
        break
      case 'Full Name':
        itemImg = <Image source={UserLogoIcon} style={{ width: 20 * Theme.Ratio.H, height: 20 * Theme.Ratio.H }} />
        break
      case 'Email':
        itemImg = (
          <Image
            source={MsgIcon}
            style={{
              width: 21.97 * Theme.Ratio.H,
              height: 16.48 * Theme.Ratio.H,
            }}
          />
        )
        break
      case 'Phone Number':
        itemImg = <Image source={PhoneIcon} style={{ width: 22 * Theme.Ratio.H, height: 22 * Theme.Ratio.H }} />
        break
      case 'Change Password':
        itemImg = (
          <Image
            source={LockIcon}
            style={{
              width: 18.18 * Theme.Ratio.H,
              height: 23.86 * Theme.Ratio.H,
            }}
          />
        )
        break
      case 'Web Site':
        itemImg = <Image source={AttachIcon} style={{ width: 22 * Theme.Ratio.H, height: 22 * Theme.Ratio.H }} />
        break
      case 'Location':
        itemImg = <Image source={LocationIcon} style={{ width: 21 * Theme.Ratio.H, height: 21 * Theme.Ratio.H }} />
        break
      case 'Notification':
        itemImg = (
          <Image
            source={NotificationIcon}
            style={{
              width: 17.77 * Theme.Ratio.H,
              height: 21.66 * Theme.Ratio.H,
            }}
          />
        )
        break
      case 'Use Face ID':
        itemImg = (
          <Image
            source={FaceIDIcon}
            style={{
              width: 23.76 * Theme.Ratio.H,
              height: 23.76 * Theme.Ratio.H,
            }}
          />
        )
        break
    }
    return itemImg
  }

  let CogWheelListItem = null

  switch (props.option) {
    case 'Use Face ID':
      CogWheelListItem = supportedBiometrics ? (
        <View style={styles.mainContainer}>
          <View style={styles.imageWrapper}>{renderImage()}</View>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#D2D2D2', '#FAFAFA', '#FFFFFF']} style={styles.linearGradient}>
            <View style={styles.itemContentWrapper}>
              <Text style={styles.listItemTxt}>{supportedBiometrics}</Text>
              <Switch
                value={biometries}
                // tslint:disable-next-line:no-shadowed-variable
                onValueChange={async () => {
                  setBiometries(!biometries)
                  AsyncSetBioMetrics(biometries)
                }}
              />
            </View>
          </LinearGradient>
        </View>
      ) : null
      break
    default:
      CogWheelListItem = (
        <View style={styles.mainContainer}>
          <View style={styles.imageWrapper}>{renderImage()}</View>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#D2D2D2', '#FAFAFA', '#FFFFFF']} style={styles.linearGradient}>
            <View style={styles.itemContentWrapper}>
              <Text style={styles.listItemTxt}>{props.option}</Text>
            </View>
          </LinearGradient>
        </View>
      )
  }

  return CogWheelListItem
}

export default CogWheelListView

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60 * Theme.Ratio.H,
  },
  imageWrapper: {
    width: 24 * Theme.Ratio.H,
    height: 24 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,

    elevation: 9,
  },
  linearGradient: {
    flex: 1,
    height: 60 * Theme.Ratio.H,
    marginLeft: 20 * Theme.Ratio.H,
    paddingBottom: 1,
  },
  itemContentWrapper: {
    height: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
    color: '#212529',
  },
  switchItemWrapper: {
    height: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
