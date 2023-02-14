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
      <nav className="header-nav">
        <ul className="header-list">
          <li className="home">Home</li>
          <li className="favorites">Favorites</li>
          <li className="create-trainer">Create a trainer</li>
          <li className="your-trainer">Your Trainer</li>
        </ul>
      </nav>
    </header>
  );
}
