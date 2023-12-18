import { Header } from "../components/header/header";
import { CartContainer } from "../components/cart/cart";
import { CartForm } from "../components/cartForm/cartForm";
import { Modal } from "../components/modal/Modal";
import React, {SetStateAction, Dispatch, useState } from 'react';


interface User {
  phone?: number;
  firstName?: string;
  mail?: string;
}
interface cartProps {
  setCount: Dispatch<SetStateAction<number>>;
  count: number
}
export function Cart({ setCount, count }: cartProps) {
  const [modal, isModal] = useState<boolean>(false);
  const [user, setUser] = useState<User>({});

  return (
    <div className="wrapper">
      <Header title={"Корзина"} />
      <CartContainer />
      <CartForm
        isModal={isModal}
        setUser={setUser}
        setCount={setCount}
        count={count}
      />
      {modal ? (
        <Modal phone={user.phone} userName={user.firstName} count={count} />
      ) : (
        ""
      )}
    </div>
  );
}
