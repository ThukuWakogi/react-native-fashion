import React from 'react'
import { View, StyleSheet } from 'react-native'
// import Animated from 'react-native-reanimated'
import { Button } from '../../components'
import { Text } from '../../components/Theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    // fontFamily: 'SFProText-Semibold',
    // fontSize: 24,
    // lineHeight: 30,
    marginBottom: 12,
    color: "#0C0D34",
    textAlign: "center"
  },
  description: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    lineHeight: 25,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,
  }
})

interface SubslideProps {
  description: string
  subtitle: string
  last: boolean
  onPress: () => void
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant='title2' style={styles.subtitle}>{subtitle}</Text>
      <Text variant="body" style={styles.description}>{description}</Text>
      <Button
        label={last ? 'let\'s get started' : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </View>
  )
}

export default Subslide
