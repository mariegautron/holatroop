import React, { FC } from "react";
import TensionBlock, { TensionType } from "./TensionBlock";

interface OwnProps {
  tensions: TensionType[];
}

const TensionsList: FC<OwnProps> = ({ tensions }) => {
  return (
    <>
      {tensions.map((tension) => (
        <TensionBlock {...tension} />
      ))}
    </>
  );
};

export default TensionsList;
