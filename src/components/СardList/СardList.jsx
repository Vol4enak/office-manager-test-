import css from "./CardList.module.css";
import { IoBan } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";
import { useState } from "react";
import { FormCard } from "../formCard/formCard";

export const CardList = ({ item, onDelete }) => {
  const [editForm, setEditForm] = useState(null);

  const getYearWordForm = (numberYears) => {
    if (numberYears !== 1) {
      return "рік";
    } else if (numberYears >= 2 && numberYears <= 4) {
      return "роки";
    } else {
      return "років";
    }
  };

  const toggleEditForm = (itemId) => {
    if (editForm === itemId) {
      setEditForm(null);
    } else {
      setEditForm(itemId);
    }
  };

  return (
    <div className={css.container}>
      {item.length ? (
        <>
          <ul className={css.list}>
            {item.map(({ id, birthday, breed, name, years }) => (
              <li key={id} className={css.listItem}>
                <h2>Кабінет</h2>
                <div className={css.dox}>
                  <p>{name}</p>
                  <p>{breed}</p>
                  <p>{years + " " + getYearWordForm(years)}</p>
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
                  <button
                    className={css.button}
                    type="button"
                    onClick={() => {
                      toggleEditForm(id);
                    }}
                  >
                    <IconContext.Provider value={{ size: "1.5em" }}>
                      <MdEdit />
                    </IconContext.Provider>
                  </button>

                  {editForm === id && (
                    <FormCard
                      status={editForm}
                      onClose={() => {
                        setEditForm(null);
                      }}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};
