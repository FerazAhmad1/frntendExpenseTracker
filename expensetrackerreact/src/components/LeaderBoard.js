import React from "react";
import { TableHeader } from "./TableHeader";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export const LeaderBoard = ({ tableHeader, data, properties }) => {
  return (
    <TableContainer width="-moz-fit-content">
      <Table variant="striped" colorScheme="teal" fontSize={"3xl"}>
        <Thead backgroundColor="blackAlpha.200" textColor="white">
          <Tr>
            {tableHeader.map((th) => (
              <TableHeader>{th}</TableHeader>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((obj, i) => {
            return (
              <Tr>
                <Td>{i + 1}</Td>
                {properties.map((p) => {
                  return <Td>{obj[p]}</Td>;
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
