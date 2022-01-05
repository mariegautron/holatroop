import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";

export interface TensionType {
  id?: string;
  name: string;
  comment: string;
  person: string;
}

const TensionBlock: FC<TensionType> = ({ name, comment, person }) => {
  return (
    <>
      <Box
        borderWidth="1px"
        p={4}
        width="100%"
        borderRadius={4}
        mb={4}
        borderColor="troopers.mauve.500"
      >
        <Flex width="100%" justifyContent="space-between">
          <Box>
            <Text fontSize="xl" mb={3} color="troopers.prune.500">
              {name}
            </Text>

            <Text fontSize="md" mb={2}>
              {comment}
            </Text>

            <Text fontSize="sm" color="grey">
              {person}
            </Text>
          </Box>
          <Button>
            <CheckIcon />
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default TensionBlock;
