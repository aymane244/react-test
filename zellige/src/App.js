import React, { createContext, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'popper.js';
import './App.css';
import './css/body.css';
import './css/navbar.css';
import './css/footer.css';
import './css/cart.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import Navbar from "./components/Navbar";

export const Usercontext = createContext();
function App() {
  const [cart, updateCart] = useState(JSON.parse(localStorage.getItem('count')) || []);
  const [display, setDisplay] = useState(true);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(cart))
  }, [cart])
  function changeDisplay() {
    setDisplay(disp => !disp)
  }
  function incQuantity() {
    setQuantity((prevQte) => prevQte + 1)
  }
  function decQuantity() {
    setQuantity((prevQte) => prevQte <= 1 ? prevQte = 1 : prevQte - 1)
  }
  function addToCart(id, name, price, image, quantity) {
    updateCart([
      ...cart,
      { id, name, price, image, quantity }
    ])
  }
  function removeProductInCart(id) {
    const newCartItems = cart.filter((item) => item.id !== id);
    updateCart(newCartItems);
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar change={changeDisplay} count={cart} key={1} />}>
            <Route
              index
              element={[
                <Usercontext.Provider
                  value={{ cart, updateCart, addToCart, quantity, incQuantity, decQuantity, removeProductInCart }}
                >
                  <Home />,
                  <div className={display ? "disp" : ""}>
                    <Cart
                      change={changeDisplay}
                    />
                  </div>
                </Usercontext.Provider>
              ]}
            >
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
