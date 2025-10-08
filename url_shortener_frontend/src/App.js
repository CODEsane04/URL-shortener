
import './App.css';
import Navbar from './navbar.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home.js'
import Links from './url-list.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">

          <Routes>

            <Route exact path="/" element={<Home />} />

            <Route path="/links" element={<Links />} />
            
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
