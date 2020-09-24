import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import { CommonActions } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { useTheme } from "@shopify/restyle";
import { Box, RoundedIconButton, Text } from "../../components";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favorite Outfits",
    screen: "FavoriteOutfits",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    screen: "NotificationSettings",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    onPress: (navigation) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Authentication" }],
        })
      ),
    color: "secondary",
  },
];

const Drawer = ({}: DrawerContentComponentProps<DrawerContentOptions>) => {
  // const insets = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          style={{ ...StyleSheet.absoluteFillObject, paddingTop: 44 }}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
          flexDirection="row"
          justifyContent="space-between"
          paddingHorizontal="m"
        >
          <RoundedIconButton
            name="x"
            color="white"
            onPress={() => true}
            backgroundColor="secondary"
            size={24}
          />
          <Text color="white">MY PROFILE</Text>
          <RoundedIconButton
            name="shopping-bag"
            color="white"
            onPress={() => true}
            backgroundColor="secondary"
            size={24}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box flex={1} backgroundColor="primary" />
        <Box
          style={{ ...StyleSheet.absoluteFillObject }}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
            style={{
              ...StyleSheet.absoluteFillObject,
              borderRadius: 50,
              top: -50,
              left: DRAWER_WIDTH / 2 - 50,
            }}
            backgroundColor="primary"
            width={100}
            height={100}
            alignSelf="center"
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              Mike Peter
            </Text>
            <Text variant="body" textAlign="center">
              mike@flexinstudio.com
            </Text>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.61}
      >
        <Image
          source={require("../../components/assets/patterns/1.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            borderTopLeftRadius: 75,
            width: undefined,
            height: undefined,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
