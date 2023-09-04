import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import ProductsLists from "./pages/ProductsList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewProduct from "./pages/NewProduct";
import GetUsers from "./pages/GetUsers";
import OrdersPage from "./pages/orderPage/OrdersPage";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { useEffect, useRef, useState } from "react";
import SetProfileContext from "./SetProfileContext";

function App() {
  const isUser = useSelector((state) => state.login.currentUser);
  const [isProfile, setIsProfile] = useState(false);
  const profileRef = useRef(null);
  const profileComponentRef = useRef(null);
  const editProfileRef = useRef(null);
  const values = {
    isProfile,
    setIsProfile,
    profileRef,
    profileComponentRef,
    editProfileRef,
  };

  useEffect(() => {
    const handleOutSideClick = (e) => {
      const clickedOutsideProfile =
        profileRef.current && !profileRef.current.contains(e.target);
      const clickedOutsideProfileComponent =
        profileComponentRef.current &&
        !profileComponentRef.current.contains(e.target);

      const clickedOutsideEditProfile =
        editProfileRef.current && editProfileRef.current.contains(e.target);

      if (
        clickedOutsideProfile &&
        clickedOutsideProfileComponent &&
        !clickedOutsideEditProfile
      ) {
        setIsProfile(false);
      }
    };

    window.addEventListener("click", handleOutSideClick);

    return () => {
      window.removeEventListener("click", handleOutSideClick);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SetProfileContext.Provider value={values}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:category" element={<ProductsLists />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/cart"
            element={isUser ? <Cart /> : <Navigate to="/" />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/users" element={<GetUsers />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </SetProfileContext.Provider>
    </BrowserRouter>
  );
}

export default App;
