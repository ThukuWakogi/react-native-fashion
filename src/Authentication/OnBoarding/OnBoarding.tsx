import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Animated, { divide, multiply } from 'react-native-reanimated'
import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from './Slide'
import { interpolateColor, useScrollHandler } from 'react-native-redash'
import Subslide from './Subslide'
import Dot from './Dot'

const { useRef } = React
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS
  },
  footer: {
    flex: 1 
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find your outfits",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#BFEAF5",
    picture: require('./assets/1.png'),
  },
  {
    title: "Playful",
    subtitle: "Hear it first, Wear it first",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "#BEECC4",
    picture: require('./assets/2.png'),
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your way",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    color: "#FFE4D9",
    picture: require('./assets/3.png'),
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    color: "#FFDDDD",
    picture: require('./assets/4.png'),
  },
]

const OnBoarding = () => {
  const scroll = useRef<Animated.ScrollView>(null)
  const { scrollHandler, x } = useScrollHandler()
  const backgroundColor = interpolateColor(
    x,
    {
      inputRange: slides.map((_, i) => i * width),
      outputRange: slides.map(slide => slide.color)
    })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }}/>
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor
          }}
        />
        <View
          style={styles.footerContent}
        >
          <View style={styles.pagination}>
            {slides.map((_, index) => <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />)}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }]
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                onPress={() => {
                  if (scroll.current)
                    scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true})
                }}
                last={index === slides.length - 1}
                {...{ subtitle, description }}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  )
}

export default OnBoarding
