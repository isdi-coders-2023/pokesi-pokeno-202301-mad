import { Menu } from "../../../features/menu/menu";
import "./header.scss";

type HeaderProps = { children: JSX.Element };
export function Header({ children }: HeaderProps)) {
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
      <Menu></Menu>
    </header>
  );
}
