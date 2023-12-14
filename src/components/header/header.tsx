import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { useState, useEffect } from "react";
interface HeaderProps {
  title: string;
}
export const Header: React.FC<HeaderProps> = ({ title }) => {
  const data = useAppSelector((state) => state.items.list);
  const [count, setCount] = useState(data);

  useEffect(() => {
    setCount(data);
  }, [data]);

  return (
    <header className="header center">
      <Link to="/" className="header__logo">
        <img className="logo_img" src="img/lp_logo.svg" alt="logo" />
      </Link>
      <nav className="navigation">
        <Link
          to="/cart"
          className={
            !count.length
              ? "navigation__link_disabled navigation__link"
              : "navigation__link"
          }
        >
          Корзина
        </Link>
        {count.length ? <div className="counter">{count.length}</div> : null}
      </nav>
    </header>
  );
};
