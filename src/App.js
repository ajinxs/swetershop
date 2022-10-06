import Home from './pages/Home.jsx'
import Product from './pages/Product';
import ProductList from './pages/ProductList.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/product" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
  </Router>
  );
}

export default App;
