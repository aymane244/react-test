import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  let changed = localStorage.getItem('color')
  const [color,setColor] = useState(false || changed);
  function toggleColor(){
    setColor(prevColor => !prevColor);
  }
  localStorage.setItem('color', color);
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout color={color} toggleColor={toggleColor} />}>
            <Route 
              index 
              element={
                <Home 
                  color={color}
                  home = "Home"
                />
              } 
            />
            <Route path="shop" 
              element={
                <Shop 
                  color={color}
                  test="Test"
              />} />
            <Route path="contact" element={<Contact color={color} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
