import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Anderson Silva</Text>
          <Text color="gray.300" fontSize="small">
            andersonsilvapp@gmail.com
          </Text>
        </Box>
      ) }

      <Avatar
        size="md"
        name="Anderson Silva"
        src="https://github.com/andersonsilvapp.png"
      />
    </Flex>
  );
}
