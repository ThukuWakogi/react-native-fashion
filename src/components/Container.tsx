import React, { ReactNode } from "react";
import { useTheme } from "@shopify/restyle";
import { Image, Dimensions, StyleSheet, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Box, Theme } from "./Theme";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

const { width, height: wHeight } = Dimensions.get("window");

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}

export const assets = [
  require("./assets/patterns/1.png"),
  require("./assets/patterns/2.png"),
  require("./assets/patterns/3.png"),
] as const;

const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

const Container = ({ children, footer, pattern = 0 }: ContainerProps) => {
  const theme = useTheme<Theme>();
  const asset = assets[pattern];

  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box
        height={
          wHeight +
          (Platform.OS === "android" ? Constants.statusBarHeight + 10 : 0)
        }
        backgroundColor="secondary"
      >
        <StatusBar
          // barStyle="light-content"
          style="light"
          translucent
          backgroundColor="transparent"
        />
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
            flex={1}
            justifyContent="center"
            padding="xl"
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor="secondary" paddingTop="m">
          {footer}
          <Box />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
