import React from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { useGetYepClipsQuery, useGetYepClipsPlaylistsQuery } from '../../../../graphql'

import CategoryView from '../../../../components/CategoryViewList'
import { Theme } from '../../../../theme'

import YepClipsLogo from '../../../../assets/Icons/Training/YepClips-2-1920x520.png'

const CustomizedStatusBar = ({ backgroundColor, barStyle }: { backgroundColor: string; barStyle: any }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent={true} backgroundColor={backgroundColor} barStyle={barStyle} />
  </View>
)

const TrainingScreen = () => {
  const { loading, data } = useGetYepClipsPlaylistsQuery({ variables: { skip: 0, pageSize: 1000, searchText: '' }, fetchPolicy: 'network-only' })
  // console.log('YEPCLIPS', data)
  const navigation = useNavigation()

  const handleThumbnailClick = (id: string | null | undefined) => {
    navigation.navigate('VideoDetailScreen', { id })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#ecf0f1" /> */}

      <View style={styles.mainContainer}>
        <Image style={styles.logoImg} source={YepClipsLogo} />
        <View style={styles.categoryListWrapper}>
          <ScrollView>
            {!loading &&
              data &&
              data.getYepClipsPlaylists.map((item, index) => (
                <CategoryView key={index} categoryData={item} thumbnailClick={(id: string | null | undefined) => handleThumbnailClick(id)} />
              ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TrainingScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20 * Theme.Ratio.H,
  },
  logoImg: {
    width: 250 * Theme.Ratio.H,
    height: 70 * Theme.Ratio.H,
    alignSelf: 'center',
  },
  statusBar: {
    height: 20 * Theme.Ratio.H,
  },
  categoryListWrapper: {
    flex: 1,
    paddingHorizontal: 20 * Theme.Ratio.H,
    paddingTop: 30 * Theme.Ratio.H,
  },
  categoryText: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 20 * Theme.Ratio.H,
    color: 'white',
  },
})
