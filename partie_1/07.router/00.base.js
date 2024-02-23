
/*

React Router est une bibliothèque de routage pour les applications React, 
permettant de gérer la navigation entre différentes vues de manière fluide et personnalisable.

Installation :
Pour utiliser React Router, commencez par l'installer dans votre projet en exécutant la commande 
`npm install react-router-dom` dans le terminal à la racine du projet.

Configuration de Base :
Une fois la bibliothèque installée, vous pouvez l'intégrer dans votre application. 
Créez un composant racine qui enveloppe votre application avec le composant Router et utilisez le composant Routes pour définir les routes :

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Importation des composants de React Router
import Home from './components/Home'; // Importation du composant Home
import About from './components/About'; // Importation du composant About
import Contact from './components/Contact'; // Importation du composant Contact

function App() {
  return (
    <Router> // Composant racine de React Router
      <Routes> // Composant pour définir les routes
        <Route path="/" element={<Home />} /> // Route pour la page d'accueil
        <Route path="/about" element={<About />} /> // Route pour la page "À propos"
        <Route path="/contact" element={<Contact />} /> // Route pour la page de contact
      </Routes>
    </Router>
  );
}

Création de Routes :
Définissez des routes en utilisant le composant Route de React Router. 
Chaque route est associée à un chemin d'URL spécifique et un élément à afficher lorsque ce chemin est atteint. 
Vous pouvez également utiliser la prop `render` pour rendre un composant avec des props supplémentaires ou de conditionner le rendu en fonction de certaines conditions.

Utilisation des Composants de Navigation :
React Router fournit des composants de navigation tels que Link et NavLink pour créer des liens vers d'autres vues. 
Le composant NavLink peut être utilisé pour créer des liens de navigation avec une classe CSS active lorsque le lien est actif :

import { Link, NavLink } from 'react-router-dom'; // Importation des composants de navigation de React Router

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink> {// Utilisation de NavLink pour créer un lien vers la page d'accueil }
            </li>
            <li>
              <NavLink to="/about">About</NavLink> {// Utilisation de NavLink pour créer un lien vers la page "About" }
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink> {// Utilisation de NavLink pour créer un lien vers la page "Contact" }
            </li>
          </ul>
        </nav>
      </div>
    );
  }

Fonctionnalités Avancées :
React Router offre des fonctionnalités avancées pour gérer la navigation comme la gestion des erreurs de routage. 

 React Router est une bibliothèque essentielle pour gérer la navigation dans les applications React, et elle facilite la création de routes et de liens pour vos vues.
 */

/* Exercice 1 : 
Création de pages de base :

Créez deux pages de base, par exemple, Accueil et À propos, chacune avec son propre composant.
Configurez React Router pour afficher ces pages et permettez la navigation entre elles à l'aide de <Link>.

Page 404 :
Créez une page "Page non trouvée" qui s'affiche lorsque l'utilisateur accède à une URL inconnue.
Configurez React Router pour gérer les routes inexistantes en affichant cette page.
*/