import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RoundedIconButton from "./RoundedIconButton";
import { Text, Box } from "./Theme";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right: {
    icon: string;
    onPress: () => void;
  };
  dark?: boolean;
}

const Header = ({ left, title, right, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "secondary";
  const backgroundColor = dark ? "secondary" : "white";
  return (
    <Box
      flexDirection="row"
      style={{ marginTop: insets.top }}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
    >
      <RoundedIconButton
        name={left.icon}
        onPress={left.onPress}
        size={44}
        {...{ color, backgroundColor }}
        iconRatio={0.4}
      />
      <Text variant="header" {...{ color }}>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        onPress={right.onPress}
        size={44}
        iconRatio={0.4}
        {...{ color, backgroundColor }}
      />
    </Box>
  );
};

export default Header;
