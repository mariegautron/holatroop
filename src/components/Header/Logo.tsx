import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Logo = ({ ...props }) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold" color="troopers.prune.500">
        HolaTroop
      </Text>
    </Box>
  );
};

export default Logo;
