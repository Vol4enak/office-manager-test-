import { useState } from "react";
// import {GetFact} from "./getFact"
import css from "./formCard.module.css";

export const FormCard = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [years, setYears] = useState("");
  const [birthday, setBirthday] = useState("");
  const handelChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "breed":
        setBreed(value);
        break;
      case "years":
        setYears(value);
        break;
      case "birthday":
        setBirthday(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, breed, years, birthday);
    reset();
  };

  const reset = () => {
    setName("");
    setBreed("");
    setYears("");
    setBirthday("");
  };
  return (
    <>
      <div className={css.helperBox}>
        <h2 className={css.title}>Kaбінет</h2>
        <div className={css.formbox}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handelChange}
              value={name}
              placeholder="Введіть ім'я котика"
              required
            />
            <input
              type="text"
              name="breed"
              onChange={handelChange}
              value={breed}
              placeholder="Введіть породу"
              required
            />
            <input
              type="number"
              name="years"
              onChange={handelChange}
              value={years}
              min="1"
              placeholder="Скільки йому років?"
              required
            />
            <input
              type="date"
              onChange={handelChange}
              value={birthday}
              name="birthday"
              id=""
              required
            />

            <button type="submit" onSubmit={onSubmit}>
              Add cabinet
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
