import React, { useState, useEffect, createContext } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [tableData, setTableData] = useState([]);
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
