import { useTheme } from "@shopify/restyle";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, RoundedIcon, Theme, Text } from "../../components";

export interface DrawerItemProps {
  icon: string;
  label: string;
  screen?: string;
  color: keyof Theme["colors"];
  onPress?: (navigation: any) => any;
}

const DrawerItem = ({ icon, label, color }: DrawerItemProps) => {
  const theme = useTheme<Theme>();

  return (
    <RectButton style={{ borderRadius: theme.borderRadii.s }}>
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
