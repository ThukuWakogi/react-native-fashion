import React from "react";
import { Box, Button, Container, Text } from "../../components";
import SocialLogin from "../components/SocialLogin";

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
      <></>
    </Container>
  );
};

export default Login;
