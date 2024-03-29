import css from "./App.module.css";
import { useEffect, useState } from "react";
import { Aside } from "./aside/aside";
import { TopBar } from "./topBar/topBar";
import { MainCabinet } from "./mainCabinet/mainCabinet";

export function App() {
  const [btnText, setBtnText] = useState(true);
  const [catsInfo, setCatsInfo] = useState([]);
  const [checkboxes, setCheckboxes] = useState([
    { id: "date", label: "Датою", isChecked: false },
    { id: "age", label: "Віком", isChecked: false },
  ]);
  const message = "There is no fact about this cat yet";
  const deleteInfoCats = (idCatsInfo) => {
    setCatsInfo((prevState) =>
      prevState.filter((catsInfo) => catsInfo.unikId !== idCatsInfo)
    );
    if (catsInfo.length) {
      localStorage.removeItem("catsInfo");
    }
  };
  const formSubmitHandler = (
    id,
    unikId,
    name,
    breed,
    years,
    birthday,
    data
  ) => {
    const cabinet = {
      id,
      unikId,
      name,
      breed,
      years,
      birthday,
      data: data !== null ? data : message,
    };

    setCatsInfo([cabinet, ...catsInfo]);
  };

  const handleEditSubmit = (id, unikId, name, breed, years, birthday, data) => {
    setCatsInfo((prevItems) =>
      prevItems.map((item) =>
        item.unikId === unikId
          ? { ...item, id, name, breed, years, birthday, data }
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
    const catInfo = localStorage.getItem("catsInfo");
    if (catInfo) {
      const parsetCab = JSON.parse(catInfo);
      setCatsInfo(parsetCab);
    }
  }, []);

  const handleBtn = () => {
    setBtnText(!btnText);
  };

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, isChecked: !checkbox.isChecked }
          : checkbox
      )
    );
  };

  return (
    <div>
      <div className={css.box}>
        <Aside isBtnActive={btnText} />
        <button className={css.toggleButton} onClick={handleBtn}>
          {btnText ? "hide text" : "show text"}
        </button>
        <TopBar
          handleCheckboxChange={handleCheckboxChange}
          checkboxes={checkboxes}
        />

        <MainCabinet
          checkboxes={checkboxes}
          catsInfo={catsInfo}
          deleteInfoCats={deleteInfoCats}
          onSubmit={formSubmitHandler}
          handleEditSubmit={handleEditSubmit}
        />
      </div>
    </div>
  );
}

