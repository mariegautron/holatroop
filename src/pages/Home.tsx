import { Container } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../context/Firebase";

function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <Container maxW="container.xl">
        <p>Coucou</p>
      </Container>
    </>
  );
}

export default Home;
