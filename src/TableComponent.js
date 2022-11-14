import React from "react";
import { useAPI } from "./dataProvider";

const TableComponent = () => {
  const { tableData } = useAPI();
  return (
    <ul>
      {tableData.map((row) => (
        <div key={row.name}>{row.name}</div>
      ))}
    </ul>
  );
};

export default TableComponent;
