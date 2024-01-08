import { nanoid } from "nanoid";
import { IoBan } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";
import style from "../CardList.module.css";

import { useState } from "react";
import { EditForm } from "../../formCard/editForm/editForm";
// import { GetFact } from "../../formCard/getFact";

export const CardItem = ({
  items,
  deleteInfoCats,
  handleEditSubmit,
  onSubmit,
  isOpenAddForm,
}) => {
  const [isOpenForm, setIsOpenForm] = useState(null);

  const toggleEditForm = (itemId) => {
    setIsOpenForm((prev) => (prev === itemId ? null : itemId));
  };
  const getYearWordForm = (numberYears) => {
    if (numberYears !== 1) {
      return "рік";
    } else if (numberYears >= 2 && numberYears <= 4) {
      return "роки";
    } else {
      return "років";
    }
  };
  return (
    <div className={style.container}>
      {items && items.length ? (
        <ul className={style.list}>
          {items.map(({ id, unikId, birthday, breed, name, years }) => (
            <li key={unikId} className={style.listItem}>
              <div className={style.listItemBox}>
                <p>{items.length - 1}.</p>
                <p>{name}</p>
                <p>{breed}</p>
                <p>{years + " " + getYearWordForm(years)}</p>
                <p>{birthday}</p>

                <button
                  className={style.button}
                  type="button"
                  onClick={() => {
                    deleteInfoCats(unikId);
                  }}
                >
                  <IconContext.Provider value={{ size: "1.5em" }}>
                    <IoBan />
                  </IconContext.Provider>
                </button>
                <button
                  className={style.button}
                  type="button"
                  onClick={() => {
                    toggleEditForm(unikId);
                  }}
                >
                  <IconContext.Provider value={{ size: "1.5em" }}>
                    <MdEdit />
                  </IconContext.Provider>
                </button>
              </div>
              {isOpenForm === unikId && (
                <EditForm
                  onSubmit={(id, unikId, name, breed, years, birthday) =>
                    onSubmit(id, unikId, name, breed, years, birthday)
                  }
                  id={id}
                  unikId={nanoid()}
                  handleEditSubmit={handleEditSubmit}
                  onClose={() => setIsOpenForm(null)}
                />
              )}
              {/* <GetFact items={items} />  */}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
