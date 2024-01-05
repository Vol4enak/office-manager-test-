import css from "./App.module.css";
import { useEffect, useState } from "react";
import { Aside } from "./aside/aside";
import { CardList } from "./СardList/СardList";
import { TopBar } from "./topBar/topBar";
import { FormCard } from "./formCard/formCard";
import { nanoid } from "nanoid";
export function App() {
  const [btnText, setBtnText] = useState(true);
  const [cabinets, setCabinets] = useState([]);

  const deleteCad = (idCadinet) => {
    setCabinets((prevState) =>
      prevState.filter((cadinet) => cadinet.id !== idCadinet)
    );
  };
  const formSubmitHandler = (name, breed, years, birthday) => {
    const cabinet = {
      id: nanoid(),
      edit:false,
      name,
      breed,
      years,
      birthday,
    };

    setCabinets([cabinet, ...cabinets]);
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

  return (
    <div className={css.box}>
      <Aside isBtnActive={btnText} />
      <button className={css.toggleButton} onClick={handleBtn}>
        {btnText ? "hide text" : "show text"}
      </button>
      <TopBar />
      <FormCard onSubmit={formSubmitHandler} />
      <CardList item={cabinets} onDelete={deleteCad} />
    </div>
  );
}
