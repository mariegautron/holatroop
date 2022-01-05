import { Flex, Heading } from "@chakra-ui/react";
import React, { FC } from "react";
import { PieChart } from "react-minimal-pie-chart";
import randomColor from "../../../utils/randomColor";

const PieOneNumberValue: FC<{
  value: number;
  totalValue?: number;
  label?: string;
}> = ({ value, totalValue = 12, label }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <PieChart
        data={[{ value: value, color: randomColor() }]}
        lineWidth={20}
        label={({ dataEntry }) => `${dataEntry.value} / ${totalValue}`}
        labelStyle={{
          fontSize: "20px",
          fontFamily: "sans-serif",
          fill: randomColor(),
        }}
        totalValue={totalValue}
        labelPosition={0}
        style={{ height: "170px" }}
      />
      {label && (
        <Heading size="sm" mt={6}>
          {label}
        </Heading>
      )}
    </Flex>
  );
};

export default PieOneNumberValue;
