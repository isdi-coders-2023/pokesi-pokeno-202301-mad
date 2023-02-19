import "../../style.scss";
import { AppRouter } from "../app.router/app.router";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import { PrevNext } from "../prev.next/prev.next";

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
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
