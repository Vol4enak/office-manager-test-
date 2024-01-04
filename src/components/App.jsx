import css from "./App.module.css";
import { useState } from "react";
import { Aside } from "./aside/aside";
import { CardList } from "./СardList/СardList";
import { TopBar } from "./topBar/topBar";
import { FormCard } from "./formCard/formCard";
import { downloadJsonFile } from "./service/addToJson";
import { nanoid } from "nanoid";
export const App = () => {
  const [btnText, setBtnText] = useState(true);
  const [cabinet, setCabinet] = useState([]);

  const formSubmitHandler = (name, breed, years, birthday) => {
    const cabinets = {
      id: nanoid(),
      name,
      breed,
      years,
      birthday,
    };

    setCabinet([cabinets, ...cabinet]);
  };
  downloadJsonFile(cabinet);
  const handleBtn = () => {
    setBtnText(!btnText);
  };
  const deleteCad = (idCadinet) => {
    setCabinet((prevState) =>
      prevState.filter((cadinet) => cadinet.id !== idCadinet)
    );
  };
  return (
    <div className={css.box}>
      <Aside isBtnActive={btnText} />
      <button className={css.toggleButton} onClick={handleBtn}>
        {btnText ? "hide text" : "show text"}
      </button>
      <TopBar />
      <FormCard onSubmit={formSubmitHandler} />
      <CardList item={cabinet} onDelete={deleteCad} />
    </div>
  );
};
