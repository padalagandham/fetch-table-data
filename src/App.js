import "./App.css";
import { DataContextProvider } from "./dataProvider";

const App = () => {
  return (
    <DataContextProvider>
      <div className="App">
        <h1>testing</h1>
      </div>
    </DataContextProvider>
  );
};

export default App;
