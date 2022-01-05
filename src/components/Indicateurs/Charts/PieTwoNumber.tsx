import { Flex, Heading } from "@chakra-ui/react";
import React, { FC } from "react";
import { PieChart } from "react-minimal-pie-chart";
import randomColor from "../../../utils/randomColor";

const PieTwoNumber: FC<{ values: number[]; label?: string }> = ({
  values,
  label,
}) => {
  const data = values.map((val) => {
    return {
      value: val,
      color: randomColor(),
    };
  });

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <PieChart
        style={{
          fontFamily:
            '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
          fontSize: "8px",
          height: "200px",
        }}
        data={data}
        radius={PieChart.defaultProps.radius - 6}
        lineWidth={50}
        segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
        segmentsShift={1}
        animate
        label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
        labelPosition={100 - 50 / 2}
        labelStyle={{
          fill: "#fff",
          opacity: 0.75,
          pointerEvents: "none",
        }}
      />
      {label && (
        <Heading size="sm" mt={3}>
          {label}
        </Heading>
      )}
    </Flex>
  );
};

export default PieTwoNumber;
