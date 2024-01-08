import css from "../formCard.module.css";
import { useState } from "react";
// import { GetFact } from "../getFact";
export const EditForm = ({ handleEditSubmit, unikId, onClose, id }) => {
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

  const handleEdit = (e) => {
    e.preventDefault();
    handleEditSubmit(id, unikId, name, breed, years, birthday);

    onClose();
    
  };

  return (
    <div className={css.helperBox}>
      <h2 className={css.title}>Редагувати кабінет</h2>
      <div className={css.formbox}>
        <form onSubmit={handleEdit}>
          <input
            type="text"
            name="name"
            onChange={handelChange}
            value={name}
            placeholder="Введіть ім'я котика"
            required
          />
          <select name="breed" onChange={handelChange} value={breed} required>
            <option value="" disabled hidden>
              Виберіть породу
            </option>
            <option value="Мейн-кун">Мейн-кун</option>
            <option value="Сфинкс">Сфинкс</option>
            <option value="Бурма">Бурма</option>
            <option value="Сноу-шу">Сноу-шу</option>
            <option value="Манчкин">Манчкин</option>
          </select>
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

          <button type="submit" onClick={handleEdit}>
            edit cabinet
          </button>
        </form>
      </div>
      {/* <GetFact /> */}
    </div>
  );
};
