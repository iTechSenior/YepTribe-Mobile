import React, { ReactNode, useEffect, useState } from 'react'
import { Animated, Easing } from 'react-native'
import { Theme } from '../../theme'

function FadeInView({ children }: { children: ReactNode }) {
  const [state] = useState({
    fadeAnim: new Animated.Value(0),
  })

  useEffect(() => {
    Animated.timing(state.fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.in(Easing.ease),
    }).start()
  }, [])

  const { fadeAnim } = state

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  )
}

export default FadeInView
