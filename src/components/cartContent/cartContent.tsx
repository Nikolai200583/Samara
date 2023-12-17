import { CartItem } from "../cartItem/cartItem";
interface ItemsCart {
  id: string;
  url: string;
  title: string;
  count: number;
  price: number;
  total: number;
}
interface ItemsProps {
  items: ItemsCart[];
  allTotal: number;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  removeitem: (id: string) => void;
}
export const CartContent = (props: ItemsProps) => {
  const { increase, decrease, items, removeitem, allTotal } = props;
  const priceFormator = new Intl.NumberFormat();
  return (
    <div className="cart__content center">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increase={increase}
          decrease={decrease}
          removeitem={removeitem}
        />
      ))}
      <span className="cart__form_price">
        Сумма {priceFormator.format(allTotal)} &#8381;
      </span>
    </div>
  );
};
