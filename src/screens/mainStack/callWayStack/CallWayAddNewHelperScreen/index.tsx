import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.MainContainer}>
      <Text style={{ fontSize: 23 }}> Home </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
})

export default HomeScreen
