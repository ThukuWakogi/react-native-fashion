import React from 'react'
import { Text, StyleSheet, ViewStyle, StyleProp } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useTheme } from '@shopify/restyle'
import { Theme } from './Theme'

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontFamily: "SFProText-Regular",
    fontSize: 15,
    textAlign: 'center'
  }
})

interface ButtonProps {
  variant: 'default' | 'primary'
  label: string
  onPress: () => void
  containerStyle?: StyleProp<ViewStyle>
}

const Button = ({ variant, label, onPress, containerStyle }:ButtonProps) => {
  const theme = useTheme<Theme>()
  const backgroundColor = variant === 'primary' ? theme.colors.primary : theme.colors.text
  const color = variant === 'primary' ? theme.colors.white : theme.colors.title
  return (
    <RectButton
      style={[styles.container, { backgroundColor }, containerStyle]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  )
}

Button.defaultProps = { variant: "default" }

export default Button
