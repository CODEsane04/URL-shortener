import { useState} from "react";
import './App.css';
import Navbar from './navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home.js';
import Links from './url-list.js';
import Signup from './signuppage.js';
import Login from './loginpage.js'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="content">

          <Routes>

            <Route exact path="/" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

            <Route path="/home" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

            <Route path="/links" element={<Links isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

            <Route path="/user" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
