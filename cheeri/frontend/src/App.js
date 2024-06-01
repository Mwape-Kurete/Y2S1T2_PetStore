import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import LoginSignUp from "./pages/LoginSignUp";
import SingleProduct from "./pages/SingleProduct";
import AdminUpload from "./pages/AdminUpload";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Products" element={<Products />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="LoginSignUp" element={<LoginSignUp />} />
          <Route path="Products" element={<Products />}/>
          <Route path="SingleProduct/:id" element={<SingleProduct />} />
          <Route path="AdminUpload" element={<AdminUpload />} />
          <Route path="Profile" element={<Profile />} />
        </Routes>
    </Router>
  );
}

export default App;
