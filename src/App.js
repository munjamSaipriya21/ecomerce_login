import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Route, Routes}  from 'react-router-dom';
import Cart from './component/Cart';
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login_signup/Login';
import Register from './component/Register_page/Register';



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Products" element={<Products/>} />
        <Route exact path="/Products:id" element={<Product/>} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
      </Routes>
     


    </>
  );
}

export default App;
