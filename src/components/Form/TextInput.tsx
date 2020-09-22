import React from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Box, useTheme } from "..";
import { Feather as Icon } from "@expo/vector-icons";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = ({ icon, touched, error, ...props }: TextInputProps) => {
  const theme = useTheme();
  const color = !touched ? "text" : error ? "danger" : "primary";
  const SIZE = theme.borderRadii.m * 2;

  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderColor={color}
      borderWidth={StyleSheet.hairlineWidth}
      padding="s"
    >
      <Box padding="s">
        <Icon name={icon} size={16} color={theme.colors[color]} />
      </Box>
      <RNTextInput
        underlineColorAndroid="transparent"
        placeholderTextColor={theme.colors[color]}
        {...props}
        style={{ flex: 1 }}
      />
      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          style={{ borderRadius: 27 }}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={!error ? "primary" : "danger"}
        >
          <Icon name={!error ? "check" : "x"} color="white" size={16} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
