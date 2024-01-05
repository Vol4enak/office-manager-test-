import style from "./topBar.module.css";
import css from "../СardList/CardList.module.css";
import { CardList } from "../СardList/СardList";
import { useState } from "react";
import { IoBan } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";
import { EditForm } from "../formCard/editForm/editForm";
export const TopBar = ({ onDelete, onSubmit, handleEditSubmit, item }) => {
  const [elements, setElements] = useState([]);
  const [isOpenForm, setIsOpenForm] = useState(null);

  const handleAddElement = (id) => {
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
    <div>
      <div className={style.box}>
    
        <button type="button" onClick={handleAddElement}>
          Добавить элемент
        </button>
        <p>сотрування за</p>
        <ul className={style.list}>
          <li className={style.listItem}>
            <label>
              <input type="checkbox" name="" id="" />
              датою
            </label>
          </li>
          <li className={style.listItem}>
            <label>
              <input type="checkbox" name="" id="" /> віком
            </label>
          </li>
        </ul>
      </div>
      <CardList
        elements={elements}
        item={item}
        onDelete={onDelete}
        onSubmit={onSubmit}
        handleEditSubmit={handleEditSubmit}
      />
    </div>
  );
};
