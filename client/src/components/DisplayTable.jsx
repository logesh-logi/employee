import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function DisplayTable({ rows }) {
  return (
    <TableContainer component={Paper} className="mx-auto max-w-2xl p-4">
      <Table aria-label="simple table" className="w-full border">
        <TableHead>
          <TableRow className="hover:bg-gray-100">
            <TableCell className="font-semibold" align="right">
              Name
            </TableCell>
            <TableCell className="font-semibold" align="right">
              Emp_id
            </TableCell>
            <TableCell className="font-semibold" align="right">
              Depatment
            </TableCell>
            <TableCell className="font-semibold" align="right">
              Dob
            </TableCell>
            <TableCell className="font-semibold" align="right">
              Gender
            </TableCell>
            <TableCell className="font-semibold" align="right">
              Designation
            </TableCell>
            <TableCell className="font-semibold" align="right">
              Salary
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number} className="hover:bg-gray-100">
              <TableCell component="th" className="border" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell className="border" align="right">
                {row.emp_id}
              </TableCell>
              <TableCell className="border" align="right">
                {row.department}
              </TableCell>
              <TableCell className="border" align="right">
                {new Date(row.dob).toLocaleDateString()}
              </TableCell>
              <TableCell className="border" align="right">
                {row.gender}
              </TableCell>
              <TableCell className="border" align="right">
                {row.designation}
              </TableCell>
              <TableCell className="border" align="right">
                {row.salary}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
