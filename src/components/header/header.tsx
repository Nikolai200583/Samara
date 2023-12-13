import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  
}
export const Header: React.FC<HeaderProps> = ({title}) => {
  
  return (    
        <header className="header center">
            <Link to='/' className="header__logo"><img className="logo_img" src="img/lp_logo.svg" alt="logo"/></Link>  
            <nav className="navigation">                
                <Link to='/cart' className="navigation__link">Корзина</Link>
              <div className="counter">1</div>
            </nav>                 
        </header>
        
   
  );
};
