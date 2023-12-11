import { Header } from "../components/header/header";
import { CartContainer } from "../components/cart/cart";

export function Cart() {
  return (
    <div className="wrapper">
      <Header title={"Корзина"} />
      <CartContainer />
    </div>
  );
}
