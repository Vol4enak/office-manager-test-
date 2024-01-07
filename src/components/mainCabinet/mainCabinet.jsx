import css from "../СardList/CardList.module.css";
import { useState, useEffect } from "react";
import { IoAdd, IoBan } from "react-icons/io5";

import { FormCard } from "../formCard/formCard";
import { nanoid } from "nanoid";

import { CardItem } from "../СardList/Carditem/carditem.jsx";

export const MainCabinet = ({
  catsInfo,
  onSubmit,
  deleteInfoCats,
  handleEditSubmit,
}) => {
  const [cabinets, setCabinets] = useState([]);
  const [isOpenForm, setIsOpenForm] = useState(null);
  const toggleEditForm = (itemId) => {
    setIsOpenForm((prev) => (prev === itemId ? null : itemId));
  };

  const deleteCab = (idCabinets) => {
    deleteInfoCats(idCabinets);
    setCabinets((prevState) =>
      prevState.filter((cabinet) => cabinet.key !== idCabinets)
    );
    if (cabinets.length) {
      localStorage.removeItem("cabinets");
    }
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

  const handleAddElement = () => {
    const uniqueKey = nanoid();

    const newCabinet = {
      id: uniqueKey,
      key: cabinets.length + 1,
    };

    setCabinets((prevCabinets) => [...prevCabinets, newCabinet]);
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
      {cabinets && cabinets.length ? (
        <>
          {cabinets.map(({ id, key }) => (
            <div key={id} className={css.boxWrapper}>
              <div key={key} className={css.cabBox}>
                <h2>{"Kaбінет " + key}</h2>
                <button
                  type="button"
                  className={css.addInfoBtn}
                  onClick={() => toggleEditForm(key)}
                >
                  <IoAdd />
                </button>
                <button
                  className={css.addInfoBtn}
                  type="button"
                  onClick={() => deleteCab(key)}
                >
                  <IoBan />
                </button>
              </div>

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
                onSubmit={onSubmit}
                handleEditSubmit={handleEditSubmit}
                deleteInfoCats={deleteInfoCats}
                items={catsInfo.filter((cabinet) => cabinet.id === key) || []}
              />
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};
// localStorage.clear();
