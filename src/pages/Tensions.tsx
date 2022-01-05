import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import AddTension from "../components/Tensions/AddTension";
import { TensionType } from "../components/Tensions/TensionBlock";
import TensionsList from "../components/Tensions/TensionsList";
import { db } from "../context/Firebase";
import nextMonday from "../utils/nextMonday";

function Tensions() {
  const [value /*loading, error*/] = useCollection(db.collection("tensions"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const tensions = value?.docs.map((doc) => {
    return { ...doc.data(), id: doc.id } as TensionType;
  });

  return (
    <>
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box w="100%" p={4}>
            <Heading as="h2" size="lg">
              Ajouter une tension
            </Heading>
            <Box mt={4}>
              <AddTension />
            </Box>
          </Box>

          <Box w="100%" bg="troopers.silver.500" p={4}>
            <Heading as="h2" size="md" textAlign="center">
              Les tensions pour le {nextMonday()}
            </Heading>

            <Box mt={4}>
              {tensions && tensions?.length !== 0 ? (
                <TensionsList tensions={tensions} />
              ) : (
                "Pas encore de tensions ajoutées"
              )}
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Tensions;
