import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './pages/AdminPages/Restaurant';
import RegisterRestaurant from "./pages/AdminPages/RegisterRestaurant";
import LoginRestaurant from "./pages/AdminPages/LoginRestaurant";
import Admin from "./pages/AdminPages/Admin";
import Inventory from "./pages/AdminPages/Inventory";
import AddProduct from "./pages/AdminPages/AddProduct";
import User from "./pages/UserPages/User";
import LoginUser from "./pages/UserPages/LoginUser";
import RegisterUser from "./pages/UserPages/RegisterUser";
import EditProduct from "./pages/AdminPages/EditProduct";
import Orders from "./pages/AdminPages/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Restaurant />} />
        <Route path='/registerrestaurant' element={<RegisterRestaurant />} />
        <Route path='/loginrestaurant' element={<LoginRestaurant />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/user' element={<User />} />
        <Route path='/loginuser' element={<LoginUser />} />
        <Route path='/registeruser' element={<RegisterUser />} />
        <Route path='/editproduct' element={<EditProduct />} />
        <Route path='/orders' element={<Orders />} />


      </Routes>
    </>

  );
}

export default App;
