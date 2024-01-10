import { useState, useEffect } from "react";
import api from "../service/api";
import css from "./formCard.module.css";

export const FormCard = ({ onSubmit, onClose, id, unikId }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [years, setYears] = useState("");
  const [birthday, setBirthday] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.getFact();
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


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
        if (/^\d*\.?\d{0,1}$/.test(value) || value === "") {
          setYears(value);
        }
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
    onSubmit(id, unikId, name, breed, years, birthday, data);
    onClose(null);
  };

  return (
    <>
      <div className={css.formBox}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handelChange}
            value={name}
            placeholder="Введіть ім'я котика"
            required
          />
          <select
            name="breed"
            onChange={handelChange}
            value={breed}
            required
            className={css.selectForm}
          >
            <option value="" disabled hidden className={css.optionForm}>
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
            Add info
          </button>
        </form>
      </div>
    </>
  );
};
console.log(123)