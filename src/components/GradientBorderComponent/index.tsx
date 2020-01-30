import React, { ReactNode } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Theme } from '../../theme'

const GradientBorderComponent = ({ children }: { children: ReactNode }) => {
  return (
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#D2D2D2', '#FAFAFA', '#FFFFFF']} style={styles.linearGradient}>
      <View style={styles.contentWrapper}>{children}</View>
    </LinearGradient>
  )
}

export default GradientBorderComponent

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingBottom: 1,
  },
  contentWrapper: {
    // height: '100%',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
})
