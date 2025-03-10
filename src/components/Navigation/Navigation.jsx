import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <ul className="nav">
      <li className="nav__item">
        <Link href="/" to="/" className="nav__link">
          HOME
        </Link>
      </li>

      <li className="nav__item">
        <a href="#" className="nav__link">
          ESCOLAR
        </a>
        <ul className="nav__sublinks">
          <li className="nav__inside">
            <Link
              href="productos/cuadernos"
              to="/productos/cuadernos"
              className="nav__link"
            >
              CUADERNOS
            </Link>
          </li>
          <li className="nav__inside">
            <Link
              href="productos/estuches"
              to="/productos/estuches"
              className="nav__link"
            >
              ESTUCHES
            </Link>
          </li>
          <li className="nav__inside">
            <Link
              href="/página-en-desarrollo"
              to="/página-en-desarrollo"
              className="nav__link"
            >
              LÁPICES
            </Link>
          </li>
        </ul>
      </li>

      <li className="nav__item">
        <a href="#" className="nav__link">
          OFICINA
        </a>
        <ul className="nav__sublinks">
          <li className="nav__inside">
            <Link
              href="/página-en-desarrollo"
              to="/página-en-desarrollo"
              className="nav__link"
            >
              ARCHIVADORES
            </Link>
          </li>
          <li className="nav__inside">
            <Link
              href="/página-en-desarrollo"
              to="/página-en-desarrollo"
              className="nav__link"
            >
              PERFORADORAS
            </Link>
          </li>
          <li className="nav__inside">
            <Link
              href="productos/carpetas"
              to="/productos/carpetas"
              className="nav__link"
            >
              CARPETAS
            </Link>
          </li>
        </ul>
      </li>

      <li className="nav__item">
        <Link href="/misión" to="/misión" className="nav__link">
          MISIÓN
        </Link>
      </li>
    </ul>
  );
}
