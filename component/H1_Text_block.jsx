import React from "react";
import { Flex, Box, Text, Button, Select } from "@radix-ui/themes";

const H1_Text_block = () => {
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
              <Select.Root defaultValue="apple">
                <Select.Trigger variant="ghost" />
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Fruits</Select.Label>
                    <Select.Item value="orange">Orange</Select.Item>
                    <Select.Item value="apple">Apple</Select.Item>
                    <Select.Item value="grape">Grape</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
            <Flex>
              <Select.Root defaultValue="apple">
                <Select.Trigger variant="ghost" />
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Fruits</Select.Label>
                    <Select.Item value="orange">Orange</Select.Item>
                    <Select.Item value="apple">Apple</Select.Item>
                    <Select.Item value="grape">Grape</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
            <Flex>
              <Select.Root defaultValue="apple">
                <Select.Trigger variant="ghost" />
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Fruits</Select.Label>
                    <Select.Item value="orange">Orange</Select.Item>
                    <Select.Item value="apple">Apple</Select.Item>
                    <Select.Item value="grape">Grape</Select.Item>
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
