import { menuOptions } from "../app/App";
import { Menu } from "../menu/menu";
import "./header.scss";

type HeaderProps = { children: JSX.Element };
export function Header() {
  return (
    <header className="header header-error">
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
      <Menu options={menuOptions}></Menu>
    </header>
  );
}
