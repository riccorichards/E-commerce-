import HomePage from './pages/HomePage';
import Cart from "./pages/Cart";
import ProductsLists from "./pages/ProductsList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewProduct from './pages/NewProduct';
import GetUsers from './pages/GetUsers';
import OrdersPage from './pages/OrdersPage';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:category" element={<ProductsLists />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/users" element={<GetUsers />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
