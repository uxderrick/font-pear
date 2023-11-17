import React from "react";
import { useState, useEffect } from "react";
import { Flex, Box, Text, Button, Select, TextArea } from "@radix-ui/themes";
import { DownloadIcon } from "@radix-ui/react-icons";

const H1_Text_block = ({
  fontFamilies,
  theme,
  randomClicked,
  setRandomClicked,
}) => {
  //
  const [selectedFontFamily, setSelectedFontFamily] = useState("Inter Tight");
  const [selectedFontSize, setSelectedFontSize] = useState("80px");
  const [selectedFontWeight, setSelectedFontWeight] = useState("700");
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

  //
  return (
    <>
      {/* Title block */}
      <Flex direction="column" className="block-gap " gap="4">
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
            sm: "",
            lg: "",
            xl: "",
          }}
          align="center"
          wrap="wrap"
          className=""
        >
          <Flex direction="row" gap="7" className="">
            <Flex className="">
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
                defaultValue="80px"
                onValueChange={(value) => setSelectedFontSize(value)}
              >
                <Select.Trigger
                  className=""
                  variant="ghost"
                  style={{
                    color: "#7F7F7F",
                  }}
                />
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="100px">100px</Select.Item>
                    <Select.Item value="80px">80px</Select.Item>
                    <Select.Item value="60px">60px</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
            <Flex>
              <Select.Root
                defaultValue="700"
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
            className="link "
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
          className=""
          style={{
            fontFamily: `${selectedFontFamily}`,
            fontSize: `${selectedFontSize}`,
            fontWeight: `${selectedFontWeight}`,
            color: theme === "light" ? "#0d0d0d" : "white",
            lineHeight: "1.2",
          }}
        >
          This is the title
        </Text>
      </Flex>
    </>
  );
};

export default H1_Text_block;
