import React from "react";
import { Linking } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Container, Text, Button } from "../components";
import Footer from "../components/Footer";
import { Routes, StackNavigationProps } from "../components/Navigation";
import TextInput from "../components/Form/TextInput";

interface ForgotPasswordProps {}

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: ForgotPasswordProps & StackNavigationProps<Routes, "ForgotPassword">) => {
  const footer = (
    <Footer
      title="Don't work?"
      action="Try another way"
      onPress={() => Linking.openURL("mailto:help@support.com")}
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
    },
    onSubmit: () => navigation.navigate("PasswordChanged"),
    validationSchema: ForgotPasswordSchema,
  });

  return (
    <Container {...{ footer }}>
      <Box padding="l" justifyContent="center" flex={1}>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot Password
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter email address associated with account
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
            returnKeyType="go"
            returnKeyLabel="reset"
            onSubmitEditing={() => handleSubmit}
          />
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={handleSubmit}
            label="Reset Password"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
