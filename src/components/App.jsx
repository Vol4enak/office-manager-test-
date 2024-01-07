import css from "./App.module.css";
import { useEffect, useState } from "react";
import { Aside } from "./aside/aside";
import { TopBar } from "./topBar/topBar";
import { MainCabinet } from "./mainCabinet/mainCabinet";

export function App() {
  const [btnText, setBtnText] = useState(true);
  const [catsInfo, setCatsInfo] = useState([]);
  const deleteInfoCats = (idCatsInfo) => {
    setCatsInfo((prevState) =>
      prevState.filter((catsInfo) => catsInfo.unikId !== idCatsInfo)
    );
    if (catsInfo.length) {
      localStorage.clear();
    }
  };
  //   const deleteInfoCats = (unikid) => {
  //     deleteCabinet(unikid, catsInfo, setCatsInfo);
  //   };
  // const deleteCab = (unikid, cabinets, setCabinets) => {
  //   console.log(cabinets + "кабинеты в функции");
  //   deleteCabinet(unikid, cabinets, setCabinets);
  // };
  const formSubmitHandler = (id, unikId, name, breed, years, birthday) => {
    console.log(birthday);
    const cabinet = {
      id,
      unikId,
      edit: false,
      name,
      breed,
      years,
      birthday,
    };

    setCatsInfo([cabinet, ...catsInfo]);
  };

  const handleEditSubmit = (id, unikId, name, breed, years, birthday) => {
    setCatsInfo((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, unikId, name, breed, years, birthday, edit: false }
          : item
      )
    );
  };

  useEffect(() => {
    if (!catsInfo.length) {
      return;
    }

    localStorage.setItem("catsInfo", JSON.stringify(catsInfo));
  }, [catsInfo]);

  useEffect(() => {
    const cabinet = localStorage.getItem("catsInfo");
    if (cabinet) {
      const parsetCab = JSON.parse(cabinet);
      setCatsInfo(parsetCab);
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

      <MainCabinet
        catsInfo={catsInfo}
        deleteInfoCats={deleteInfoCats}
        onSubmit={formSubmitHandler}
        handleEditSubmit={handleEditSubmit}
      />
    </div>
  );
}
// localStorage.clear();
