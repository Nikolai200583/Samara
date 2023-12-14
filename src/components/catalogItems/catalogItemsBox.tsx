import { CatalogItems } from "../items/items";
import { ITEMS } from "../../Const";

interface NewTodoFormPropsSort {
  sort: string | null;
}

export const CatalogItemsBox: React.FC<NewTodoFormPropsSort> = ({ sort }) => {
  switch (sort) {
    case "дешевые":
      ITEMS.sort(function (a, b) {
        return a.price - b.price;
      });
      break;
    case "дорогие":
      ITEMS.sort(function (a, b) {
        return b.price - a.price;
      });
      break;
    default:
      break;
  }

  return (
    <main className="catalogItemsBox center">
      {ITEMS.map((item) => (
        <CatalogItems
          key={item.id}
          id={item.id}
          url={item.image}
          alt={item.alt}
          title={item.title}
          count={item.count}
          price={item.price}
          total={item.total}
        />
      ))}
    </main>
  );
};
