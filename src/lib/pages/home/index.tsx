import { Button, Flex, Textarea } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React from "react";

const Home = () => {
  const [value, setValue] = React.useState("");

  const handleInputChange = (e: React.FormEvent) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />
      <Textarea
        placeholder="Paste your text"
        value={value}
        onChange={handleInputChange}
        rounded="md"
      />
      <Button rounded="md">Generate video!</Button>
    </Flex>
  );
};

export default Home;
