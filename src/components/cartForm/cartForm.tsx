export const CartForm = () => {
  return (
    <section className="section-formAction">
      <div className="cart__form">
        <h3 className="cart__form_name">Пожалуйста, представьтесь</h3>
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
          <button
            onClick={(event) => event.preventDefault()}
            className="cart__form_buttontwo"
          >
            Оформить заказ
          </button>
        </form>
      </div>
    </section>
  );
};
