import { EmailIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../context/Firebase";

const SignInForm: FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleClick = () => setShow(!show);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Flex spacing={4} alignItems="center" flexDirection="column">
        <InputGroup mb={4}>
          <InputLeftElement
            pointerEvents="none"
            children={<EmailIcon color="gray.300" />}
          />
          <Input
            type="email"
            placeholder="Adresse mail"
            value={email}
            onChange={handleChangeEmail}
          />
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Mot de passe"
            value={password}
            onChange={handleChangePass}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button
          colorScheme="troopers.mauve"
          size="sm"
          mt={4}
          borderRadius={0}
          textTransform="uppercase"
          onClick={handleSubmit}
        >
          Se connecter
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

export default SignInForm;
