import React from "react";
import {
  CommonActions,
  // @ts-ignore
  DrawerActions,
  // @ts-ignore
  useNavigation,
} from "@react-navigation/native";
import { Dimensions, StyleSheet, Image } from "react-native";
// import { useTheme } from "@shopify/restyle";
import { Box, Header, Text } from "../../components";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";
// import { useSafeAreaInsets } from "react-native-safe-area-context/lib/typescript/src/SafeAreaContext";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
export const assets = [require("./assets/drawer.png")];
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
    screen: "FavoriteOutfits",
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
    screen: "FavoriteOutfits",
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

const Drawer = () => {
  const navigation = useNavigation();
  // const insets = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          style={{ ...StyleSheet.absoluteFillObject }}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <Header
            left={{ icon: "x", onPress: () => {} }}
            title="menu"
            right={{
              icon: "shopping-bag",
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
            }}
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        {/* <Box flex={1} backgroundColor="primary" /> */}
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
            <DrawerItem key={item.icon} {...item} />
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
          source={assets[0]}
          style={{
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: 70,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
