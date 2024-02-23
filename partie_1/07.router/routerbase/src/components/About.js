import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>À propos</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default About;