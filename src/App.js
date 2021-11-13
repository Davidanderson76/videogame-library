import React from "react";
//COMPONENTS & PAGES
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

require("dotenv").config();

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
