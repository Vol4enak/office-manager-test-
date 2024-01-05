import css from "../CardList.module.css";
export const CardItem = ({ item, elements, onDelete, onSubmit, handleEditSubmit }) => {

  console.log(elements)

  const getYearWordForm = (numberYears) => {
    if (numberYears !== 1) {
      return "рік";
    } else if (numberYears >= 2 && numberYears <= 4) {
      return "роки";
    } else {
      return "років";
    }
  };

  return (
    <>
      {elements && elements.map((element) => element)}
      {item.map(({ id, birthday, breed, name, years }, index) => (
        <li key={id} className={css.listItem}>
          <div className={css.box}>
            <p>{name}</p>
            <p>{breed}</p>
            <p>{years + " " + getYearWordForm(years)}</p>
            <p>{birthday}</p>
          </div>
        </li>
      ))}
    </>
  );
};
