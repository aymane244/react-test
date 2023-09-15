import './App.css';
import AddContact from './contact/AddContact';
import Navbar from './contact/Navbar';
import ShowContact from './contact/ShowContact';
import EditContact from './contact/EditContact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from 'axios';
// axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<AddContact />}></Route>
            <Route path="show" element={<ShowContact/>}></Route>
            <Route path="edit/:id" element={<EditContact/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;