import { SubmitHandler, useForm } from "react-hook-form";
import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
import { SetStateAction, Dispatch, useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
const maskGenerator = createDefaultMaskGenerator("+9(999) 999-99-99");

export const CartForm = ({ isModal, setUser, setCount, count }: cartProps) => {
  const [value, setValue] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = () => {
    const currentForm = form.current;
    if (currentForm == null) return;
    console.log(currentForm);
    emailjs
      .sendForm(
        "service_fvph3fn",
        "template_irwzc6i",
        currentForm,
        "kOzO1317prxpK-yvx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm<MyForm>({
    mode: "onBlur"
  });

  function counter() {
    setCount(count + 1);
    isModal(true);
  }

  const onSubmit: SubmitHandler<MyForm> = (data) => {
    sendEmail();
    setUser(data);
    reset();
  };

  return (
    <section className="section-formAction">
      <div className="cart__form">
        <h3 className="cart__form_title">Пожалуйста, представьтесь</h3>

        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="cart__form_input"
        >
          <div>
            <input
              style={{ visibility: "hidden", position: "absolute" }}
              name="count"
              type="number"
              value={count}
            />
            <input
              {...register("firstName", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 3,
                  message: "Минимум 3 значения"
                }
              })}
              placeholder="Ваше имя"
              type="text"
              className="cart__form_input-name"
            />
            <div className="errorMessage">
              {errors?.firstName && <p>{errors?.firstName?.message}</p>}
            </div>
          </div>
          <div>
            <MaskedInput
              maskGenerator={maskGenerator}
              value={value}
              {...register("phone", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  value:
                    /(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d/,
                  message: "Не корректный номер телефона"
                }
              })}
              placeholder="Телефон"
              type="tel"
              className="cart__form_input-telephone"
              onChange={setValue}
            />
            <div className="errorMessage">
              {errors?.phone && <p>{errors?.phone?.message}</p>}
            </div>
          </div>
          <div>
            <input
              {...register("mail", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                  message: "Не корректный адрес электронной почты"
                }
              })}
              placeholder="Email"
              type="text"
              className="cart__form_input-adress"
            />
            <div className="errorMessage">
              {" "}
              {errors?.mail && <p>{errors?.mail?.message}</p>}
            </div>
          </div>

          <button
            placeholder="Оформить заказ"
            className="cart__form_input-button"
            type="submit"
            disabled={!isValid}
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
