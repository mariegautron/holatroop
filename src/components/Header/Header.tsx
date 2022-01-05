import { Box } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavBarContainer from "./NavBarContainer";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box bgColor="troopers.silver.500">
      <NavBarContainer>
        <Logo />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    </Box>
  );
}

export default Header;
