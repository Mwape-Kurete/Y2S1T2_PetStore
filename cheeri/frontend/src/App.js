import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import LoginSignUp from "./pages/LoginSignUp";
import SingleProduct from "./pages/SingleProduct";
import NavComp from "./components/NavComp";

function App() {
  return (
    <Router>
      {/* <NavComp /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="LoginSignUp" element={<LoginSignUp />} />
        <Route path="SingleProduct" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
