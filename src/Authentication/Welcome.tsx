import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import { useTheme, Box, Text, Button } from "../components";
import { StackNavigationProps, Routes } from "../components/Navigation";

const { width } = Dimensions.get("window");

const picture = {
  src: require("./assets/5.png"),
  width: 3383,
  height: 5074,
};
export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
        >
          <Box
            backgroundColor="white"
            borderTopLeftRadius="xl"
            flex={1}
            justifyContent="space-evenly"
            alignItems="center"
            padding="xl"
          >
            <Text variant="title2">Let's get started</Text>
            <Text variant="body" textAlign="center">
              Login to your account below or signup for an amazing experience.
            </Text>
            <Button
              variant="primary"
              label="Have an account? Login"
              onPress={() => navigation.navigate("Login")}
            />
            <Button label="Join us, it's free" onPress={() => {}} />
            <Button
              variant="transparent"
              label="Forgot password"
              onPress={() => {}}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
