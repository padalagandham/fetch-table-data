import React from "react";
import "./TableComponent.css";
import TableRow from "./TableRow";
import { useAPI } from "./dataProvider";

const TableComponent = () => {
  const { tableData } = useAPI();
  return (
    <table className="table custom-table">
      <thead>
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
          <TableRow {...row} />
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
