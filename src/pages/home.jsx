import React from "react";
import { Flex, Box, Text, Button } from "@radix-ui/themes";

const home = () => {
  return (
    <>
      <Box
        className="box"
        px={{
          initial: "5",
          xs: "5",
          sm: "9",
          lg: "9",
          xl: "9",
        }}
        py={{
          initial: "5",
          xs: "5",
          sm: "9",
          lg: "9",
          xl: "9",
        }}
        gap="9"
      >
        <Flex className="layout" gap="9">
          <img
            src="https://raw.githubusercontent.com/uxderrick/font-pear/ecbd7cb03c14eedaa1c21c05fafcfba3bc527ccf/src/assets/logo.svg"
            alt="logo"
          />
          <img
            src="https://raw.githubusercontent.com/uxderrick/font-pear/ecbd7cb03c14eedaa1c21c05fafcfba3bc527ccf/src/assets/logo.svg"
            alt="logo"
          />
        </Flex>
      </Box>
    </>
  );
};

export default home;
