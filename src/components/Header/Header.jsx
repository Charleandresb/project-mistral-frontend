import Logo from "../../images/Mistral.png";
import Logoblack from "../../images/Mistralblack.png";
import SearchForm from "../SearchForm/SearchForm";
import { CircleUserRound } from "lucide-react";
import { SquareMenu } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { cartContext } from "../../contexts/CartProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ userName, loggedIn, onSideBarClick }) {
  const { productCount } = useContext(cartContext);
  const navigate = useNavigate();

  function handleOnLogoClick() {
    navigate("/");
  }

  function handleOnAcountClick() {
    if (loggedIn === true) {
      navigate("/perfil");
    } else {
      navigate("/iniciar-sesión");
    }
  }

  function handleOnBagClick() {
    navigate("/carrito");
  }

  return (
    <div className="header">
      <img
        className="header__logo"
        src={Logo}
        alt="Logo"
        onClick={handleOnLogoClick}
      />
      <img
        className="header__logoblack"
        src={Logoblack}
        alt="Logo"
        onClick={handleOnLogoClick}
      />
      <div className="header__container">
        <div className="header__icons-left">
          <SquareMenu className="header__menu-icon" onClick={onSideBarClick} />
          <div className="header__search-desktop">{<SearchForm />}</div>
        </div>
        <div className="header__icons-right">
          <div
            className="header__acount-container"
            onClick={handleOnAcountClick}
          >
            <CircleUserRound
              className="header__acount"
              onClick={handleOnAcountClick}
            />
            {loggedIn ? (
              <p className="header__acount-name">{userName}</p>
            ) : null}
          </div>
          <div className="header__icon-bag">
            <ShoppingBag className="header__bag" onClick={handleOnBagClick} />
            <div className="header__bag-counter-container">
              <span className="header__bag-counter">{productCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
