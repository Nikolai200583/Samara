import { CartForm } from "../cartForm/cartForm";
import { CartContent } from "../cartContent/cartContent";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { useAppDispatch } from "../../hooks";
import { removeItem } from "../../store/slice";

export const CartContainer: React.FC = () => {
  const data = useAppSelector((state) => state.items.list);
  const dispatch = useAppDispatch();
  const [items, setItems] = useState(data);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setItems(data);
  }, [data]);

  useEffect(() => {
    setTotal(items.reduce((prev, curr) => prev + curr.total, 0));
  }, [items]);

  const increase = (id: string) => {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          const newCount = item.count + 1 < 10 ? item.count + 1 : 10;

          return {
            ...item,
            count: newCount,
            total: newCount * item.price,
          };
        }
        return item;
      });
    });
  };
  const decrease = (id: string) => {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          const newCount = item.count - 1 > 1 ? item.count - 1 : 1;
          return {
            ...item,
            count: newCount,
            total: newCount * item.price,
          };
        }
        return item;
      });
    });
  };
  const removeitem = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cartContainer">
      <CartContent
        items={items}
        allTotal={total}
        increase={increase}
        decrease={decrease}
        removeitem={removeitem}
      />
      <CartForm />
    </div>
  );
};
