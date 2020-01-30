import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'
import { useGetYepPlaylistByIdWithVideosQuery, Video } from '../../../../graphql'

import NavHeader from '../../../../components/navHeader'
import { Theme } from '../../../../theme'

import PlayIcon from '../../../../assets/Icons/Training/play.png'

interface IState {
  id: string | undefined | null
  title: string
  description: string | undefined | null
  trainer: string | undefined | null
  thumbnailUrl: string | undefined | null
  videoS3Url: string | undefined | null
}

const VideoDetailScreen = () => {
  const id = useNavigationParam('id')
  const { loading, data } = useGetYepPlaylistByIdWithVideosQuery({
    fetchPolicy: 'network-only',
    variables: { id },
  })

  const [thumbVideoDetail, setThumbVideoDetail] = React.useState<IState>({
    id: '',
    title: '',
    description: '',
    trainer: '',
    thumbnailUrl: '',
    videoS3Url: '',
  })
  const [playlistVideos, setPlaylistVideos] = React.useState<Array<Partial<Video>>>([])

  const navigation = useNavigation()

  React.useEffect(() => {
    if (!loading && data) {
      setPlaylistVideos(data.getYepPlaylistByIdWithVideos.videos)

      const { id, title, description, trainer, thumbnailUrl } = data.getYepPlaylistByIdWithVideos.playlist
      const { videoS3Url } = data.getYepPlaylistByIdWithVideos.videos[0]
      if (thumbVideoDetail.id === '') {
        setThumbVideoDetail({
          id,
          title,
          description,
          trainer,
          thumbnailUrl,
          videoS3Url,
        })
      }
    }
  })

  const onClickRelatedVideoListThumb = (item: Partial<Video>) => {
    const { id, videoTitle, description, trainer, videoThumbnailUrl, videoS3Url } = item
    // console.log('item', item)
    setThumbVideoDetail({ ...thumbVideoDetail, id, title: videoTitle!, description, trainer, thumbnailUrl: videoThumbnailUrl, videoS3Url })
  }

  const onClickPlayVideoBtn = () => {
    navigation.navigate('VideoPlayScreen', { videoS3Url: thumbVideoDetail.videoS3Url })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <NavHeader type="normal" />
      <ScrollView>
        <View style={styles.mainContainer}>
          {!loading && data && !!thumbVideoDetail.thumbnailUrl && (
            <>
              <Image source={{ uri: thumbVideoDetail.thumbnailUrl }} style={styles.thumbImage} />
              <TouchableOpacity style={styles.playBtn} onPress={() => onClickPlayVideoBtn()}>
                <Image source={PlayIcon} style={styles.playImg} />
                <Text style={styles.btnText}>Play</Text>
              </TouchableOpacity>
              <Text style={styles.titleText}>{thumbVideoDetail.title}</Text>
              <Text style={styles.trainerText}>{thumbVideoDetail.trainer}</Text>
              <Text style={styles.descText}>{thumbVideoDetail.description}</Text>
              <View style={styles.sameCategoryList}>
                <Text style={styles.categoryListHeaderText}>Videos in this Training</Text>
                {playlistVideos.map((item: Partial<Video>, index: number) => (
                  <View key={index} style={styles.listItemWrapper}>
                    <View style={styles.listItemThumbViewWrapper}>
                      <TouchableOpacity style={styles.listItemThumbWrapper} onPress={() => onClickRelatedVideoListThumb(item)}>
                        <Image source={{ uri: `${item.videoThumbnailUrl}` }} style={styles.listItemThumbImg} />
                      </TouchableOpacity>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.listItemTitleText}>{item.videoTitle}</Text>
                      </View>
                    </View>
                    <Text style={styles.listItemDescText}>{item.description}</Text>
                  </View>
                ))}
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  thumbImage: {
    width: '100%',
    aspectRatio: 3 / 2,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  playBtn: {
    flexDirection: 'row',
    width: '100%',
    height: 54 * Theme.Ratio.H,
    marginBottom: 20 * Theme.Ratio.H,
    borderRadius: 5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 16 * Theme.Ratio.H,
    color: 'white',
    textAlign: 'center',
  },
  titleText: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 18 * Theme.Ratio.H,
    color: 'white',
  },
  descText: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 16 * Theme.Ratio.H,
    color: 'white',
  },
  trainerText: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 16 * Theme.Ratio.H,
    color: 'white',
  },
  playImg: {
    width: 18 * Theme.Ratio.H,
    height: 18 * Theme.Ratio.H,
    marginRight: 15 * Theme.Ratio.H,
  },
  sameCategoryList: {
    paddingTop: 20 * Theme.Ratio.H,
  },
  categoryListHeaderText: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 18 * Theme.Ratio.H,
    color: 'white',
    marginBottom: 10 * Theme.Ratio.H,
  },
  listItemWrapper: {
    marginBottom: 20 * Theme.Ratio.H,
  },
  listItemThumbViewWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listItemThumbWrapper: {
    marginRight: 10 * Theme.Ratio.H,
  },
  listItemThumbImg: {
    width: 150 * Theme.Ratio.H,
    aspectRatio: 3 / 2,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  listItemTitleText: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 14 * Theme.Ratio.H,
    color: 'white',
  },
  listItemDescText: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 14 * Theme.Ratio.H,
    color: 'grey',
  },
})

export default VideoDetailScreen
