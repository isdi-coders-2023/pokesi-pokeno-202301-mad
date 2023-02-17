import { MenuOption } from "../app/App";

type MenuProps = {
  options: MenuOption[];
};

export function Menu({ options }: MenuProps) {
  return (
    <nav className="header-nav">
      <ul className="header-list">
        <li className="home">Home</li>
        <li className="favorites">Favorites</li>
        <li className="create-trainer">Create a trainer</li>
        <li className="your-trainer">Your Trainer</li>
      </ul>
    </nav>
  );
}
