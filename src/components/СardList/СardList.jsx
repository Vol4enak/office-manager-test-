import css from "./CardList.module.css";
import { CardItem } from "./Carditem/carditem";
export const CardList = ({ item, onDelete, onSubmit, handleEditSubmit }) => {
  

  return (
    <div className={css.container}>
      {item.length ? (
        <>
          <ul className={css.list}>
            <CardItem
              item={item}
              onDelete={onDelete}
              onSubmit={onSubmit}
              handleEditSubmit={handleEditSubmit}
            />
           
          </ul>
        </>
      ) : null}
    </div>
  );
};
