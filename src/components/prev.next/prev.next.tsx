import { useEffect } from "react";
import { PokeApiRepo } from "../../services/repository/poke.api.repo";
import { useCards } from "../hook/use.cards";
import "./prev.next.scss";
export function PrevNext() {
  return (
    <div className="prevnext-buttons">
      <button className="prev">
        <img
          className="prev_button"
          src="../../../assets/prevnext/pages.png"
          alt="previous"
        />
        <h3 className="prev-text">Previous</h3>
      </button>
      <button className="next">
        <h3 className="n-text">Next</h3>
        <img
          className="next_button"
          src="../../../assets/prevnext/pages.png"
          alt="next"
        />
      </button>
    </div>
  );
}
