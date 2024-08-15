import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";
const CustomTableRow = ({ children }) => (
  <TableRow
    sx={{
      "& > *": {
        borderBottom: "none !important",
        paddingY: '14px !important',

      },
      "& > :last-child": {
        border: "1px solid common.blue",
        borderStartEndRadius: 100,
        borderEndEndRadius: 100,
      },
      "& > :first-child": {
        border: "1px solid common.blue",
        borderStartStartRadius: 100,
        borderEndStartRadius: 100,
      },
      height: "6px",
      boxShadow: children ? "0px 3px 3px 2px rgba(0, 113, 212, 0.3)" : "none",
      borderRadius: 200,
    }}
  >
    {children}
  </TableRow>
);
const CustomTable = ({ tableColumns, DataList }) => {
  return (
    <Paper elevation={0}>
      <TableContainer sx={{ maxHeight: "740px" }}>
        <Table stickyHeader>
          <TableHead>
            <CustomTableRow>
              {tableColumns.map((column, index) => (
                <TableCell
                  sx={{
                    bgcolor: "rgb(from #0071D4 r g b / 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    letterSpacing: "1.5px",
                    textAlign:"center"
                  }}
                  key={index}
                >
                  {column.label}
                </TableCell>
              ))}
            </CustomTableRow>
          </TableHead>
          <TableBody>
            {DataList.map((row, index) => (
              <CustomTableRow key={index}>
                {tableColumns.map((column) => (
                  <TableCell variant="p4" key={column.label} sx={{textAlign:"center"}}>
                    {column.render
                      ? column.render(row, DataList, index)
                      : row[column.accessor]}
                  </TableCell>
                ))}
              </CustomTableRow>
            ))}
            {/* Extra empty row */}
            <TableRow style={{ height: "6px" }} >
              <TableCell colSpan={tableColumns.length} />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CustomTable;
