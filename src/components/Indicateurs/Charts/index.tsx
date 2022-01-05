import { Grid } from "@chakra-ui/react";
import React, { FC } from "react";
import PieOneNumberPerCent from "./PieOneNumberPerCent";
import PieOneNumberValue from "./PieOneNumberValue";
import PieTwoNumber from "./PieTwoNumber";

export interface IndicateursChart {
  occupation?: number;
  facturable?: number;
  nonfacturable?: number;
  recette?: number;
  poubelle?: number;
  period?: string;
}

const Charts: FC<IndicateursChart> = ({
  occupation,
  facturable,
  nonfacturable,
  recette,
  poubelle,
}) => {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={6}>
        {occupation && (
          <PieOneNumberPerCent value={occupation} label="Taux d'occupation" />
        )}
        {facturable && nonfacturable && (
          <PieTwoNumber
            values={[facturable, nonfacturable]}
            label="Facturable / Non facturable"
          />
        )}
      </Grid>
      {(poubelle || recette) && (
        <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={6}>
          {poubelle && (
            <PieOneNumberValue value={poubelle} label="Jours de poubelle" />
          )}
          {recette && (
            <PieOneNumberValue value={recette} label="Jours de recette" />
          )}
        </Grid>
      )}
    </>
  );
};

export default Charts;
