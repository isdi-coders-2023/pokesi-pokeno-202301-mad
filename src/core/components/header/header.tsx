import { Menu } from "../menu/menu";
import "./header.scss";

export function Header() {
  return (
    <header className="header">
      <img
        src="../../../../assets/header/logo.png"
        className="header__logo"
        alt="Logo de pokemon"
      ></img>
      <img
        src="../../../../assets/menu/pokeball.png"
        className="menu-ball"
        alt=""
      />
      <Menu></Menu>
    </header>
  );
}