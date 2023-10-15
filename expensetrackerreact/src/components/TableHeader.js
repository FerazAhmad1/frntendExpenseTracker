import React from "react";
import { Th } from "@chakra-ui/react";

export const TableHeader = ({ children }) => {
  return (
    <Th
      fontSize="3xl"
      textColor={"white"}
      paddingX={6}
      paddingY={5}
      backgroundColor={"black"}>
      {children}
    </Th>
  );
};
