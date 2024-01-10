import css from "../formCard.module.css";
import { useState } from "react";
// import { GetFact } from "../getFact";
export const EditForm = ({
  handleEditSubmit,
  unikId,
  id,
  onClose,
  birthday,
  breed,
  name,
  years,
  data,
}) => {
  const [editName, setEditName] = useState(name);
  const [editBreed, setEditBreed] = useState(breed);
  const [editYears, setEditYears] = useState(years);
  const [editBirthday, setEditBirthday] = useState(birthday);
  const [editFact, setEditFact] = useState(data);

  const handelChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setEditName(value);
        break;
      case "breed":
        setEditBreed(value);
        break;
      case "years":
        if (/^\d*\.?\d{0,1}$/.test(value) || value === "") {
          setEditYears(value);
        }
        break;
      case "birthday":
        setEditBirthday(value);
        break;
      case "fact":
        setEditFact(value);
        break;
      default:
        return;
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    handleEditSubmit(
      id,
      unikId,
      editName,
      editBreed,
      editYears,
      editBirthday,
      editFact
    );
    onClose();
  };

  return (
    <div className={css.formbox}>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          name="name"
          onChange={handelChange}
          value={editName}
          placeholder="Введіть ім'я котика"
        />
        <select
          className={css.selectForm}
          name="breed"
          onChange={handelChange}
          value={editBreed}
        >
          <option className={css.optionForm} value="" disabled hidden>
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
          value={editYears}
          min="1"
          placeholder="Скільки йому років?"
        />
        <input
          type="date"
          onChange={handelChange}
          value={editBirthday}
          name="birthday"
        />
        <br />
        <textarea 
          className={css.areaEdit}
          name="fact"
          cols="71"
          rows="2"
          onChange={handelChange}
          value={editFact}
        >
          {editFact}
        </textarea>
        <div>
          <button type="submit">Save</button>
          <button
            type="button"
            onClick={() => {
              onClose();
            }}
          >
            Back
          </button>
        </div>
      </form>

      {/* <GetFact /> */}
    </div>
  );
};
