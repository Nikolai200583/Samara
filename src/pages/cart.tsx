import { Header } from "../components/header/header";
import { CartContainer } from "../components/cart/cart";
import { CartForm } from "../components/cartForm/cartForm";
import { Modal } from "../components/modal/Modal";
import { useState } from "react";

interface User {
  phone?: number;
  user?: string;
  mail?: string; 
}
export function Cart() {
  const [modal, isModal] = useState<boolean>(false);
  const [user, setUser] = useState<User>({}); 
 
 const phone = user.phone
 const userName = user.user
  return (
    <div className="wrapper">
      <Header title={"Корзина"} />
      <CartContainer />
      <CartForm isModal={isModal} setUser={setUser} />
      {modal ? <Modal phone={phone} userName={userName} /> : ""}
    </div>
  );
}
