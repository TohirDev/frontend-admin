import { useFetchData } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { TDataType } from "@/types";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const Elonlar = () => {
  const [getElonlar, { data, loading, error }] = useFetchData<TDataType>(
    "https://laptop-uz.onrender.com/api/product/get-all"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setReacordsPerPage] = useState("20");
  const lastIndex = currentPage * Number(recordsPerPage);
  const firstIndex = lastIndex - Number(recordsPerPage);
  const records = data?.data.slice(firstIndex, lastIndex);
  let npage = 0;
  if (data?.count !== undefined) {
    npage = Math.ceil(data?.count / Number(recordsPerPage));
  }
  useEffect(() => {
    getElonlar();
  }, [getElonlar]);
  if (error) return <h1>Error get the fuck out of here</h1>;
  if (loading) return <h1>Loading...</h1>;

  function changeCPage(id: number) {
    setCurrentPage(id);
  }
  return (
    <div>
      <TableContainer>
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
            {records?.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell align="right">{row.battery}</TableCell>
                <TableCell align="right">{row.condition}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.model_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          count={npage}
          shape="rounded"
          variant="outlined"
          onChange={(_e, value) => changeCPage(value)}
          page={currentPage}
        ></Pagination>
      </TableContainer>

      {/* <select
        name="page"
        onChange={(e) => setReacordsPerPage(e.target.value)}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select> */}
    </div>
  );
};
