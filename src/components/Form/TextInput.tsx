import React, { useState } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Box, theme } from "..";
import { Feather as Icon } from "@expo/vector-icons";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  validator: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [state, setState] = useState<InputState>(Pristine);
  const [input, setInput] = useState("");
  const color =
    state === Pristine ? "text" : state === Valid ? "primary" : "danger";
  const validate = () => setState(validator(input));
  const onChangeText = (text: string) => {
    if (state !== Pristine) {
      validate();
    }
    setInput(text);
  };

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
        onBlur={validate}
        {...{ onChangeText }}
        value={input}
      />
      {(state === Valid || state === Invalid) && (
        <Box
          height={SIZE}
          width={SIZE}
          style={{ borderRadius: 27 }}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={state === Valid ? "primary" : "danger"}
        >
          <Icon
            name={state === Valid ? "check" : "x"}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
