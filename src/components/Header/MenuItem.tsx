import { Link, Text } from "@chakra-ui/react";
import React from "react";

interface MenuItemProps {
  children?: any;
  isLast?: boolean;
  to: string;
}

const MenuItem = ({ children, isLast, to = "/", ...rest }: MenuItemProps) => {
  return (
    <Link
      href={to}
      color="troopers.prune.500"
      _hover={{
        textDecoration: "none",
        color: "troopers.mauve.500",
      }}
    >
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
