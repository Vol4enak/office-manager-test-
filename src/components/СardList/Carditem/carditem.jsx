import style from "../CardList.module.css";
export const CardItem = ({ item }) => {
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
    <div className={style.container}>
      {item.length ? (
        <ul className={style.list}>
          {item.map(({ id, birthday, breed, name, years }, index) => (
            <li key={id} className={style.listItem}>
              <div className={style.box}>
                <p>{name}</p>
                <p>{breed}</p>
                <p>{years + " " + getYearWordForm(years)}</p>
                <p>{birthday}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
