import { Flex, Heading } from "@chakra-ui/react";
import React, { FC } from "react";
import { PieChart } from "react-minimal-pie-chart";
import randomColor from "../../../utils/randomColor";

const PieOneNumberPerCent: FC<{ value: number; label?: string }> = ({
  label,
  value,
}) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <PieChart
        data={[{ value: value, color: randomColor() }]}
        totalValue={100}
        lineWidth={20}
        label={({ dataEntry }) => `${dataEntry.value}%`}
        labelStyle={{
          fontSize: "20px",
          fontFamily: "sans-serif",
          fill: randomColor(),
        }}
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

export default PieOneNumberPerCent;
