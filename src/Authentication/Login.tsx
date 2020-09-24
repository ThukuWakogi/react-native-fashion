import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput } from "react-native";
import { Box, Button, Container, Text } from "../components";
import TextInput from "../components/Form/TextInput";
import Checkbox from "../components/Form/Checkbox";
import Footer from "../components/Footer";
import { Routes, StackNavigationProps } from "../components/Navigation";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const password = useRef<RNTextInput>(null);
  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate("SignUp")}
    />
  );
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    onSubmit: (values) => console.log(values),
    validationSchema: LoginSchema,
  });

  return (
    <Container {...{ footer }}>
      <Box padding="l">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            error={errors.email}
            touched={touched.email}
            autoCompleteType="email"
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => password.current?.focus()}
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Enter your password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={errors.password}
            touched={touched.password}
            secureTextEntry
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>
        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox
            label="Remember Me"
            checked={values.remember}
            onChange={() => setFieldValue("remember", !values.remember)}
          />
          <Button
            variant="transparent"
            onPress={() => navigation.navigate("ForgotPassword")}
          >
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
      </Box>
    </Container>
  );
};

export default Login;
