import css from "../СardList/CardList.module.css";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FormCard } from "../formCard/formCard";
import { nanoid } from "nanoid";
import { CardItem } from "../СardList/Carditem/carditem.jsx";

export const MainCabinet = ({
  cabinets,
  onSubmit,
  onDelete,
  handleEditSubmit,
}) => {
  const [elements, setElements] = useState([]);
  const [isOpenForm, setIsOpenForm] = useState(null);

  const toggleEditForm = (itemId) => {
    setIsOpenForm((prev) => (prev === itemId ? null : itemId));
  };

  const handleAddElement = () => {
    const uniqueKey = nanoid();
    const newElement = (
      <div key={uniqueKey} className={css.cabBox}>
        <h2>Kaбінет</h2>
        <button
          type="button"
          className={css.addInfoBtn}
          onClick={() => toggleEditForm(uniqueKey)}
        >
          <IconContext.Provider value={{ size: "1.5em" }}>
            <IoAdd />
          </IconContext.Provider>
        </button>
      </div>
    );

    setElements((prevElements) => [
      ...prevElements,
      { element: newElement, key: uniqueKey },
    ]);
  };

  return (
    <div className={css.wrapper}>
      <button
        className={css.addBtn}
        type="button"
        onClick={() => handleAddElement(nanoid())}
      >
        Добавить элемент
      </button>

      {elements.map(({ element, key }) => (
        <div key={key} className={css.boxWrapper}>
          {element}
          {isOpenForm === key && (
            <FormCard
              onSubmit={(id, unikId, name, breed, years, birthday) =>
                onSubmit(id, unikId, name, breed, years, birthday)
              }
              id={key}
              unikId={nanoid()}
              onClose={() => setIsOpenForm(null)}
            />
          )}

          <CardItem
            handleEditSubmit={handleEditSubmit}
            onDelete={onDelete}
            items={cabinets.filter((cabinet) => cabinet.id === key) || []}
          />
        </div>
      ))}
    </div>
  );
};
// localStorage.clear()
