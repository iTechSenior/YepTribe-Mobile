import React from 'react'
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Video from 'react-native-video'
import { useNavigationParam } from 'react-navigation-hooks'

import NavHeader from '../../../../components/navHeader'

const VideoPlayScreen = () => {
  const videoUrl = useNavigationParam('videoS3Url')
  console.log('video Url', videoUrl)

  const [state, setState] = React.useState({
    repeat: false,
    rate: 1,
    volumn: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: false,
    rateText: '1.0',
    pausedText: 'Play',
    hideControls: false,
  })

  const onEnd = () => {}
  const onProgress = () => {}
  const onLoad = () => {}

  const handlePressVideo = () => {
    setState({ ...state, paused: !state.paused })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <NavHeader type="normal" />
      <View style={styles.mainContainer}>
        <Video
          source={{
            uri: `${videoUrl}`,
          }}
          // repeat={state.repeat}
          // rate={state.rate}
          // volumn={state.volumn}
          // muted={state.muted}
          // resizeMode="contain"
          // paused={state.paused}
          controls={true}
          // onLoad={() => onLoad()}
          // onProgress={() => onProgress()}
          // onEnd={() => onEnd()}
          style={StyleSheet.absoluteFill}
        />
      </View>
    </SafeAreaView>
  )
}

export default VideoPlayScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
