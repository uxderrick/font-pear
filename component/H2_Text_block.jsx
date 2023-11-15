import React from "react";
import { Flex, Box, Text, Button, Select } from "@radix-ui/themes";

const H2_Text_block = () => {
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
              <Select.Root defaultValue="sans-serif">
                <Select.Trigger variant="ghost" />
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="display">Display</Select.Item>
                    <Select.Item value="sans-serif">Sans Serif</Select.Item>
                    <Select.Item value="serif">Serif</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
            <Flex>
              <Select.Root defaultValue="large">
                <Select.Trigger variant="ghost" />
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="large">Large</Select.Item>
                    <Select.Item value="medium">Medium</Select.Item>
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
                    <Select.Item value="medium">Medium</Select.Item>
                    <Select.Item value="normal">Normal</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
          </Flex>

          <Text className="download">
            <a href="">Download Inter</a>
          </Text>
        </Flex>

        <Text
          style={{
            fontFamily: "Inter",
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
