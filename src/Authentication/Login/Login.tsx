import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Text } from "../../components";
import TextInput from "../../components/Form/TextInput";
import SocialLogin from "../components/SocialLogin";
import Checkbox from "../../components/Form/Checkbox";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

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
        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          onSubmit={(values) => console.log(values)}
          validationSchema={LoginSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter your email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <Box marginBottom="m">
                <TextInput
                  icon="lock"
                  placeholder="Enter your password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                />
              </Box>
              <Box flexDirection="row" justifyContent="space-between">
                <Checkbox
                  label="Remember Me"
                  checked={values.remember}
                  onChange={() => setFieldValue("remember", !values.remember)}
                />
                <Button variant="transparent" onPress={() => true}>
                  <Text color="primary">Forgot password</Text>
                </Button>
              </Box>
              <Box alignItems="center">
                <Button
                  variant="primary"
                  onPress={handleSubmit}
                  label="Log into your account"
                />
              </Box>
            </>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
