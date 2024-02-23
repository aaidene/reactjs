import React from 'react';
import '../menu.css'; // Import du fichier CSS externe

const Menu = () => {
  return (
   <nav>
      <ul>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">À propos</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;