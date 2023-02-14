import React from "react";
import "../../../style.scss";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Home } from "../home/home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>

      <Footer></Footer>
    </div>
  );
}

export default App;
