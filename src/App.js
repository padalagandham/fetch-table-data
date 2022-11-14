import "./App.css";
import { DataContextProvider } from "./dataProvider";
import TableComponent from "./TableComponent";

const App = () => {
  return (
    <DataContextProvider>
      <div className="App">
        <h1>testing</h1>
        <TableComponent />
      </div>
    </DataContextProvider>
  );
};

export default App;
