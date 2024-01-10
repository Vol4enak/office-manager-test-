import css from "./aside.module.css";
import { TiStarFullOutline } from "react-icons/ti";
export const Aside = ({ isBtnActive }) => {
  return (
    <aside
      className={css.aside}
      style={{
        width: isBtnActive ? "80px" : "25px",
        marginRight: !isBtnActive && "85px",
      }}
    >
      <ul className={css.listIcons}>
        <li>
          <TiStarFullOutline className={css.svg} />
        </li>

        <li>
          <TiStarFullOutline className={css.svg} />
        </li>
        <li>
          <TiStarFullOutline className={css.svg} />
        </li>
      </ul>
      {isBtnActive ? (
        <ul className={css.listText}>
          <li>star1</li>
          <li>star2</li>
          <li>star3</li>
        </ul>
      ) : null}
    </aside>
  );
};
