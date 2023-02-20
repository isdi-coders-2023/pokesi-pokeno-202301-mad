import { Link } from "react-router-dom";
import { MenuOption } from "../app/App";

type MenuProps = {
  options: MenuOption[];
};

export function Menu({ options }: MenuProps) {
  return (
    <nav className="header-nav">
      <ul className="header-list">
        <li className="home">
          <Link to="/">Home</Link>
        </li>
        <li className="favorites">
          <Link to="/">Favorites</Link>
        </li>
        <li className="create-trainer">
          <Link to="/">Create a trainer</Link>
        </li>
        <li className="your-trainer">
          <Link to="/">Your trainer</Link>
        </li>
      </ul>
    </nav>
  );
}
