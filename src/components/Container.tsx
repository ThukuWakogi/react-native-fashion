import React, { ReactNode } from "react";
import { Image, Dimensions, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import theme, { Box } from "./Theme";

const { width } = Dimensions.get("window");

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

export const assets = [require("./assets/patterns/1.png")];

const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar
        barStyle="light-content"
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
            source={assets[0]}
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
          source={assets[0]}
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
        >
          {children}
        </Box>
      </Box>
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
        <Box />
      </Box>
    </Box>
  );
};

export default Container;
