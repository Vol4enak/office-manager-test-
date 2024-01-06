import css from "./App.module.css";
// import style from "./СardList/CardList.module.css";
import { useEffect, useState } from "react";
// import { IoBan } from "react-icons/io5";
// import { MdEdit } from "react-icons/md";
// import { IconContext } from "react-icons";
import { Aside } from "./aside/aside";
// import { CardList } from "./СardList/СardList";
import { TopBar } from "./topBar/topBar";
import { FormCard } from "./formCard/formCard";
import { MainCabinet } from "./mainCabinet/mainCabinet";

export function App() {
  const [btnText, setBtnText] = useState(true);
  const [cabinets, setCabinets] = useState([]);
  const deleteCad = (idCadinet) => {
    setCabinets((prevState) =>
      prevState.filter((cadinet) => cadinet.id !== idCadinet)
    );
    if (cabinets.length) {
      localStorage.clear();
    }
  };
  const formSubmitHandler = (id, name, breed, years, birthday) => {
    const cabinet = {
      id,
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

  return (
    <div className={css.box}>
      <Aside isBtnActive={btnText} />
      <button className={css.toggleButton} onClick={handleBtn}>
        {btnText ? "hide text" : "show text"}
      </button>
      <TopBar />
      {false && <FormCard onSubmit={formSubmitHandler} />}

      <MainCabinet
        item={cabinets}
        onDelete={deleteCad}
        onSubmit={formSubmitHandler}
        handleEditSubmit={handleEditSubmit}
      />
    </div>
  );
}
