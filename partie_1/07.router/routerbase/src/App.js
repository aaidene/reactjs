
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page404 from './components/Page404';
import Profile from './components/Profile';



function App() {
  return (

     
   <Router> 
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
          <li>
            <Link to="/profil/john">Profil de John</Link>
          </li>
          <li>
            <Link to="/profil/jane">Profil de Jane</Link>
          </li>
        </ul>
      </nav>
      <Routes> 
        <Route path="/" element={<Home />} /> /
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<Page404 />} /> 
       <Route path="/profil/:username" element={<Profile />} />

      </Routes>
    </Router>
  );
}

export default App;
