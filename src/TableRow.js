import React from "react";
import "./TableRow.css";
import { useAPI } from "./dataProvider";

const TableRow = ({ name, device, path, status, checked = false }) => {
  const { rowChangeHandler } = useAPI();
  return (
    <tr>
      <td>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => rowChangeHandler(name, e.currentTarget.checked)}
          />
        </label>
      </td>
      <td>{name}</td>
      <td>{device}</td>
      <td>{path}</td>
      <td>{status}</td>
    </tr>
  );
};

export default TableRow;
