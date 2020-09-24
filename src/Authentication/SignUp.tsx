import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput } from "react-native";
import { Box, Button, Container, Text } from "../components";
import TextInput from "../components/Form/TextInput";
import Footer from "../components/Footer";
import { Routes, StackNavigationProps } from "../components/Navigation";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords don't match")
    .required(),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);
  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here!"
      onPress={() => navigation.navigate("Login")}
    />
  );
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: (values) => console.log(values),
    validationSchema: SignUpSchema,
  });

  return (
    <Container {...{ footer }}>
      <Box padding="l">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create Account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Let us know your name email and password
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
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => passwordConfirmation.current?.focus()}
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            ref={passwordConfirmation}
            icon="lock"
            placeholder="Confirm your password"
            onChangeText={handleChange("passwordConfirmation")}
            onBlur={handleBlur("passwordConfirmation")}
            value={values.passwordConfirmation}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            secureTextEntry
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
          />
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

export default SignUp;
