import { SyntheticEvent, useState } from "react";
import "./form1.scss";
import { Link, useLocation } from "react-router-dom";

export default function Form() {
  const [nameTrainer, setName] = useState("");
  const [favoriteType, setFavoriteType] = useState("");
  const [region, setRegion] = useState("");
  ///meter imagen

  const form = {
    name: nameTrainer,
    favoriteType: favoriteType,
    region: region,

    ////meter img
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="">
        <input value={nameTrainer} favoriteType="text" region="text" required />
      </label>
      <label htmlFor="">
        <button type="submit" className="send">
          Send
        </button>
      </label>
    </form>
  );
}
