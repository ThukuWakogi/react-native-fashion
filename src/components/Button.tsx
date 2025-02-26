import React from "react";
import { StyleSheet, ViewStyle, StyleProp } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import { Theme, Text } from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {},
});

interface ButtonProps {
  variant: "default" | "primary";
  label?: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const Button = ({
  variant = "default",
  label,
  onPress,
  containerStyle,
}: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.grey;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }, containerStyle]}
      {...{ onPress }}
    >
      <Text variant="button" style={[{ color }]}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
