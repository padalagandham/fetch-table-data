import React from "react";
import "./TableComponent.css";
import TableRow from "./TableRow";
import { useAPI } from "./dataProvider";
import TopHeader from "./TopHeader";

const TableComponent = () => {
  const { tableData } = useAPI();
  return (
    <table className="table custom-table">
      <thead>
        <TopHeader />
        <tr>
          <th></th>
          <th>Name</th>
          <th>Device</th>
          <th>Path</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <TableRow key={row.name} {...row} />
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
