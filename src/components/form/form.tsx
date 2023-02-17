import { SyntheticEvent, useState } from "react";
import "./form.scss";

export default function Form() {
  const [nameTrainer, setNameTrainer] = useState("");
  const [favoriteType, setFavoriteType] = useState("");
  const [region, setRegion] = useState("");
  // const []img

  const form = {
    name: nameTrainer,
    favoriteType: favoriteType,
    region: region,
    //img: trainer,
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };
  function handlerClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="form_container">
      <form className="form_text" onSubmit={handleSubmit}>
        <h2 className="title_create">Create</h2>
        <label htmlFor="">
          <input
            value="Name"
            type="text"
            placeholder="Enter name your trainer"
            required
          />
        </label>
        <label htmlFor="">
          <select name="favorite_type" id="Favorite type" required>
            Favorite type
          </select>
        </label>
        <label htmlFor="">
          <select name="region" id="Region" required>
            Region
          </select>
        </label>
        <label htmlFor="">
          <input
            img={url}
            value="Region"
            type="text"
            placeholder="Select your imagen for trainer "
            required
          />
        </label>

        <button onClick={() => handlerClick()}>Send</button>
      </form>
    </div>
  );
}
