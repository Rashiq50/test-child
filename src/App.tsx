import React from "react";
import { MainProps } from "./utils/types";
import MainIndex from "./components/mainIndex";

const App: React.FC<MainProps> = (props) => {
  return (
    <div className="App">
      <MainIndex />
    </div>
  );
};

export default App;
