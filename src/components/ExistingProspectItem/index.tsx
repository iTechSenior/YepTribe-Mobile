import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Prospect } from '../../graphql'
import { Gravatar } from 'react-native-gravatar'

import GradientBorderComponent from '../../components/GradientBorderComponent'

// import Logo from '../../assets/Icons/Home/Rectangle304.png'

import { Theme } from '../../theme'

interface IProps {
  prospectUserInfo: Partial<Prospect>
}

const ExistingProspectListItem = (props: IProps) => {
  const handleProspectUserClick = () => {}

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoWrapper}>
        {/* <Image source={Logo} style={styles.logo} /> */}
        <Gravatar options={{ email: props.prospectUserInfo.deliveryEndpoint, parameters: { size: '50', d: 'mm' }, secure: true }} style={styles.avatarImg} />
      </View>
      <GradientBorderComponent>
        <View style={styles.infoWrapper}>
          <Text style={styles.nameTxt}>{`${props.prospectUserInfo.firstName} ${props.prospectUserInfo.lastName}`} </Text>
          <Text style={styles.typeTxt}>{props.prospectUserInfo.redeemed ? 'Redeemed' : 'Prospect'}</Text>
        </View>
      </GradientBorderComponent>
    </View>
  )
}

export default ExistingProspectListItem

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14 * Theme.Ratio.H,
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: '#BCECFE',
    borderRadius: 50,
  },
  infoWrapper: {
    flex: 1,
    paddingVertical: 20 * Theme.Ratio.H,
  },
  nameTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
    color: '#212529',
  },
  typeTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 13 * Theme.Ratio.H,
    color: '#8A8A8F',
  },
})
