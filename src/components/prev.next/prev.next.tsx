import "./prev.next.scss";

export function PrevNext() {
  return (
    <div className="prevnext-buttons">
      <div className="prev">
        <img
          className="prev_button"
          src="../../../assets/prevnext/pages.png"
          alt="previous"
        />
        <h3 className="prev-text">Previous</h3>
      </div>
      <div className="next">
        <h3 className="n-text">Next</h3>
        <img
          className="next_button"
          src="../../../assets/prevnext/pages.png"
          alt="next"
        />
      </div>
    </div>
  );
}
