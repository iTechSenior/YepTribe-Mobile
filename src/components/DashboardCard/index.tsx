import React from 'react'
import { Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Theme } from '../../theme'

interface IProps {
  cardViewIcon: ImageSourcePropType
  cardName: string
  emailType?: string
  onCardClick: (cardName: string) => void
}

const CardView = (props: IProps) => {
  let iconW
  let iconH
  switch (props.cardName) {
    case 'Prospects':
      iconW = 18.86 * Theme.Ratio.H
      iconH = 12 * Theme.Ratio.H
      break
    case 'Certificates':
      iconW = 16 * Theme.Ratio.H
      iconH = 14 * Theme.Ratio.H
      break
    case 'Office':
      iconW = 16 * Theme.Ratio.H
      iconH = 14 * Theme.Ratio.H
      break
    case 'Share':
      iconW = 12.09 * Theme.Ratio.H
      iconH = 13.7 * Theme.Ratio.H
      break
    case 'Add Affiliate':
      iconW = 17.74 * Theme.Ratio.H
      iconH = 15.01 * Theme.Ratio.H
      break
    case 'Add Member':
      iconW = 18 * Theme.Ratio.H
      iconH = 13 * Theme.Ratio.H
      break
    case 'Email':
      iconW = 22 * Theme.Ratio.H
      iconH = 16.5 * Theme.Ratio.H

      break
    case 'email':
      iconW = 18 * Theme.Ratio.H
      iconH = 13.5 * Theme.Ratio.H
      break
    case 'Text':
      iconW = 18 * Theme.Ratio.H
      iconH = 16.5 * Theme.Ratio.H
      break
    case 'WhatsApp':
      iconW = 18 * Theme.Ratio.H
      iconH = 18 * Theme.Ratio.H
      break
    case 'Messenger':
      iconW = 18 * Theme.Ratio.H
      iconH = 18 * Theme.Ratio.H
      break
  }

  const [pressStatus, setPressStatus] = React.useState(false)

  const handleOnHideUnderlay = () => {
    setPressStatus(false)
  }

  const handleShowUnderlay = () => {
    setPressStatus(true)
  }

  const onCardClick = (cardName: string) => {
    props.onCardClick(cardName)
  }

  return (
    <TouchableHighlight
      activeOpacity={0.85}
      onHideUnderlay={() => handleOnHideUnderlay()}
      onShowUnderlay={() => handleShowUnderlay()}
      style={styles.cardView}
      onPress={() => onCardClick(props.cardName)}
      underlayColor={'#0094ED'}
    >
      <>
        {props.cardName.toUpperCase() === 'EMAIL' ? <Text style={styles.emailTypeTxt}>{props.cardName === 'email' ? 'OS' : 'Default'}</Text> : null}
        <View style={pressStatus ? styles.btnPressCardViewImgWrapper : styles.cardViewImgWrapper}>
          <View style={styles.iconWrapper}>
            <Image source={props.cardViewIcon} style={{ width: iconW, height: iconH }} />
          </View>
        </View>
        <Text style={pressStatus ? styles.btnPressCardTxt : styles.cardTxt}>{props.cardName === 'email' ? 'Email' : props.cardName}</Text>
      </>
    </TouchableHighlight>
  )
}

export default CardView

const styles = StyleSheet.create({
  cardView: {
    justifyContent: 'flex-end',
    width: '47%',
    height: 100,
    aspectRatio: 4 / 3,
    paddingLeft: 10 * Theme.Ratio.H,
    paddingBottom: 10 * Theme.Ratio.H,
    borderRadius: 7,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 20 * Theme.Ratio.H,
  },

  emailTypeTxt: {
    position: 'absolute',
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 13 * Theme.Ratio.H,
    color: '#B4B4B4',
    right: 10 * Theme.Ratio.H,
    top: 10 * Theme.Ratio.H,
  },
  cardViewImgWrapper: {
    width: 33 * Theme.Ratio.H,
    height: 33 * Theme.Ratio.H,
    borderRadius: 50,
    backgroundColor: '#FBFBFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPressCardViewImgWrapper: {
    width: 33 * Theme.Ratio.H,
    height: 33 * Theme.Ratio.H,
    borderRadius: 50,
    backgroundColor: '#FBFBFB',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#1AB1E9',
    borderWidth: 3,
  },
  iconWrapper: {
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4.65,

    elevation: 6,
  },
  cardTxt: {
    marginTop: 6 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 16 * Theme.Ratio.H,
  },
  btnPressCardTxt: {
    marginTop: 6 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 16 * Theme.Ratio.H,
    color: '#ABDBF5',
  },
})
