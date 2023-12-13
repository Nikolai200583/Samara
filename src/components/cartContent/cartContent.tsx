
import { CartItem } from "../cartItem/cartItem";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { removeCart } from "../../store/slice";
interface ItemsCart {
  id: string;
  url: string;
  title: string; 
  count: number;
  price: number;
  total: number
}
interface ItemsProps {
  items: ItemsCart[],
  allTotal:number,
  increase: (id: string) => void;
  decrease: (id: string) => void;  
  removeitem: (id: string) => void;
}
export const CartContent: React.FC<ItemsProps> = (props) => {
  const { increase, decrease, items, removeitem, allTotal } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigator = () => {
    navigate("/");
  };
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
     <span className="cart__form_price">Сумма {priceFormator.format(allTotal)} &#8381;</span>
      {/* <div className="cart__form_button">
        <button
          onClick={() => dispatch(removeCart())}
          className="cart__button_clear"
        >
          Очистить корзину
        </button>
          <button onClick={() => navigator()} className="cart__button_continue">
          Продолжить покупки
        </button>
      </div> */}
    </div>
  );
};
