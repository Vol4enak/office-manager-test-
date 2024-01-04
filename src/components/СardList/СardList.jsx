import css from "./CardList.module.css";
import { IoBan } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";

export const CardList = ({ item, onDelete }) => {
  const numberYears = item;

  const getYearWordForm = (item) => {
    for (let a = 0; a < item.length; a++) {
      const numberYears = item[a].years;

      if (numberYears !== 1) {
        return "рік";
      } else if (numberYears >= 2 && numberYears <= 4) {
        return "роки";
      } else {
        return "років";
      }
    }
  };

  return (
    <>
      <h2 className={css.title}>Кабінет</h2>
      <ul className={css.list}>
        {item.map(({ id, birthday, breed, name, years }) => (
          <li key={id} className={css.listItem}>
            <p>{name}</p>
            <p>{breed}</p>
            <p>{years + " " + getYearWordForm(numberYears)}</p>
            <p>{birthday}</p>
            <button
              className={css.button}
              type="button"
              onClick={() => {
                onDelete(id);
              }}
            >
              <IconContext.Provider value={{ size: "1.5em" }}>
                <IoBan />
              </IconContext.Provider>
            </button>
            <button className={css.button} type="button">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <MdEdit />
              </IconContext.Provider>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
