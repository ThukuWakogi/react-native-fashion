import React, { forwardRef } from "react";
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

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, touched, error, ...props }, ref) => {
    const theme = useTheme();
    const color = !touched ? "text" : error ? "danger" : "primary";
    const SIZE = theme.borderRadii.m * 2.4;

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
          {...{ ref }}
        />
        {touched && (
          <Box
            height={SIZE}
            width={SIZE}
            style={{ borderRadius: SIZE / 2 }}
            justifyContent="center"
            alignItems="center"
            backgroundColor={!error ? "primary" : "danger"}
          >
            <Icon
              name={!error ? "check" : "x"}
              color="white"
              size={16}
              style={{ textAlign: "center" }}
            />
          </Box>
        )}
      </Box>
    );
  }
);

export default TextInput;
