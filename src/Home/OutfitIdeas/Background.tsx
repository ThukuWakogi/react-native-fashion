import React from "react";
import { useTheme } from "@shopify/restyle";
import { Image, StyleSheet } from "react-native";
import { Box, Theme } from "../../components";

const Background = () => {
  const theme = useTheme<Theme>();

  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box flex={1} backgroundColor="white" borderBottomRightRadius="xl" />
      </Box>
      <Box flex={1 / 3} borderTopLeftRadius="xl" overflow="hidden">
        <Box flex={1} backgroundColor="white" />
        <Box flex={1} backgroundColor="secondary" />
        <Image
          source={require("./assets/background.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box
          flex={1}
          backgroundColor="secondary"
          borderTopLeftRadius="xl"
        ></Box>
      </Box>
    </Box>
  );
};

export default Background;
