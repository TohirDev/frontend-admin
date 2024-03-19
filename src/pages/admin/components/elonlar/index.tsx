import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { BreadCrumb } from "../../../../components/BreadCrumb";
import { useFetchData } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { TDataType } from "@/types";
import { AddElon } from "./components/AddElon";

export const Elonlar = () => {
  const [getElonlar, { data, loading, error }] = useFetchData<TDataType>(
    "https://laptop-uz.onrender.com/api/product/get-all"
  );
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getElonlar();
  }, [getElonlar]);
  if (error) return <h1>Error get the fuck out of here</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <BreadCrumb
          key={1}
          title="E'lonlar"
          subtitleOne="Toza Laptop"
          subtitleTwo="Laptop"
          subtitleOnePath="/"
          subtitleTwoPath="/admin/elonlar"
        />
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add Product
        </Button>
      </Box>
      <AddElon width={613} onClose={() => setOpen(false)} open={open} />
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((item) => (
              <TableRow
                key={item._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.display}
                </TableCell>
                <TableCell align="right">{item.battery}</TableCell>
                <TableCell align="right">{item.gpu}</TableCell>
                <TableCell align="right">{item.location}</TableCell>
                <TableCell align="right">{item.phone_number}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
