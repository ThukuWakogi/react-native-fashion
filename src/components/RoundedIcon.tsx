import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
// @ts-ignore
import { Box, Theme, Text } from "./Theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio?: number;
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio = 0.7,
}: RoundedIconProps) => {
  const theme = useTheme<Theme>();
  const iconSize = size * iconRatio;

  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      {/* <Text
        style={{ width: iconSize, height: iconSize }}
        textAlign="center"
        {...{ color }}
      > */}
      <Icon
        color={theme.colors[color]}
        size={iconSize}
        style={{ textAlign: "center" }}
        {...{ name }}
      />
      {/* </Text> */}
    </Box>
  );
};

export default RoundedIcon;
