import css from "./mainCabinet.module.css";

import { useState, useEffect } from "react";
import { IoAdd } from "react-icons/io5";

import { FormCard } from "../formCard/formCard";
import { nanoid } from "nanoid";

import { CardItem } from "../СardList/Carditem/carditem.jsx";

export const MainCabinet = ({
  catsInfo,
  onSubmit,
  deleteInfoCats,
  handleEditSubmit,
  checkboxes,
}) => {
  const [cabinets, setCabinets] = useState([]);
  const [isOpenForm, setIsOpenForm] = useState(null);
  const [numOfCab, setNumOfCab] = useState(1);
  const toggleEditForm = (itemId) => {
    setIsOpenForm((prev) => (prev === itemId ? null : itemId));
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
      setNumOfCab(parsetCab[parsetCab.length - 1].numOfCab + 1);
      setCabinets(parsetCab);
    }
  }, []);

  const handleAddElement = () => {
    const uniqueKey = nanoid();
    const uniqueId = nanoid();
    const newCabinet = {
      id: uniqueId,
      key: uniqueKey,
      numOfCab,
    };
    setNumOfCab((prevNum) => (prevNum += 1));
    setCabinets((prevCabinets) => [...prevCabinets, newCabinet]);
  };

  return (
    <div className={css.mainCabinetBox}>
      <button
        className={css.addMainBtn}
        type="button"
        onClick={() => handleAddElement(nanoid())}
      >
        Новий кабінет
      </button>
      {cabinets && cabinets.length ? (
        <>
          {cabinets.map(({ id, key, numOfCab }) => (
            <div key={id} className={css.mainCabinetBox_helper}>
              <div key={key} className={css.cabBox}>
                <h2>{"Kaбінет " + numOfCab}</h2>
                <button
                  type="button"
                  className={css.addInfoBtn}
                  onClick={() => toggleEditForm(key)}
                >
                  <IoAdd />
                </button>
              </div>

              {isOpenForm === key && (
                <FormCard
                  onSubmit={onSubmit}
                  id={key}
                  unikId={nanoid()}
                  onClose={() => setIsOpenForm(null)}
                />
              )}

              <CardItem
                checkboxes={checkboxes}
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
