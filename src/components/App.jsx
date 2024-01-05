import css from "./App.module.css";
// import style from "./СardList/CardList.module.css";
import { useEffect, useState } from "react";
// import { IoBan } from "react-icons/io5";
// import { MdEdit } from "react-icons/md";
// import { IconContext } from "react-icons";
import { Aside } from "./aside/aside";
import { CardList } from "./СardList/СardList";
import { TopBar } from "./topBar/topBar";
import { FormCard } from "./formCard/formCard";
import { MainCabinet } from "./mainCabinet/mainCabinet";
// import { EditForm } from "./formCard/editForm/editForm";
import { nanoid } from "nanoid";
export function App() {
  const [btnText, setBtnText] = useState(true);
  const [cabinets, setCabinets] = useState([]);
  // const [elements, setElements] = useState([]);
  // const [isOpenForm, setIsOpenForm] = useState(null);
  const deleteCad = (idCadinet) => {
    setCabinets((prevState) =>
      prevState.filter((cadinet) => cadinet.id !== idCadinet)
    );
    if (cabinets.length) {
      localStorage.clear();
    }
  };
  const formSubmitHandler = (name, breed, years, birthday) => {
    const cabinet = {
      id: nanoid(),
      edit: false,
      name,
      breed,
      years,
      birthday,
    };
    console.log(cabinet);
    setCabinets([cabinet, ...cabinets]);
  };

  const handleEditSubmit = (id, name, breed, years, birthday) => {
    setCabinets((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, name, breed, years, birthday, edit: false }
          : item
      )
    );
  };

  // Сохранение данных
  useEffect(() => {
    if (!cabinets.length) {
      return;
    }

    localStorage.setItem("cabinets", JSON.stringify(cabinets));
  }, [cabinets]);

  useEffect(() => {
    const cabinet = localStorage.getItem("cabinets");
    if (cabinet) {
      const parsetCab = JSON.parse(cabinet);
      setCabinets(parsetCab);
    }
  }, []);

  const handleBtn = () => {
    setBtnText(!btnText);
  };

//   const toggleEditForm = (itemId) => {
//     if (isOpenForm === itemId) {
//       setIsOpenForm(null);
//     } else {
//       setIsOpenForm(itemId);
//     }
//   };
//   const handleAddElement = () => {
  
//    return elements.map((element) => (
//     <div key={element.id}>
//       <h2>Kaбінет</h2>
//       {/* Добавьте ваши кнопки и компоненты */}
//      <button
//           className={style.button}
//           type="button"
//           onClick={() => {
//             deleteCad(id);
//           }}
//         >
//           <IconContext.Provider value={{ size: "1.5em" }}>
//             <IoBan />
//           </IconContext.Provider>
//         </button>
//         <button
//           className={style.button}
//           type="button"
//           onClick={() => {
//             toggleEditForm(nanoid());
//           }}
//         >
//           <IconContext.Provider value={{ size: "1.5em" }}>
//             <MdEdit />
//           </IconContext.Provider>
//         </button>
//       {/* <GetFact /> */}
//       {element.isOpenForm && (
//         <EditForm
//           handleEditSubmit={handleEditSubmit}
//           onSubmit={formSubmitHandler}
//           id={element.id}
//           onClose={() => {}}
//         />
//       )}
//     </div>
//   ));
// };

  const zxc = () => {
  console.log(123)
}


  return (
    <div className={css.box}>
      <Aside isBtnActive={btnText} />
      <button className={css.toggleButton} onClick={handleBtn}>
        {btnText ? "hide text" : "show text"}
      </button>
      <TopBar
        item={cabinets}
        onDelete={deleteCad}
        onSubmit={formSubmitHandler}
        handleEditSubmit={handleEditSubmit}
      />
      {false && <FormCard onSubmit={formSubmitHandler} />}

      <MainCabinet />

     
    </div>
  );
}
