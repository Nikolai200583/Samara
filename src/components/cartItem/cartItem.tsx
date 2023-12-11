
interface ItemsCart {
  id: string;
  url: string;
  title: string;
  about: string;
  count: number;
  price: number;
  total: number
}
interface ItemsProps {
  item: ItemsCart,
  increase: (id:string) => void;
  decrease: (id:string) => void;
  
  removeitem: (id: string) => void;
}
export const CartItem: React.FC<ItemsProps> = ({item, increase, decrease, removeitem }) => {
  const {id, url, title, about, price, count } = item; 
  const priceFormator = new Intl.NumberFormat();
 
  
  return (
    <div className="cart__item">
      <div className="cart__left">
        <img
          className="cart__img"
          src={url}
          width="200"
          height="160"
          alt="table"
        />
        <div className="cart__info">
          <h4 className="cart__item_name">{title}</h4>
          <p className="cart__item_text">{about}</p>
          <p className="cart__item_price">{priceFormator.format(price)} руб.</p>
          <div className="cart__item_link_box">
            <span className="cart__item_link">Избранное</span>
            <span onClick={()=>removeitem(id)} className="cart__item_link">Удалить</span>
          </div>
        </div>
      </div>
      <div className = "InputContropls">
      <div className= "contropls">
        <button onClick={()=>{increase(id)}} className="up"></button>
        <button onClick={()=>{decrease(id)}} className="down"></button>
      </div>
      <input
        className="cart__input"
        value={count}             
        type="number"
        min="1"
        max="5"
      />
      </div>
    </div>
  );
};
