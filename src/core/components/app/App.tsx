import React from "react";
import "../../../style.scss";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Home } from "../../../features/home/home";
import { Menu } from "../../../features/menu/menu";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "Favorites", path: "/favorites" },
  { label: "Create a trainer", path: "/create-trainer" },
  { label: "Your trainer", path: "/your-trainer" },
];

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
