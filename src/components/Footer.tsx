import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from ".";
import SocialLogin from "../Authentication/components/SocialLogin";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginVertical="m">
        <RectButton {...{ onPress }}>
          <Text variant="button" color="white">
            <Text>{`${title} `}</Text>
            <Text variant="button" color="primary" marginLeft="s">
              {`${action}`}
            </Text>
          </Text>
        </RectButton>
      </Box>
    </>
  );
};

export default Footer;
