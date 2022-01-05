import { Container, Flex } from "@chakra-ui/react";
interface NavBarContainerProps {
  children: any;
}

const NavBarContainer = ({ children, ...props }: NavBarContainerProps) => {
  return (
    <Container maxW="container.xl">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={6}
        p={6}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    </Container>
  );
};

export default NavBarContainer;
