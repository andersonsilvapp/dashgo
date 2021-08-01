import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Anderson Silva</Text>
        <Text color="gray.300" fontSize="small">
          andersonsilvapp@gmail.com
        </Text>
      </Box>
      
      <Avatar
        size="md"
        name="Anderson Silva"
        src="https://github.com/andersonsilvapp.png"
      />
    </Flex>
  );
}
