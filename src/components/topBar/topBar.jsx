import css from "./topBar.module.css";

export const TopBar = () => {
  return (
    <div className={css.box}>
      <p>сотрування за</p>
      <ul className={css.list}>
        <li className={css.listItem}>
          <label>
            <input type="checkbox" name="" id="" />
            датою
          </label>
        </li>
        <li className={css.listItem}>
          <label>
            <input type="checkbox" name="" id="" /> віком
          </label>
        </li>
      </ul>
    </div>
  );
};
