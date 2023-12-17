interface ItemsCart {
  id: string;
  url: string;
  title: string;
  count: number;
  total: number;
}
interface ItemsProps {
  item: ItemsCart;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  removeitem: (id: string) => void;
}
export const CartItem = ({
  item,
  increase,
  decrease,
  removeitem
}: ItemsProps) => {
  const { id, url, title, count, total } = item;
  const priceFormator = new Intl.NumberFormat();

  return (
    <div className="cart__item">
      <img
        className="cart__img"
        src={url}
        width="135"
        height="145"
        alt="table"
      />
      <h4 className="cart__item_name">{title}</h4>
      <div className="InputControls">
        <span
          onClick={() => {
            decrease(id);
          }}
          className="up"
        >
          &#8212;
        </span>
        <input
          className="cart__input"
          readOnly
          value={count}
          type="number"
          min="1"
          max="10"
        />
        <span
          onClick={() => {
            increase(id);
          }}
          className="down"
        >
          &#43;
        </span>
      </div>
      <span className="cart__item_total">
        {priceFormator.format(total)} &#8381;
      </span>
      <span onClick={() => removeitem(id)} className="cart__item_link">
        &#215;
      </span>
    </div>
  );
};
