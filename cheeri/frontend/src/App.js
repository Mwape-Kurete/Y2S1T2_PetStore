import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import LoginSignUp from "./pages/LoginSignUp";
import NavComp from "./components/NavComp";

function App() {
  return (
    <Router>
      <NavComp />
      <Routes>
        <Route index element={<Home />} />
        <Route path="product" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<LoginSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
