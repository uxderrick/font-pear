import React, { useEffect, useState } from "react";
import { Flex, Box, Text, Button, Select } from "@radix-ui/themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import H1_Text_block from "../../component/H1_Text_block";
import H2_Text_block from "../../component/H2_Text_block";
import axios from "axios";

const home = () => {
  // State to store font family names
  const [fontFamilies, setFontFamilies] = useState([]);
  const [theme, setTheme] = useState("light");
  const [randomClicked, setRandomClicked] = useState(false);
  const [fontCategory, setFontCategory] = useState("sans-serif");

  const API_KEY = "AIzaSyBBDW8L4--iso9JAMOrpytPOLIOPRdCLR4";

  const randomize = () => {
    //if random button is clicked, set randomClicked to true.
    randomClicked === true ? setRandomClicked(false) : setRandomClicked(true);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

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
                "serif" ||
                "display" ||
                // "handwriting" ||
                "monospace"
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

  //html body background color
  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "#fff" : "#0d0d0d";
  }, [theme]);

  //
  return (
    <>
      <Box
        className="box "
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
        style={{
          // backgroundColor: theme === "light" ? "#fff" : "#0d0d0d",
        }}
      >
        <Flex className="layout " gap="9" justify="between" direction="column">
          {/* Header block */}
          <Flex justify="between" align="center">
            <img
              src="https://github.com/uxderrick/font-pear/blob/main/src/assets/Logo.png?raw=true"
              alt="logo"
              width="100"
            />

            <Flex gap="5" align="center">
              <Button onClick={randomize}>Randomize</Button>

              {theme === "light" ? (
                <MoonIcon
                  height="25"
                  width="25"
                  onClick={toggleTheme}
                  className="mouse "
                ></MoonIcon>
              ) : (
                <SunIcon
                  height="25"
                  width="25"
                  onClick={toggleTheme}
                  className="mouse "
                  color="white"
                ></SunIcon>
              )}
            </Flex>
          </Flex>

          <Flex direction="column" gap="5">
            <H1_Text_block
              fontFamilies={fontFamilies}
              key="h1"
              theme={theme}
              randomClicked={randomClicked}
              setRandomClicked={setRandomClicked}
            ></H1_Text_block>
            <H2_Text_block
              fontFamilies={fontFamilies}
              key="h2"
              theme={theme}
              randomClicked={randomClicked}
            ></H2_Text_block>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default home;
