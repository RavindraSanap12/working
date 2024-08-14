import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './pages/Restaurant';
import RegisterRestaurant from "./pages/RegisterRestaurant";
import LoginRestaurant from "./pages/LoginRestaurant";
import Admin from "./pages/Admin";
import Inventory from "./pages/Inventory";



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Restaurant />} />
        <Route path='/registerrestaurant' element={<RegisterRestaurant />} />
        <Route path='/loginrestaurant' element={<LoginRestaurant />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/inventory' element={<Inventory />} />
       

      </Routes>
    </>

  );
}

export default App;
