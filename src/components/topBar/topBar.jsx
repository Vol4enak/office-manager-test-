import style from "./topBar.module.css";
export const TopBar = () => {


  return (
    <div>
      <div className={style.box}>
        <p>сотрування за</p>
        <ul className={style.list}>
          <li className={style.listItem}>
            <label>
              <input type="checkbox" name="" id="" />
              датою
            </label>
          </li>
          <li className={style.listItem}>
            <label>
              <input type="checkbox" name="" id="" /> віком
            </label>
          </li>
        </ul>
      </div>
 
    </div>
  );
};
