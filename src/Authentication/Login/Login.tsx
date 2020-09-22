import React from "react";
import { Box, Button, Container, Text } from "../../components";
import TextInput from "../../components/Form/TextInput";
import SocialLogin from "../components/SocialLogin";
import Checkbox from "../../components/Form/Checkbox";

const emailValidator = (email: string) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
const passwordValidator = (password: string) => password.length >= 6;

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button
          variant="transparent"
          onPress={() => {
            alert("SignUp!");
          }}
        >
          <Box flexDirection="row" justifyContent="center" flex={0}>
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text variant="button" color="primary" marginLeft="s">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <Box padding="l">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center">
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            validator={emailValidator}
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="lock"
            placeholder="Enter your password"
            validator={passwordValidator}
          />
        </Box>
        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox label="Remember Me" />
          <Button variant="transparent" onPress={() => true}>
            <Text color="primary">Forgot password</Text>
          </Button>
        </Box>
        <Box alignItems="center">
          <Button
            variant="primary"
            onPress={() => {}}
            label="Log into your account"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
