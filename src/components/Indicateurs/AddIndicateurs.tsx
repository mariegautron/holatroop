import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Flex,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import addIndicateurs from "../../services/addindicateurs";

const AddIndicateurs: FC = () => {
  const [occupation, setOccupation] = useState<number>();

  const [facturable, setFacturable] = useState<number>();
  const [nonfacturable, setNonFacturable] = useState<number>();

  const [recette, setRecette] = useState<number>();
  const [poubelle, setPoubelle] = useState<number>();

  const [period, setPeriod] = useState<string>("week");

  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      addIndicateurs({
        occupation,
        facturable,
        nonfacturable,
        recette,
        poubelle,
        period,
      });
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <>
      <Flex
        spacing={4}
        alignItems="center"
        flexDirection="column"
        mt={6}
        mb={6}
        bgColor="troopers.silver.500"
        p={6}
      >
        <Flex alignItems="center" spacing={4}>
          <NumberInput mr={1}>
            <Text>Taux d'occupation</Text>
            <NumberInputField
              onChange={(e) => setOccupation(Number(e.target.value))}
              value={occupation}
            />
          </NumberInput>
          <NumberInput mr={1}>
            <Text>Facturable</Text>
            <NumberInputField
              onChange={(e) => setFacturable(Number(e.target.value))}
              value={facturable}
            />
          </NumberInput>
          <NumberInput mr={1}>
            <Text>Non facturable</Text>
            <NumberInputField
              onChange={(e) => setNonFacturable(Number(e.target.value))}
              value={nonfacturable}
            />
          </NumberInput>
          <NumberInput mr={1}>
            <Text>Recette</Text>
            <NumberInputField
              onChange={(e) => setRecette(Number(e.target.value))}
              value={recette}
            />
          </NumberInput>
          <NumberInput mr={1}>
            <Text>Poubelle</Text>
            <NumberInputField
              onChange={(e) => setPoubelle(Number(e.target.value))}
              value={poubelle}
            />
          </NumberInput>
        </Flex>
        <RadioGroup onChange={setPeriod} value={period} mt={4}>
          <Stack direction="row">
            <Radio value="week">Semaine passée</Radio>
            <Radio value="month">Mois en cours</Radio>
          </Stack>
        </RadioGroup>
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

export default AddIndicateurs;
