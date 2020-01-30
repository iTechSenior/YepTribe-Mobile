import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import PhoneButton from '../../assets/Icons/3WayCalls/ic_call_24px/ic_call_24px.png'
import PandingIcon from '../../assets/Icons/3WayCalls/IconPanding/IconPanding.png'
import CheckIcon from '../../assets/Icons/3WayCalls/Path218/Path218.png'
import Logo from '../../assets/Icons/Home/Rectangle304.png'

import { Theme } from '../../theme'

const CallListItem = props => {
  let ListItem = null

  switch (props.userStatus) {
    case 'Panding':
      ListItem = (
        <View style={styles.mainContainer}>
          <View style={styles.iconWrapper}>
            <Image source={PandingIcon} style={styles.pandingImg} />
          </View>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#D2D2D2', '#FAFAFA', '#FFFFFF']} style={styles.linearGradient}>
            <View style={styles.itemInfoWrapper}>
              <View style={styles.infoWrapper}>
                <Text style={styles.nameTxt}>{props.userName}</Text>
                <Text style={styles.idTxt}>{props.userId}</Text>
              </View>
              <View style={styles.statusInfoWrapper}>
                <Text style={styles.statusTxt}>{props.userStatus}</Text>
                <Text style={styles.dateTxt}>{props.userDateInfo}</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      )
      break
    case 'Active':
      ListItem = (
        <View style={styles.mainContainer}>
          <Image source={Logo} style={styles.avatarImg} />
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#D2D2D2', '#FAFAFA', '#FFFFFF']} style={styles.linearGradient}>
            <View style={styles.itemInfoWrapper}>
              <View style={styles.infoWrapper}>
                <Text style={styles.nameTxt}>{props.userName}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  <Text style={styles.idTxt}>{props.userId}</Text>
                  <View
                    style={{
                      width: 15 * Theme.Ratio.H,
                      height: 15 * Theme.Ratio.H,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#25AAE1',
                      borderRadius: 50,
                      marginLeft: 5 * Theme.Ratio.H,
                    }}
                  >
                    <Image
                      source={CheckIcon}
                      style={{
                        width: 7.32 * Theme.Ratio.H,
                        height: 4.71 * Theme.Ratio.H,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.statusInfoWrapper}>
                <TouchableOpacity style={styles.callBtn}>
                  <Image source={PhoneButton} style={styles.phoneBtnImg} />
                  <Text style={styles.callBtnTxt}>Request Call</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      )
      break
  }

  return ListItem
}

export default CallListItem

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 78 * Theme.Ratio.H,
  },
  linearGradient: {
    flex: 1,
    height: 78 * Theme.Ratio.H,
    paddingBottom: 1,
  },
  itemInfoWrapper: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    backgroundColor: 'white',
  },
  iconWrapper: {
    width: 32 * Theme.Ratio.H,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16 * Theme.Ratio.H,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 9,
  },
  pandingImg: {
    width: 24 * Theme.Ratio.H,
    height: 24 * Theme.Ratio.H,
  },
  infoWrapper: {
    justifyContent: 'center',
  },
  nameTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
  },
  idTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 13 * Theme.Ratio.H,
  },
  statusInfoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20 * Theme.Ratio.H,
  },
  statusTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 13 * Theme.Ratio.H,
    color: '#8A8A8F',
  },
  dateTxt: {
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 13 * Theme.Ratio.H,
    color: '#1AACE9',
  },
  avatarImg: {
    width: 32 * Theme.Ratio.H,
    height: 32 * Theme.Ratio.H,
    // marginLeft: 20 * Theme.Ratio.H,
    marginRight: 16 * Theme.Ratio.H,
  },
  callBtn: {
    width: 125 * Theme.Ratio.H,
    height: 30 * Theme.Ratio.H,
    borderRadius: 15,
    backgroundColor: '#25AAE1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  phoneBtnImg: {
    width: 13.48 * Theme.Ratio.H,
    height: 13.48 * Theme.Ratio.H,
  },
  callBtnTxt: {
    marginLeft: 3.5 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 13 * Theme.Ratio.H,
    color: 'white',
  },
})
