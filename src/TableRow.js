import React from "react";
import "./TableRow.css";
import { useAPI } from "./dataProvider";

const TableRow = ({ name }) => {
  const { tableData } = useAPI();
  return (
    <tr>
      <td>
        <label className="control1 control--checkbox1">
          <input type="checkbox" />
        </label>
      </td>
      <td>{name}</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
    </tr>
  );
};

export default TableRow;
