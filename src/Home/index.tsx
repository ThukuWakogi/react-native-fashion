import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer/Drawer";
import OutfitIdeas from "./OutfitIdeas/OutfitIdeas";
import { HomeRoutes } from "../components/Navigation";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={DrawerContent}
    drawerStyle={{ width: DRAWER_WIDTH }}
  >
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
);

export { assets } from "./Drawer";
