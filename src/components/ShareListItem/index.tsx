import React from 'react'
import { Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Theme } from '../../theme'

import PostIcon from '../../assets/Icons/Home/ic_share_24px/ic_share_24px.png'
// import ShareIcon from '../../assets/Icons/SendCertificates/Share.png'
import { ContextDataType } from '../../contexts/ShareDataContext'

interface IProps {
  shareIndex: number
  categoryIndex: number
  thumbnailUrl: string | undefined | null
  title: string
  // handleShare: (share: Partial<ShareableContent>) => void
  handlePost: (categoryIndex: number, shareIndex: number) => void
}

const ShareListItem = (props: IProps) => {
  // const handleShare = () => {
  //   props.handleShare(props.shareDetail)
  // }

  const handlePost = () => {
    props.handlePost(props.categoryIndex, props.shareIndex)
  }

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={{ uri: props.thumbnailUrl! }} imageStyle={{ borderRadius: 7 }} style={styles.cardImage}>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity onPress={() => handlePost()} style={styles.cardButton}>
            <Image source={PostIcon} style={styles.postImg} />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => handleShare()} style={styles.cardButton}>
            <Image source={ShareIcon} style={styles.shareImg} />
          </TouchableOpacity> */}
        </View>
      </ImageBackground>
      <Text style={styles.cardTxt}>{props.title}</Text>
    </View>
  )
}

export default ShareListItem

const styles = StyleSheet.create({
  mainContainer: {
    width: '47%',
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
    paddingTop: 10 * Theme.Ratio.H,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    width: 23 * Theme.Ratio.H,
    height: 23 * Theme.Ratio.H,
    marginRight: 10 * Theme.Ratio.H,
  },
  postImg: {
    width: 12.09 * Theme.Ratio.H,
    height: 13.7 * Theme.Ratio.H,
  },
  shareImg: {
    width: 13.01 * Theme.Ratio.H,
    height: 10.84 * Theme.Ratio.H,
  },
  cardTxt: {
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 13 * Theme.Ratio.H,
    color: '#212529',
    width: 160 * Theme.Ratio.H,
    marginTop: 7 * Theme.Ratio.H,
    marginBottom: 20 * Theme.Ratio.H,
  },
})
