import React, { FunctionComponent } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'
import { YepBanner } from '../../graphql'
import { Theme } from '../../theme'

const DashboardCarousel: FunctionComponent<{ data: YepBanner[] }> = ({ data }) => {
  const carouselRef = React.useRef(null)

  const renderItem = ({ item }: { item: YepBanner }) => {
    return (
      <View
        style={{
          // width: Theme.Resolution.W - 40 * Theme.Ratio.H,
          width: 335 * Theme.Ratio.H,
          height: 189 * Theme.Ratio.H,
          // justifyContent: 'center',
        }}
      >
        {/* <ParallaxImage
          source={{ uri: item }}
          containerStyle={{
            // flex: 1,
            height: 200,
            marginBottom: Platform.select({ ios: 0, android: 1 }),
            // backgroundColor: 'white',
            borderRadius: 8,
          }}
          style={{ ...StyleSheet.absoluteFillObject, resizeMode: 'cover' }}
          parallaxFactor={0.2}
          {...parallaxProps}
        /> */}
        {/* <Text>{item}</Text> */}
        <Image
          source={{ uri: item.url }}
          style={{
            width: Theme.Resolution.W - 40 * Theme.Ratio.H,
            height: 189 * Theme.Ratio.H,
            borderRadius: 8,
          }}
        />
      </View>
    )
  }
  return (
    <Carousel
      ref={carouselRef}
      layout={'default'}
      sliderWidth={Theme.Resolution.W}
      sliderHeight={189 * Theme.Ratio.H}
      itemWidth={Theme.Resolution.W - 40 * Theme.Ratio.H}
      data={data}
      renderItem={renderItem}
      loop={true}
      autoplay={true}
      enableMomentum={false}
      lockScrollWhileSnapping={true}
      inactiveSlideScale={0.935}
      // inactiveSlideShift={10}
      inactiveSlideOpacity={0.3}
      // hasParallaxImages={true}
    />
  )
}

export default DashboardCarousel
