import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowClients from './components/ShowClients';
import AddClients from './components/AddClients';
import AppNavbar from './AppNavbar';
import AddEmploye from './components/AddEmploye';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppNavbar />}>
            <Route index element={<ShowClients />}></Route>
            <Route path="add-client" element={<AddClients />}></Route>
            <Route path="add-employe" element={<AddEmploye />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
