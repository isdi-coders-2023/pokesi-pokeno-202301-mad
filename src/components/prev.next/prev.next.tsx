import { LoadPokeStructure } from "../../models/poke";
import "./prev.next.scss";
export function PrevNext(props: LoadPokeStructure) {
  const handlePrevPage = () => {
    props.previous;
  };
  const handleNextPage = () => {
    props.next;
  };

  return (
    <div className="prevnext-buttons">
      <button className="prev" onClick={handlePrevPage}>
        <img
          className="prev_button"
          src="../../../assets/prevnext/pages.png"
          alt="previous"
        />
        <h3 className="prev-text">Previous</h3>
      </button>
      <button className="next" onClick={handleNextPage}>
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
