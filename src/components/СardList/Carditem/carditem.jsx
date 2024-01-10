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
  const toggleEditForm = (itemId) => {
    setIsOpenForm((prev) => (prev === itemId ? null : itemId));

  };

  const getFilteredAndSortedItems = () => {
    const sordByAge = checkboxes.find((checkbox) => checkbox.id === "date");
    const sortByDate = checkboxes.find((checkbox) => checkbox.id === "age");
    const compareAges = (a, b) => a.years - b.years;
    let filteredItems = [...items];

    if (sordByAge && sordByAge.isChecked) {
      const today = new Date().setHours(0, 0, 0, 0);
      filteredItems = filteredItems.filter(
        (item) => new Date(item.birthday).setHours(0, 0, 0, 0) === today
      );
    }

    if (sortByDate && sortByDate.isChecked) {
      filteredItems = filteredItems.filter((item) => {
        if (!item.years) {
          return false;
        }

        return item.years <= 2;
      });
      filteredItems.sort(compareAges);
    }

    return filteredItems;
  };
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  return (
    <div className={style.container}>
      {items && items.length ? (
        <ol className={style.cardList}>
          {getFilteredAndSortedItems().map(
            ({ id, unikId, birthday, breed, name, years, data }) => {
              return (
                <li key={unikId} className={style.cardListItem}>
                  {isOpenForm === unikId ? (
                    <EditForm
                      id={id}
                      birthday={birthday}
                      breed={breed}
                      name={name}
                      years={years}
                      data={data}
                      unikId={unikId}
                      handleEditSubmit={handleEditSubmit}
                      onClose={() => setIsOpenForm(null)}
                    />
                  ) : (
                    <>
                      <div className={style.listItemBox}>
                        <p
                          className={style.cardItemText}
                          style={{ backgroundColor: getRandomHexColor() }}
                        >
                          {name}
                        </p>
                        <p
                          className={style.cardItemText}
                          style={{ backgroundColor: getRandomHexColor() }}
                        >
                          {breed}
                        </p>
                        <p
                          className={style.cardItemText}
                          style={{ backgroundColor: getRandomHexColor() }}
                        >
                          {years}
                        </p>
                        <p
                          className={style.cardItemText}
                          style={{ backgroundColor: getRandomHexColor() }}
                        >
                          {birthday}
                        </p>

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

                      <p
                        className={style.factText}
                        style={{ backgroundColor: getRandomHexColor() }}
                      >
                        {data}
                      </p>
                    </>
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
