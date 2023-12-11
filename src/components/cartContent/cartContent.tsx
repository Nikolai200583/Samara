
import { CartItem } from "../cartItem/cartItem";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { removeCart } from "../../store/slice";
interface ItemsCart {
  id: string;
  url: string;
  title: string;
  about: string;
  count: number;
  price: number;
  total: number
}
interface ItemsProps {
  items: ItemsCart[],
  increase: (id: string) => void;
  decrease: (id: string) => void;  
  removeitem: (id: string) => void;
}
export const CartContent: React.FC<ItemsProps> = (props) => {
  const { increase, decrease, items, removeitem } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigator = () => {
    navigate("/");
  };
  return (
    <div className="cart__content">
      <div className="cart__name_box">
        <p>Товар</p>
        <p>К-во</p>
      </div>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increase={increase}
          decrease={decrease}          
          removeitem={removeitem}
        />
      ))}
      <div className="cart__form_button">
        <button
          onClick={() => dispatch(removeCart())}
          className="cart__button_clear"
        >
          Очистить корзину
        </button>
          <button onClick={() => navigator()} className="cart__button_continue">
          Продолжить покупки
        </button>
      </div>
    </div>
  );
};
