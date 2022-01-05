import {
  Box,
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

function Connection() {
  return (
    <>
      <Box bgColor="troopers.prune.500" p={4} height="100vh" mt={-7}>
        <Container maxW="container.lg" p={6}>
          <Flex justifyContent="center" alignItems="center" mt={"15%"}>
            <Box
              bg="white"
              w={["100%", "100%", "60%", "60%"]}
              p={4}
              borderRadius={2}
            >
              <Tabs colorScheme="troopers.prune">
                <Flex alignItems="center" flexDirection="column">
                  <TabList>
                    <Tab>Connexion</Tab>
                    <Tab>Inscription</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <SignInForm />
                    </TabPanel>
                    <TabPanel>
                      <SignUpForm />
                    </TabPanel>
                  </TabPanels>
                </Flex>
              </Tabs>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Connection;
