import logo from './logo.svg';
import './App.css';
import GameComponent from './Components/GameComponent';
import Information from './Components/Information';
import Navbar from './Components/Navbar';
import Directions from './Components/Directions';
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage/Home';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          {/* <Route path='*' element={<NotFound/>}></Route> */}
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
