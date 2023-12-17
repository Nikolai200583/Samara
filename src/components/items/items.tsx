import { Items } from "../../type/data";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addItem } from "../../store/slice";
import { Button } from "../button/Button";

export const CatalogItems = (props: Items) => {
  const { id, url, alt, title, price, count, total } = props;
  const priceFormator = new Intl.NumberFormat();
  const data = useAppSelector((state) => state.items.list);
  const dispatch = useAppDispatch();
  const handleAction = () => {
    dispatch(
      addItem({
        id: id,
        url: url,
        title: title,
        count: count,
        price: price,
        total: total
      })
    );
  };
  let textButton = "Добавить в корзину";
  data.forEach((element) => {
    if (element.id === id) {
      textButton = "Уже в корзине";
    }
  });
  return (
    <article className="item">
      <img className="item__img" src={url} alt={alt} />
      <div className="item__transormBlock">
        <h3 className="item__title">{title}</h3>
        <p className="item__price">{priceFormator.format(price)} &#8381;</p>
      </div>
      <Button handleAction={handleAction} textButton={textButton} />
    </article>
  );
};
