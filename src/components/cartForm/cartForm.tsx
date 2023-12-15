export const CartForm = () => {
  return (
    <section className="section-formAction">
      <div className="cart__form">
        <h3 className="cart__form_title">Пожалуйста, представьтесь</h3>
        <form action="#" className="cart__form_input">
          <input
            placeholder="Ваше имя"
            type="text"
            className="cart__form_input-name"
          />
          <input
            placeholder="Телефон"
            type="tel"
            className="cart__form_input-telephone"
          />
          <input
            placeholder="Email"
            type="text"
            className="cart__form_input-adress"
          />
        <button
           placeholder="Оформить заказ"
           className="cart__form_input-button"
           type="submit"
           onClick={(event) => event.preventDefault()}>
            Оформить заказ
           </button>           
        </form>
      </div>
    </section>
  );
};
