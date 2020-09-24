import React from "react";
import {
  Box,
  Container,
  Text,
  Button,
  RoundedIconButton,
  RoundedIcon,
} from "../components";
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from "../components/Navigation";

interface PasswordChangedProps {}

const SIZE = 80;
const PasswordChanged = ({
  navigation,
}: PasswordChangedProps &
  StackNavigationProps<AuthenticationRoutes, "PasswordChanged">) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center" paddingVertical="s">
          <RoundedIconButton
            backgroundColor="white"
            color="secondary"
            name="x"
            size={60}
            onPress={() => navigation.pop()}
          />
          {/* <CloseButton onPress={() => navigation.pop()} /> */}
        </Box>
      }
    >
      <Box justifyContent="center" flex={1} alignItems="center">
        <RoundedIcon
          name="check"
          size={SIZE}
          backgroundColor={"primaryLight"}
          color="primary"
        />
        {/* <Box
          backgroundColor="primaryLight"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
          justifyContent="center"
          alignItems="center"
          marginBottom="m"
        >
          <Text color="primary" textAlign="center">
            <Icon name="check" size={32} />
          </Text>
        </Box> */}
        <Text variant="title1" textAlign="center" marginVertical="l">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Close this window and login again
        </Text>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={() => navigation.navigate("Login")}
            label="Login again"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
