import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Container, Text, Button, CloseButton } from "../components";
import { Routes, StackNavigationProps } from "../components/Navigation";

interface PasswordChangedProps {}

const SIZE = 80;
const PasswordChanged = ({
  navigation,
}: PasswordChangedProps & StackNavigationProps<Routes, "PasswordChanged">) => {
  return (
    <Container
      footer={
        <Box flexDirection="row" justifyContent="center">
          <CloseButton onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box justifyContent="center" flex={1} alignItems="center">
        <Box
          backgroundColor="primaryLight"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
          justifyContent="center"
          alignItems="center"
          marginBottom="m"
        >
          <Text color="primary" textAlign="center">
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Password changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter email address associated with account
        </Text>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={() => navigation.navigate("Login")}
            label="Reset Password"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
