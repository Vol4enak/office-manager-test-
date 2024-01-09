import { IoBan } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";
import style from "../CardList.module.css";

import { useState } from "react";
import { EditForm } from "../../formCard/editForm/editForm";

export const CardItem = ({
  items,
  checkboxes,
  deleteInfoCats,
  handleEditSubmit,
}) => {
  const [isOpenForm, setIsOpenForm] = useState(null);
  // const [isFormEdit, setIsFormEdit] = useState(true);
  const toggleEditForm = (itemId) => {
    setIsOpenForm((prev) => (prev === itemId ? null : itemId));
    // setIsFormEdit(false);
  };

  const getFilteredAndSortedItems = () => {
    const sordByAge = checkboxes.find((checkbox) => checkbox.id === 1);
    const sortByDate = checkboxes.find((checkbox) => checkbox.id === 2);
    const compareAges = (a, b) => a.years - b.years;
    let filteredItems = [...items];

    if (sordByAge && sordByAge.isChecked) {
      const today = new Date().setHours(0, 0, 0, 0);
      filteredItems = filteredItems.filter(
        (item) => new Date(item.birthday).setHours(0, 0, 0, 0) === today
      );
    }

    if (sortByDate && sortByDate.isChecked) {
      filteredItems = filteredItems.filter((item) => item.years <= 2);
      filteredItems.sort(compareAges);
    }

    return filteredItems;
  };

  return (
    <div className={style.container}>
      {items && items.length ? (
        <ol className={style.list}>
          {getFilteredAndSortedItems().map(
            ({ id, unikId, birthday, breed, name, years }) => {
              return (
                <li key={unikId} className={style.listItem}>
                  {isOpenForm === unikId ? (
                    <EditForm
                      id={id}
                      unikId={unikId}
                      handleEditSubmit={handleEditSubmit}
                      onClose={() => setIsOpenForm(null)}
                    />
                  ) : (
                    <div className={style.listItemBox}>
                      <p className={style.itemText}>{name}</p>
                      <p className={style.itemText}>{breed}</p>
                      <p className={style.itemText}>{years}</p>
                      <p className={style.itemText}>{birthday}</p>
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
                  )}
                </li>
              );
            }
          )}
        </ol>
      ) : null}
    </div>
  );

};
