export const CardList = ({ item, onDelete }) => {
  const zxc = () => {
    for (const items of item) {
      console.log(items);
    }
  };
  zxc();

  return (
    <>
      <ul>
        {item.map(({ id, birthday, breed, name, years }) => (
          <li key={id}>
            <p>{birthday}</p>
            <p>{breed}</p>
            <p>{name}</p>
            <p>{years}</p>
            <button
              type="button"
              onClick={() => {
                onDelete(id);
              }}
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
};
