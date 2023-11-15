import React from "react";
import { useState, useEffect } from "react";
import { Flex, Box, Text, Button, Select } from "@radix-ui/themes";

const H1_Text_block = ({ fontFamilies }) => {
  //
  const [selectedFontFamily, setSelectedFontFamily] = useState("Inter");

  //
  return (
    <>
      {/* Title block */}
      <Flex direction="column" className="block-gap" gap="4">
        <Flex
          justify={{
            initial: "flex-start",
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
        >
          <Flex direction="row" gap="7">
            <Flex>
              <Select.Root
                defaultValue="Inter"
                onValueChange={(value) => setSelectedFontFamily(value)}
              >
                <Select.Trigger variant="ghost" />
                <Select.Content>
                  <Select.Group>
                    {fontFamilies.map((family) => (
                      <Select.Item value={family} key={family}>
                        {family}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
            <Flex>
              <Select.Root defaultValue="large">
                <Select.Trigger variant="ghost" />
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
                <Select.Trigger variant="ghost" />
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

          <Text className="download">
            <a
              href={`https://fonts.google.com/specimen/${selectedFontFamily.replace(
                " ",
                "+"
              )}`}
              target="_blank"
            >
              Download {selectedFontFamily}
            </a>
          </Text>
        </Flex>

        <Text
          style={{
            fontFamily: `${selectedFontFamily}`,
            fontSize: "80px",
            fontWeight: "bold",
            color: "#000",
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
