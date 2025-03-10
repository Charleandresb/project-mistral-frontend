import closeIcon from "../../images/CloseIcon.svg";
import arrow from "../../images/arrow.png";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";

export default function sidebar(props) {
  return (
    <div className={`sidebar ${props.isOpen && "sidebar_open"}`}>
      <img
        className="sidebar__close-icon"
        src={closeIcon}
        onClick={props.onClose}
      />
      <div className="sidebar__search">{<SearchForm />}</div>

      <div className="sidebar__menu-container">
        <ul className="sidebar__menu">
          <li className="sidebar__list">
            <Link href="/" to="/" className="sidebar__link">
              HOME
            </Link>
          </li>

          <li className="sidebar__list">
            <a href="#" className="sidebar__link">
              ESCOLAR
              <img src={arrow} alt="" className="sidebar__arrow" />
              <input type="checkbox" className="sidebar__check" />
            </a>

            <div className="sidebar__content">
              <ul className="sidebar__submenu">
                <li className="sidebar__li">
                  <Link
                    href="productos/cuadernos"
                    to="/productos/cuadernos"
                    className="sidebar__sublink"
                  >
                    CUADERNOS
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="productos/estuches"
                    to="/productos/estuches"
                    className="sidebar__sublink"
                  >
                    ESTUCHES
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="/página-en-desarrollo"
                    to="/página-en-desarrollo"
                    className="sidebar__sublink"
                  >
                    LÁPICES
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="sidebar__list">
            <a href="#" className="sidebar__link">
              OFICINA
              <img src={arrow} alt="" className="sidebar__arrow" />
              <input type="checkbox" className="sidebar__check" />
            </a>

            <div className="sidebar__content">
              <ul className="sidebar__submenu">
                <li className="sidebar__li">
                  <Link
                    href="/página-en-desarrollo"
                    to="/página-en-desarrollo"
                    className="sidebar__sublink"
                  >
                    ARCHIVADORES
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="/página-en-desarrollo"
                    to="/página-en-desarrollo"
                    className="sidebar__sublink"
                  >
                    PERFORADORAS
                  </Link>
                </li>

                <li className="sidebar__li">
                  <Link
                    href="productos/carpetas"
                    to="/productos/carpetas"
                    className="sidebar__sublink"
                  >
                    CARPETAS
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="sidebar__list">
            <Link href="/misión" to="/misión" className="sidebar__link">
              MISIÓN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
