import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Flex,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { db } from "../../context/Firebase";

const AddTension: FC = () => {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [person, setPerson] = useState<string>("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    db.collection("tensions")
      .add({
        name: name,
        comment: comment,
        person: person,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        setError(error.message);
      });
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleChangePerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson(e.target.value);
  };

  return (
    <>
      <Flex spacing={4} alignItems="center" flexDirection="column">
        <Input
          mb={4}
          type="text"
          placeholder="Nom de la tension"
          value={name}
          onChange={handleChangeName}
        />
        <Textarea
          mb={4}
          type="text"
          placeholder="Explique ta tension"
          value={comment}
          onChange={handleChangeComment}
        />
        <Input
          mb={4}
          type="text"
          placeholder="Qui es tu ?"
          value={person}
          onChange={handleChangePerson}
        />

        <Button
          colorScheme="troopers.mauve"
          size="sm"
          mt={4}
          borderRadius={0}
          textTransform="uppercase"
          onClick={handleSubmit}
        >
          Ajouter
        </Button>
        {error && (
          <Alert status="error" mt={5}>
            <AlertIcon />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </Flex>
    </>
  );
};

export default AddTension;
