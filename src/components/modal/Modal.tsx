import { useAppDispatch } from "../../hooks";
import { removeCart } from "../../store/slice";
interface User {
  phone?: number;
  userName?: string;
  
}
export const Modal = ({phone, userName}:User) => {
  const dispatch = useAppDispatch();
  
  return (
    <div className="modal__wrapper">
      <div className="modal__window">
        <div className="modal__close" onClick={() => dispatch(removeCart())}>
          &#215;
        </div>
        <h2 className="modal__title">
          Спасибо <strong>{userName}</strong>, ваш заказ <strong>№165796</strong>{" "}
          оформлен.
        </h2>
        <p className="modal__answer">
          В ближайшее время мы свяжемся с вами по телефону <strong>{phone}</strong> для
          его подтверждения.
        </p>
      </div>
    </div>
  );
};
