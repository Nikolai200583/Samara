import { Header } from "../components/header/header";
import { CartContainer } from "../components/cart/cart";
import { CartForm } from "../components/cartForm/cartForm";
import { Modal } from "../components/modal/Modal";
import { useState } from "react";

export function Cart() {
  const [modal, isModal] = useState(false);
  const [user, setUser] = useState({});

  return (
    <div className="wrapper">
      <Header title={"Корзина"} />
      <CartContainer />
      <CartForm isModal={isModal} setUser={setUser} />
      {modal ? <Modal user={user} /> : ""}
    </div>
  );
}
