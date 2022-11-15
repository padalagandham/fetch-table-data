import React, { useContext, useState, useEffect, createContext } from "react";
import { CHECKBOX_STATES } from "./TopHeader";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [tableData, setTableData] = useState([]);
  const [selectRowsCount, setSelectedRowsCount] = useState(0);
  const [selectAllState, setSelectAllState] = useState();

  const rowChangeHandler = (name, checked) => {
    const selectedIndex = tableData.findIndex((data) => data.name === name);
    tableData[selectedIndex].checked = checked;
    setTableData([...tableData]);
    updateCount();
  };

  const updateCount = () => {
    setSelectedRowsCount(tableData.filter((row) => row.checked).length);
    if (tableData.every((row) => row.checked)) {
      setSelectAllState(CHECKBOX_STATES.Checked);
    } else if (tableData.some((row) => row.checked)) {
      setSelectAllState(CHECKBOX_STATES.Indeterminate);
    } else {
      setSelectAllState(CHECKBOX_STATES.Empty);
    }
  };

  const selectAllRowsHandler = (checked) => {
    const updatedRows = tableData.map((row) => {
      row.checked = checked;
      return row;
    });
    setSelectAllState(
      checked ? CHECKBOX_STATES.Checked : CHECKBOX_STATES.Empty
    );
    setTableData([...updatedRows]);
    updateCount();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("response.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.log("fetch data error");
      }
    };
    fetchData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        tableData,
        rowChangeHandler,
        selectAllRowsHandler,
        selectRowsCount,
        selectAllState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useAPI = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};
