import * as React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import posed from 'react-native-pose'
import { useNavigation, useNavigationState } from 'react-navigation-hooks'
import { Theme } from '../../theme'
import CustomTabBarItem from './CustomTabBarItem'

const SpotLight = posed.View({
  route0: { x: 20 * Theme.Ratio.H },
  route1: { x: 232 * Theme.Ratio.H },
})

const CustomTabBar = () => {
  const { navigate } = useNavigation()
  const routes = useNavigationState().routes
  const navigationState = useNavigationState()
  const { index: activeRouteIndex } = navigationState

  const [widthOfFirstTabItem, setWidthOfFirstTabItem] = React.useState(0)
  const [widthOfSecondTabItem, setWidthOfSecondTabItem] = React.useState(0)

  const getWidthOfTabItem = (layout: any, index: number) => {
    const { width, height } = layout
    if (index === 0) {
      setWidthOfFirstTabItem(width)
    } else {
      setWidthOfSecondTabItem(width)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.spotLightWrapper}>
        <SpotLight
          style={[styles.spotLight, { width: activeRouteIndex === 0 ? widthOfFirstTabItem : widthOfSecondTabItem }]}
          pose={`route${activeRouteIndex}`}
        />
      </View>
      {routes.map((route: { key: string | number | undefined; routeName: string }, index: number) => {
        return (
          <View key={index} style={styles.tabBarItem} onLayout={event => getWidthOfTabItem(event.nativeEvent.layout, index)}>
            <CustomTabBarItem
              key={route.key}
              routeName={route.routeName}
              onPress={() => navigate(route.routeName)}
              focused={navigationState.index === index}
              index={index}
            />
          </View>
        )
      })}
    </View>
  )
}

export default CustomTabBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    height: 37 * Theme.Ratio.H,
    width: '100%',
    paddingLeft: 20 * Theme.Ratio.H,
    backgroundColor: 'white',
    marginBottom: 24 * Theme.Ratio.H,
  },
  spotLightWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 32 * Theme.Ratio.H,
    bottom: 0,
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
  },
  tabBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 56 * Theme.Ratio.H,
  },

  spotLight: {
    height: 5 * Theme.Ratio.H,
    backgroundColor: '#25AAE1',
    borderRadius: 8,
  },
})
