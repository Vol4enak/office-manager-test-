import style from "./topBar.module.css";
import { useTheme } from "../service/hooks/changeTheme";
export const TopBar = ({ handleCheckboxChange, checkboxes }) => {
  const { theme, setTheme } = useTheme();
  const handleLightSwitcher = () => {
    setTheme("light");
  };
  const handleDarkSwitcher = () => {
    setTheme("dark");
  };
  return (
    <div className={style.topBar}>
      <div className={style.topBarBox}>
        <p>сотрування за</p>
        <ul className={style.topBarList}>
          <li className={style.topBarListItem}>
            {checkboxes.map((checkbox) => (
              <label key={checkbox.id}>
                <input
                  className={style.topBarInput}
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
      <div className={style.topBarBtnWraper}>
        <button type="button" onClick={handleLightSwitcher}>
          Light
        </button>
        <button type="button" onClick={handleDarkSwitcher}>
          Dark
        </button>
      </div>
    </div>
  );
};
