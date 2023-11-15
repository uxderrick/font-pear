import React from "react";
import { useState, useEffect } from "react";
import { Flex, Box, Text, Button, Select } from "@radix-ui/themes";
import { DownloadIcon } from "@radix-ui/react-icons";

const H2_Text_block = ({ fontFamilies }) => {
  const [selectedFontFamily, setSelectedFontFamily] = useState("Inter");

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
                defaultValue="Inter"
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
              <Select.Root defaultValue="large">
                <Select.Trigger
                  variant="ghost"
                  style={{
                    color: "#7F7F7F",
                  }}
                />
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="extra-large">Extra Large</Select.Item>
                    <Select.Item value="large">Large</Select.Item>
                    <Select.Item value="small">Small</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
            <Flex>
              <Select.Root defaultValue="bold">
                <Select.Trigger
                  variant="ghost"
                  style={{
                    color: "#7F7F7F",
                  }}
                />
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="bold">Bold</Select.Item>
                    <Select.Item value="semi-bold">Semi-Bold</Select.Item>
                    <Select.Item value="regular">Regular</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
          </Flex>

          {/* <Text className="download">
            <a
              href={`https://fonts.google.com/specimen/${selectedFontFamily.replace(
                " ",
                "+"
              )}`}
              target="_blank"
            >
              Download {selectedFontFamily}
            </a>
          </Text> */}

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
            fontSize: "20px",
            fontWeight: "400",
            fontStyle: "normal",
            color: "#5D5D5D",
            lineHeight: "32px",
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
