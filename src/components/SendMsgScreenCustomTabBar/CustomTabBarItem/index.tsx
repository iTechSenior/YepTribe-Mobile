import * as React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Theme } from '../../../theme'

interface Props {
  index: number
  focused: boolean
  routeName: string
  onPress: any
}

const CustomTabBarIcon = (props: Props) => {
  const onSelect = (routeTo: string) => {
    props.onPress(routeTo)
  }

  const { focused, routeName } = props
  return (
    <TouchableWithoutFeedback onPress={() => onSelect(routeName)}>
      <View style={styles.container}>
        <Text style={[styles.textStyle, focused ? styles.textActive : styles.textStyle]}>{routeName}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CustomTabBarIcon

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textActive: {
    color: '#212529',
  },
  textStyle: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    color: '#8A8A8F',
    fontSize: 17 * Theme.Ratio.H,
  },
})
