import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, RoundedIcon, Theme, Text } from "../../components";
import { HomeRoutes } from "../../components/Navigation";

export interface DrawerItemProps {
  icon: string;
  label: string;
  screen?: keyof HomeRoutes;
  color: keyof Theme["colors"];
  onPress?: (navigation: any) => any;
}

const DrawerItem = ({ icon, label, color, screen }: DrawerItemProps) => {
  const theme = useTheme<Theme>();
  const { navigate } = useNavigation<
    DrawerNavigationProp<HomeRoutes, "OutfitIdeas">
  >();

  return (
    <RectButton
      style={{ borderRadius: theme.borderRadii.s }}
      onPress={() => navigate(screen as keyof HomeRoutes)}
    >
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          name={icon}
          backgroundColor={color}
          color="white"
          size={36}
          iconRatio={0.6}
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
