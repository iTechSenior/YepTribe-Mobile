import React from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Theme } from '../../theme'

const TrainingListItem = props => {
  let imgWidth = 0
  let imgHeight = 0
  switch (props.info) {
    case 'PDF':
      imgWidth = 13
      imgHeight = 10
      break
    default:
      imgWidth = 9
      imgHeight = 11
      break
  }
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={props.cardBackgroundImage}
        style={styles.cardImage}
      >
        <View style={styles.infoWrapper}>
          <Text style={styles.infoTxt}>{props.info}</Text>
        </View>
        <TouchableOpacity style={styles.cardBtnWrapper}>
          <Image
            source={props.cardButtonImage}
            style={{
              width: imgWidth * Theme.Ratio.H,
              height: imgHeight * Theme.Ratio.H,
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.cardTxt}>{props.cardText}</Text>
    </View>
  )
}

export default TrainingListItem

const styles = StyleSheet.create({
  mainContainer: {
    width: 160 * Theme.Ratio.H,
  },
  cardImage: {
    width: 160 * Theme.Ratio.H,
    height: 120 * Theme.Ratio.H,
    paddingVertical: 10 * Theme.Ratio.H,
    paddingLeft: 11 * Theme.Ratio.H,
    paddingRight: 8 * Theme.Ratio.H,
    justifyContent: 'space-between',
    borderRadius: 6,
  },
  infoWrapper: {
    width: 45 * Theme.Ratio.H,
    height: 16 * Theme.Ratio.H,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  infoTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 11 * Theme.Ratio.H,
    color: '#231F20',
  },
  cardBtnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: 23 * Theme.Ratio.H,
    height: 23 * Theme.Ratio.H,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  cardTxt: {
    width: 160 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 13 * Theme.Ratio.H,
    color: '#212529',
    marginTop: 7 * Theme.Ratio.H,
    marginBottom: 20 * Theme.Ratio.H,
  },
})
