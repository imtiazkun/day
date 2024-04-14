import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import Task from "./Task";

export default function DataView() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Backlog</TableColumn>
        <TableColumn>Block</TableColumn>
        <TableColumn>Progress</TableColumn>
        <TableColumn>Done</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Task />
          </TableCell>
          <TableCell>
            <Task />
          </TableCell>
          <TableCell>
            <Task />
          </TableCell>
          <TableCell>
            <Task />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
