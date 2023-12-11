
interface ItemsProps {
  total: number; 
}

export const CartForm: React.FC<ItemsProps> = (props) => {
  const priceFormator = new Intl.NumberFormat();
  return (
    <div className="cart__form center">
      <h3 className="cart__form_name">Оформление заказа</h3>
      <form action="#" className="cart__form_input">
        <input
          placeholder="Имя Фамилия"
          type="text"
          className="cart__form_input_name"
        />
        <input
          placeholder="+ 7 904 000 00 00"
          type="tel"
          className="cart__form_input_telephone"
        />
        <input
          placeholder="Адрес доставки"
          type="text"
          className="cart__form_input_adress"
        />
      </form>
      <p className="cart__form_price">Итого: {priceFormator.format(props.total)} руб.</p>
      <form action="#" className="cart__form_buttontwo_box">
        <button onClick={event => event.preventDefault() } className="cart__form_buttontwo">Оформить заказ</button>
      </form>
    </div>
  );
};
