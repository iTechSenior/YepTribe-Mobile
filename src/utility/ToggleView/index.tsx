import React, { useEffect, useState } from 'react'
import { Animated, Easing, StyleSheetProperties } from 'react-native'

interface TProps {
  toValue: number
  viewStyles?: StyleSheetProperties
}

const ToggleView: React.FC<TProps> = ({ children, toValue, viewStyles }) => {
  const [state, setState] = useState({
    bounceValue: new Animated.Value(0),
  })

  useEffect(() => {
    Animated.timing(state.bounceValue, {
      toValue,
      duration: 1000,
      easing: Easing.in(Easing.ease),
    }).start()
  }, [])

  const { bounceValue } = state

  return (
    <Animated.View style={{ transform: [{ translateY: bounceValue }] }}>
      {children}
    </Animated.View>
  )
}

export default ToggleView
