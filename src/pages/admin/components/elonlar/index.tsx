import { useFetchData } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { TDataType } from "@/types";

export const Elonlar = () => {
  const [getElonlar, { data, loading, error }] = useFetchData<TDataType>(
    "https://laptop-uz.onrender.com/api/product/get-all"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setReacordsPerPage] = useState("5");
  const lastIndex = currentPage * Number(recordsPerPage);
  const firstIndex = lastIndex - Number(recordsPerPage);
  const records = data?.data.slice(firstIndex, lastIndex);
  let npage = 0;
  let numbers: number[] = [];
  if (data?.count !== undefined) {
    npage = Math.ceil(data?.count / Number(recordsPerPage));
    numbers = [...Array(npage + 1).keys()].slice(1);
  }
  useEffect(() => {
    getElonlar();
  }, [getElonlar]);
  if (error) return <h1>Error get the fuck out of here</h1>;
  if (loading) return <h1>Loading...</h1>;

  function nextPage() {
    if (currentPage != lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prePage() {
    if (currentPage != firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id: number) {
    setCurrentPage(id);
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {records?.map((el) => (
            <tr key={el._id}>
              <td>{el._id}</td>
              <td>{el.model_name}</td>
              <td>{el.gpu}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
        <li>
          <button onClick={prePage} disabled={currentPage === 1}>
            Previous
          </button>
        </li>
        {numbers.map((el) => (
          <li key={el}>
            <button
              onClick={() => changeCPage(el)}
              style={{
                background: el === currentPage ? "red" : "white",
              }}
            >
              {el}
            </button>
          </li>
        ))}
        <li>
          <button onClick={nextPage} disabled={currentPage === npage}>
            Next
          </button>
        </li>
      </ul>
      <select
        name="page"
        onChange={(e) => setReacordsPerPage(e.target.value)}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
};
