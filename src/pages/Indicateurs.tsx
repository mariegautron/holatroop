import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import AddIndicateurs from "../components/Indicateurs/AddIndicateurs";
import Charts from "../components/Indicateurs/Charts";
import { db } from "../context/Firebase";
import getNumberOfWeek from "../utils/getNumberOfWeek";

function Indicateurs() {
  const [valueMonth /*loading, error*/] = useCollection(
    db
      .collection("indicateurs")
      .where("periodName", "==", "month")
      .where("period", "==", new Date().getMonth()),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const [valueWeek /*loading, error*/] = useCollection(
    db
      .collection("indicateurs")
      .where("periodName", "==", "week")
      .where("period", "==", getNumberOfWeek()),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const monthIndicators = valueMonth?.docs.map((d) => d.data())[0];
  const weekIndicators = valueWeek?.docs.map((d) => d.data())[0];

  return (
    <>
      <Container maxW="container.xl">
        <AddIndicateurs />
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {monthIndicators && (
            <Box w="100%" p={4}>
              <Heading as="h2" size="lg">
                Mois en cours
              </Heading>
              <Charts {...monthIndicators} />
            </Box>
          )}
          {weekIndicators && (
            <Box w="100%" p={4}>
              <Heading as="h2" size="lg">
                Semaine passée
              </Heading>
              <Charts {...weekIndicators} />
            </Box>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Indicateurs;
