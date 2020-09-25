import {
  createBox,
  createText,
  createTheme,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

export const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    danger: "#FF0058",
    text: "rgba(12, 13, 52, 0.7)",
    white: "white",
    grey: "rgba(12, 13, 52, 0.05)",
    darkGrey: "#8A8D90",
    black: "#000",
    primaryLight: "#E7f9f7",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    violet: "#442CB9",
    lightGrey: "#FAFAFA",
    lightBlue: "#BFEAF5",
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
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-Semibold",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-Semibold",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProText-Medium",
      color: "text",
    },
    header: {
      fontSize: 12,
      fontFamily: "SFProText-Semibold",
      lineHeight: 24,
      color: "secondary",
    },
  },
});
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
export default theme;
