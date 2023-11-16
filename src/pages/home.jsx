import React, { useEffect, useState } from "react";
import { Flex, Box, Text, Button, Select } from "@radix-ui/themes";
import { MoonIcon } from "@radix-ui/react-icons";
import H1_Text_block from "../../component/H1_Text_block";
import H2_Text_block from "../../component/H2_Text_block";
import axios from "axios";

const home = () => {
  // State to store font family names
  const [fontFamilies, setFontFamilies] = useState([]);
  const [theme, setTheme] = useState("light");

  const API_KEY = "AIzaSyBBDW8L4--iso9JAMOrpytPOLIOPRdCLR4";

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`)
      .then((res) => {
        // Filter font families based on category
        const sansSerifFamilies =
          res.data?.items
            ?.filter(
              (item) =>
                item.category === "sans-serif" ||
                item.category === "display" ||
                item.category === "monospace"
            )
            .map((item) => item.family) || [];

        // Set the sans-serif font families in the state
        setFontFamilies(sansSerifFamilies);

        // console.log(sansSerifFamilies);
      })
      .catch((err) => {
        console.error("Error fetching font families:", err);
      });
  }, []);

  useEffect(() => {
    // Check if there are font families to load
    if (fontFamilies.length > 0) {
      // Dynamically create link elements for each font family
      fontFamilies.forEach((family) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `https://fonts.googleapis.com/css?family=${family.replace(
          " ",
          "+"
        )} `;
        document.head.appendChild(link);
      });
    }
  }, [fontFamilies]);

  //
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
            <H1_Text_block fontFamilies={fontFamilies} key="h1"></H1_Text_block>
            <H2_Text_block fontFamilies={fontFamilies} key="h2"></H2_Text_block>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default home;
