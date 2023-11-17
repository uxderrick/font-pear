import React from "react";
import { useState, useEffect } from "react";
import { Flex, Box, Text, Button, Select } from "@radix-ui/themes";
import { DownloadIcon } from "@radix-ui/react-icons";

const H2_Text_block = ({
  fontFamilies,
  theme,
  randomClicked,
  setRandomClicked,
}) => {
  const [selectedFontFamily, setSelectedFontFamily] = useState("Inter");
  const [selectedFontSize, setSelectedFontSize] = useState("24px");
  const [selectedFontWeight, setSelectedFontWeight] = useState("400");
  const [randomFamily, setRandomFamily] = useState("");

  //randomize font whem random button is clicked
  useEffect(() => {
    if (randomClicked === true) {
      const randomFontFamily =
        fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
      setRandomFamily(randomFontFamily);
      setSelectedFontFamily(randomFontFamily);
    }
  }, [randomClicked, fontFamilies, setRandomClicked]);

  return (
    <>
      {/* Title block */}
      <Flex direction="column" className="block-gap" gap="4">
        <Flex
          justify={{
            initial: "between",
            xs: "between",
            sm: "between",
            lg: "between",
            xl: "between",
          }}
          gap={{
            initial: "3",
            xs: "3",
            sm: "3",
            lg: "",
            xl: "",
          }}
          align="center"
          wrap="wrap"
        >
          <Flex direction="row" gap="7">
            <Flex>
              <Select.Root
                value={randomClicked ? selectedFontFamily : selectedFontFamily}
                onValueChange={(value) => setSelectedFontFamily(value)}
              >
                <Select.Trigger
                  variant="ghost"
                  style={{
                    color: "#7F7F7F",
                  }}
                />
                <Select.Content>
                  <Select.Group>
                    {fontFamilies.map((family) => (
                      <Select.Item
                        value={family}
                        key={family}
                        style={{
                          fontFamily: `${family}`,
                        }}
                      >
                        {family}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
            <Flex>
              <Select.Root
                defaultValue="24px"
                onValueChange={(value) => setSelectedFontSize(value)}
              >
                <Select.Trigger
                  variant="ghost"
                  style={{
                    color: "#7F7F7F",
                  }}
                />
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="28px">28px</Select.Item>
                    <Select.Item value="24px">24px</Select.Item>
                    <Select.Item value="16px">16px</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
            <Flex>
              <Select.Root
                defaultValue="400"
                onValueChange={(value) => setSelectedFontWeight(value)}
              >
                <Select.Trigger
                  variant="ghost"
                  style={{
                    color: "#7F7F7F",
                  }}
                />
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="700">Bold</Select.Item>
                    <Select.Item value="400">Regular</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
          </Flex>

          <DownloadIcon
            className="link"
            height="20"
            width="20"
            onClick={
              //open font download page
              () => {
                window.open(
                  `https://fonts.google.com/specimen/${selectedFontFamily.replace(
                    " ",
                    "+"
                  )}`,
                  "_blank"
                );
              }
            }
          ></DownloadIcon>
        </Flex>

        <Text
          style={{
            fontFamily: `${selectedFontFamily}`,
            fontSize: `${selectedFontSize}`,
            fontWeight: `${selectedFontWeight}`,
            fontStyle: "normal",
            color: theme === "light" ? "gray" : "#E9E9E9",
            maxWidth: "900px",
          }}
        >
          We need to aspirationalise our offerings please submit the sop and uat
          files by next monday, window of opportunity. Staff engagement make
          sure to include in your wheelhouse, but land the plane price point, or
          work flows can you slack it to me?. Scope creep we have put the apim
          bol, temporarily so that we can later put the monitors on.
        </Text>
      </Flex>
    </>
  );
};

export default H2_Text_block;
