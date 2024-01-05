import css from "../СardList/CardList.module.css";

import { useState } from "react";
import { IoBan } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";
import { EditForm } from "../formCard/editForm/editForm";
// import { GetFact } from "../formCard/getFact";

export const MainCabinet = ({ onDelete, onSubmit, handleEditSubmit, id }) => {
  const [elements, setElements] = useState([]);
  const [isOpenForm, setIsOpenForm] = useState(null);

  const handleAddElement = () => {
    const newElement = (
      <div key={elements.length}>
        <h2>Kaбінет</h2>
        {/* Добавьте ваши кнопки и компоненты */}
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
        {/* <GetFact /> */}
        {isOpenForm === id && (
          <EditForm
            handleEditSubmit={handleEditSubmit}
            onSubmit={onSubmit}
            id={id}
            onClose={() => {
              setIsOpenForm(null);
            }}
          />
        )}
      </div>
    );

    setElements([...elements, newElement]);
    setIsOpenForm(elements.length); // Открываем форму для нового элемента
  };

  const toggleEditForm = (itemId) => {
    if (isOpenForm === itemId) {
      setIsOpenForm(null);
    } else {
      setIsOpenForm(itemId);
    }
  };

  return (
    <div className={css.helperBox}>
      <button className={css.addBtn} type="button" onClick={handleAddElement}>
        Добавить элемент
      </button>
      {elements.map((element) => element)}
    </div>
  );
};
