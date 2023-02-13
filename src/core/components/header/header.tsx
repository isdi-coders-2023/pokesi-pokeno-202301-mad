import "./header.scss";

export function Header() {
  return (
    <header className="header">
      <img
        src="../../../../assets/header/logo.png"
        className="header-logo"
        alt="Logo de pokemon"
      ></img>
      <nav>
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
