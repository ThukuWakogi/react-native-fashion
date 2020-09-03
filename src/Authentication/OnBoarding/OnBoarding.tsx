import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Animated, { multiply } from 'react-native-reanimated'
import Slide, { SLIDE_HEIGHT } from './Slide'
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash'
import Subslide from './Subslide'

const { useRef } = React

const BORDER_RADIUS = 75
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
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS
  }
})

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find your outfits",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#BFEAF5"
  },
  {
    title: "Playful",
    subtitle: "Hear it first, Wear it first",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "#BEECC4"
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your way",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    color: "#FFE4D9"
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    color: "#FFDDDD"
  },
]

const OnBoarding = () => {
  const scroll = useRef<Animated.ScrollView>(null)
  const x = useValue(0)
  const onScroll = onScrollEvent({ x })
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
          scrollEventThrottle={1}
          {...{onScroll}}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{title}}/>
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor }} />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }]
            }
          ]}
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
  )
}

export default OnBoarding
