import css from "../СardList/CardList.module.css";
import { useState } from "react";
import { IoBan, IoAdd } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";
import { CardItem } from "../СardList/Carditem/carditem.jsx";
// import { EditForm } from "../formCard/editForm/editForm";
import { FormCard } from "../formCard/formCard";
import { nanoid } from "nanoid";
// import { GetFact } from "../formCard/getFact";

export const MainCabinet = ({ item, onDelete, onSubmit, handleEditSubmit }) => {
  const [elements, setElements] = useState([]);
  const [isOpenForm, setIsOpenForm] = useState(null);
  const toggleEditForm = (itemId) => {
    if (isOpenForm === itemId) {
      setIsOpenForm(null);
    } else {
      setIsOpenForm(itemId);
    }
  };

  const handleAddElement = () => {
    const uniqueKey = nanoid();
    const newElement = (
      <div key={uniqueKey} className={css.cabBox}>
        <h2>Kaбінет</h2>
        <button
          type="button"
          className={css.addInfoBtn}
          onClick={() => {
            toggleEditForm(uniqueKey);
          }}
        >
          <IconContext.Provider value={{ size: "1.5em" }}>
            <IoAdd />
          </IconContext.Provider>
        </button>
      </div>
    );

    setElements([...elements, { element: newElement, key: uniqueKey }]);

    setIsOpenForm(elements.length); // Открываем форму для нового элемента
  };

  return (
    <div className={css.wrapper}>
      <button className={css.addBtn} type="button" onClick={handleAddElement}>
        Добавить элемент
      </button>

      {elements.map(({ element, key }) => {
        return (
          <div key={key} className={css.boxWrapper}>
            {element}

            {isOpenForm === key && (
              <FormCard
                handleEditSubmit={handleEditSubmit}
                onSubmit={onSubmit}
                id={key}
                onClose={setIsOpenForm}
              />
            )}
            <CardItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

// <button
//         className={css.button}
//         type="button"
//         onClick={() => {
//           onDelete(id);
//           zxc(id);
//         }}
//       >
//         <IconContext.Provider value={{ size: "1.5em" }}>
//           <IoBan />
//         </IconContext.Provider>
//       </button>
//       <button
//         className={css.button}
//         type="button"
//         onClick={() => {
//           toggleEditForm(id);
//         }}
//       >
//         <IconContext.Provider value={{ size: "1.5em" }}>
//           <MdEdit />
//         </IconContext.Provider>
//       </button>
//       {/* <GetFact /> */}
