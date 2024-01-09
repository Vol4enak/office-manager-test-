import style from "./topBar.module.css";

export const TopBar = ({ handleCheckboxChange, checkboxes }) => {
  return (
    <div>
      <div className={style.topBarBox}>
        <p>сотрування за</p>
        <ul className={style.topBarList}>
          <li className={style.topBarListItem}>
            {checkboxes.map((checkbox) => (
              <label key={checkbox.id}>
                <input
                  type="checkbox"
                  checked={checkbox.isChecked}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                />
                {checkbox.label}
              </label>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};
