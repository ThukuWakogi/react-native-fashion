import { createBox, createText, createTheme } from '@shopify/restyle'

const theme = createTheme({
  colors: {
    primary: '#2CB9B0',
    title: '#0C0D34',
    text: 'rgba(12, 13, 52, 0.7)',
    white: 'white',
    grey: 'rgba(12, 13, 52, 0.05)',
    lightGrey: '#F4F0EF',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: 'SFProText-Bold',
      color: "white",
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFProText-Semibold',
      color: "title",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFProText-Semibold',
      color: "title",
    },
    body: {
      fontSize: 24,
      lineHeight: 24,
      fontFamily: 'SFProText-Regular',
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProText-Medium",
      color: 'text',
    }
  }
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;