import { Link } from "react-router-dom";
import "./error.scss";
export function Error() {
  return (
    <div className="error">
      <h1>ERROR 404</h1>
      <img src="../../../../assets/error/snorlax.gif" alt="snorlax" />
      <h2>Path not found</h2>
      <button type="button" className="button-home">
        <Link to="/" className="error-link">
          Home
        </Link>
      </button>
    </div>
  );
}
