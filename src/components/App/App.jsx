import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import SideBar from "../SideBar/SideBar";
import Navigation from "../Navigation/Navigation";
import Register from "../Register/Register";
import SuccesRegister from "../HandleRegister/SuccesRegister";
import ErrorRegister from "../HandleRegister/ErrorRegister";
import Login from "../Login/Login";
import Profile from "../profile/Profile";
import ProtectedRoute from "../../utils/ProtectedRoute";
import ProductCardList from "../ProductCardList/ProductCardList";
import ProductPurchase from "../productPurchase/productPurchase";
import Cart from "../Cart/Cart";
import Preloader from "../Preloader/Preloader";
import Building from "../Building/Building";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CartProvider from "../../contexts/CartProvider";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { checkToken } from "../../utils/auth";

export default function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [succesRegisterOpen, setSuccesRegisterOpen] = useState(false);
  const [errorRegisterOpen, setErrorRegisterOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [spiner, setSpiner] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function reviewToken() {
      const token = localStorage.getItem("jwt");
      if (token) {
        const response = await checkToken(token);
        if (response.error) {
          localStorage.removeItem("jwt");
          navigate("/");
        }
        if (response.name) {
          setLoggedIn(true);
          setCurrentUser(response);
          setUserName(response.name);
        }

        return;
      }
    }

    reviewToken();
  }, [loggedIn, userName, navigate]);

  useEffect(() => {
    setTimeout(() => {
      setSpiner(false);
    }, 3000);
  }, []);

  function handleSideBarClick() {
    setSideBarOpen(true);
  }

  function handleSuccesRegisterOpen() {
    setSuccesRegisterOpen(true);
  }

  function handleSuccesRegisterClose() {
    closeAllModals();
    navigate("/iniciar-sesión");
  }

  function handleErrorRegisterOpen() {
    setErrorRegisterOpen(true);
  }

  function handleErrorRegisterClose() {
    closeAllModals();
  }

  function handleCardClick(card) {
    navigate(`/comprar/${card.cod}`);
  }

  function closeAllModals() {
    setSideBarOpen(false);
    setSuccesRegisterOpen(false);
    setErrorRegisterOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CartProvider>
        <div className="page">
          <SideBar isOpen={sideBarOpen} onClose={closeAllModals} />
          <Header
            userName={userName}
            loggedIn={loggedIn}
            onSideBarClick={handleSideBarClick}
          />
          <Navigation />
          {spiner ? (
            <Preloader />
          ) : (
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/registro"
                element={
                  <Register
                    succesRegisterOpen={succesRegisterOpen}
                    handleSuccesRegisterOpen={handleSuccesRegisterOpen}
                    errorRegisterOpen={errorRegisterOpen}
                    handleErrorRegisterOpen={handleErrorRegisterOpen}
                  />
                }
              />
              <Route path="/iniciar-sesión" element={<Login />} />
              <Route
                path="/productos/:productType"
                element={<ProductCardList onCardClick={handleCardClick} />}
              />
              <Route
                path="/comprar/:productCode"
                element={<ProductPurchase />}
              />
              <Route path="/carrito" element={<Cart />} />
              <Route
                path="/perfil"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <Profile
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                      setLoggedIn={setLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
              <Route path="/misión" element={<About />} />
              <Route path="/página-en-desarrollo" element={<Building />} />
            </Routes>
          )}
          {succesRegisterOpen ? (
            <SuccesRegister onClose={handleSuccesRegisterClose} />
          ) : null}
          {errorRegisterOpen ? (
            <ErrorRegister onClose={handleErrorRegisterClose} />
          ) : null}
          <Footer />
        </div>
      </CartProvider>
    </CurrentUserContext.Provider>
  );
}
