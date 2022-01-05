import { Box, Button, Link, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";

import { AuthContext, auth } from "../../context/Firebase";
import MenuItem from "../Header/MenuItem";

interface MenuLinksProps {
  isOpen: boolean;
}

const NAV_ITEMS = [
  { label: "Tour inclusion/cloture", link: "/" },
  { label: "Checklist", link: "/checklist" },
  { label: "Indicateurs", link: "/indicateurs" },
  { label: "Tensions", link: "/tensions" },
];

const MenuLinks = ({ isOpen }: MenuLinksProps) => {
  const { user } = useContext(AuthContext);

  const signOut = async () => {
    if (!user) {
      return;
    }
    return await auth.signOut();
  };

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {NAV_ITEMS.map((item, i) => (
          <MenuItem to={item.link} key={i}>
            {item.label}
          </MenuItem>
        ))}

        <Button colorScheme="troopers.prune" borderRadius={0}>
          <Link
            textTransform="uppercase"
            href={user ? "/profile" : "/login"}
            _hover={{
              textDecoration: "none",
            }}
          >
            {user ? "Profil" : "Connexion"}
          </Link>
        </Button>
        {user && (
          <Button
            colorScheme="troopers.mauve"
            borderRadius={0}
            onClick={signOut}
          >
            DECONNEXION
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default MenuLinks;
