import css from "./aside.module.css";
import { CiStar } from "react-icons/ci";
export const Aside = ({ isBtnActive }) => {
  return (
    <aside className={css.aside} style={{width: isBtnActive ? "80px" : "25px"}}>
      <ul className={css.listIcons}>
        <li>
          <CiStar />
        </li>

        <li>
          <CiStar />
        </li>
        <li>
          <CiStar />
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
