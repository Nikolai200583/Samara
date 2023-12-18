import { useForm } from "react-hook-form";
import React, { SetStateAction, Dispatch } from "react";

interface MyForm {
  firstName: string;
  phone: number;
  mail: string;
}
interface User {
  phone?: number;
  user?: string;
  mail?: string;
}
interface cartProps {
  isModal: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<User>>;
  setCount: Dispatch<SetStateAction<number>>;
  count: number;
}

export const CartForm = ({ isModal, setCount, count }: cartProps) => {
  const {
  
    formState: { isValid },
   
  } = useForm<MyForm>({
    mode: "onBlur"
  });

  function counter() {
    setCount(count + 1);
    isModal(true);
  }

  // const onSubmit: SubmitHandler<MyForm> = (data) => {

  //   // const mail = `mailto:${data.mail}?subject=`
  //   // const header = encodeURIComponent(`"Тестовое задание, заказ №${count}"`)
  //   // const body = encodeURIComponent(`"${data.firstName}, заказ №${count} сформирован. В ближайшее время наш специалист свяжется с вами по телефону ${data.phone}"`);
  //   // window.open(mail + header + "&body=" + body);
  //   setUser(data);
  //   reset();
  // };

  return (
    <section className="section-formAction">
      <div className="cart__form">
        <h3 className="cart__form_title">Пожалуйста, представьтесь</h3>
      
        <form
          action="sendmail.php"
          method="POST"
          // onSubmit={handleSubmit(onSubmit)}
          className="cart__form_input"
        >
          <div>
            <input
              // {...register("firstName", {
              //   required: "Поле обязательно к заполнению",
              //   minLength: {
              //     value: 3,
              //     message: "Минимум 3 значения"
              //   }
              // })}
              placeholder="Ваше имя"
              type="text"
              className="cart__form_input-name"
            />
            {/* <div className="errorMessage">
              {errors?.firstName && <p>{errors?.firstName?.message}</p>}
            </div> */}
          </div>
          <div>
            <input
              // {...register("phone", {
              //   required: "Поле обязательно к заполнению",
              //   pattern: {
              //     value:
              //       /(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d/,
              //     message: "Не корректный номер телефона"
              //   }
              // })}
              placeholder="Телефон"
              type="tel"
              className="cart__form_input-telephone"
            />
            {/* <div className="errorMessage">
              {errors?.phone && <p>{errors?.phone?.message}</p>}
            </div> */}
          </div>
          <div>
            <input
              // {...register("mail", {
              //   required: "Поле обязательно к заполнению",
              //   pattern: {
              //     value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
              //     message: "Не корректный адрес электронной почты"
              //   }
              // })}
              placeholder="Email"
              type="text"
              className="cart__form_input-adress"
            />
            {/* <div className="errorMessage">
              {" "}
              {errors?.mail && <p>{errors?.mail?.message}</p>}
            </div> */}
          </div>

          <button
            placeholder="Оформить заказ"
            className="cart__form_input-button"
            // type="submit"
            // disabled={!isValid}
            onClick={counter}
            style={{
              backgroundColor: isValid ? "#296DC1" : "rgba(41, 109, 193, 0.5)"
            }}
          >
            Оформить заказ
          </button>
        </form>
      </div>
    </section>
  );
};
