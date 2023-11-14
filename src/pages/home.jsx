import React from "react";
import { Flex, Box, Text, Button, Select } from "@radix-ui/themes";
import { MoonIcon } from "@radix-ui/react-icons";
import H1_Text_block from "../../component/H1_Text_block";
import H2_Text_block from "../../component/H2_Text_block";

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
      >
        <Flex className="layout" gap="9" justify="between" direction="column">
          {/* Header block */}
          <Flex justify="between" align="center">
            <img
              src="https://raw.githubusercontent.com/uxderrick/font-pear/ecbd7cb03c14eedaa1c21c05fafcfba3bc527ccf/src/assets/logo.svg"
              alt="logo"
              width="100"
            />
            <MoonIcon height="25" width="25"></MoonIcon>
          </Flex>
          <Flex direction="column" gap="5">
            <H1_Text_block></H1_Text_block>
            <H2_Text_block></H2_Text_block>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default home;
