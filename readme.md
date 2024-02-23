### Instalation et création premiere application

### Dossier instalation

lien do
https://create-react-app.dev/docs/getting-started/

- Create React App est un outil qui permet de créer une application React avec une configuration de base.
  Pour créer une application React avec Create React App,
  vous devez exécuter les commandes suivantes : - npx create-react-app my-app //Remplacez "my-app" par le nom que vous souhaitez donner à votre application. - cd my-app - npm start
  Cela démarrera un serveur de développement local et ouvrira votre application dans le navigateur par défaut
  (npx vous permet d'utiliser la dernière version de create-react-app chaque fois que vous initialisez un nouveau projet, sans avoir à vous soucier de mettre à jour une installation globale.)

- index.html

 <div id="root"></div>

- Dans app.js on retrun un jsx

```js
<div className="App">
  <header className="App-header">
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
  </header>
</div>
```

### Extension

ES7+ React/Redux/GraphQL/React-Native snippets :
rcc: Génère un composant React de classe avec un constructeur.
rce: Génère un composant React de classe avec une exportation.
rfc: Génère un composant React fonctionnel.
rfce: Génère un composant React fonctionnel avec une exportation.
useState: Génère le hook useState pour la gestion de l'état dans les composants fonctionnels.
useEffect: Génère le hook useEffect.

Fichiers de service worker : Si vous n'avez pas l'intention d'utiliser les fonctionnalités de Progressive Web App (PWA) :

src/serviceWorker.js
Fichiers de test : Si vous n'avez pas l'intention d'écrire des tests tout de suite :

src/App.test.js
Fichiers de logo : Si vous n'utilisez pas le logo React par défaut :

src/logo.svg
Fichiers CSS : Si vous prévoyez d'utiliser une autre approche pour les styles (comme styled-components) :

src/App.css
src/index.css
Fichier setupTests.js : Si vous n'avez pas l'intention d'utiliser la bibliothèque de test Jest :

src/setupTests.js
Manifeste et icônes : Si vous n'utilisez pas les fonctionnalités PWA :

public/manifest.json
Toutes les icônes dans public/ qui sont liées au manifeste (comme logo192.png, logo512.png).
README.md : Vous pouvez le supprimer ou le remplacer par vos propres notes et documentation.

npm install react-bootstrap bootstrap
index.js
import 'bootstrap/dist/css/bootstrap.min.css';
https://react-bootstrap.github.io/

## 1.Cra.js

/\*\*

- JSX est une extension de syntaxe pour JavaScript,
  recommandée par React pour décrire à quoi devrait ressembler l'interface utilisateur.
  Il ressemble à du HTML, mais il est intégré directement dans du JavaScript.
  Un élément JSX ressemble à une balise HTML.

\*/

/\*
Exercice : Créer un titre avec JSX
Objectif : Utilisez JSX pour créer un titre (h1) .

Étapes :

Modification de App.js :

Ouvrez src/App.js dans votre éditeur de code.
Utiliser JSX :

Dans la fonction App, retournez le JSX suivant :

<h1>Bienvenue à React !</h1>
Vérification :

Assurez-vous que votre serveur de développement est en cours d'exécution avec npm start.
Ouvrez votre navigateur et vous devriez voir le titre "Bienvenue à React !" affiché.
\*/

```js
import React from "react";

import "./App.css";

function App() {
  return <h1>Bienvenue à React !</h1>;
}

export default App;
```

## 2-tools.js :

/_
React Developer Tools est une extension de navigateur qui vous aide à inspecter et à déboguer vos applications React :
• Vous pouvez voir l'arborescence des composants React telle qu'elle est rendue sur la page.
Cela vous permet de naviguer dans la hiérarchie des composants et de voir leurs props, leur état et d'autres informations.
• React Developer Tools prend également en charge l'inspection des Hooks,
vous permettant de voir les valeurs actuelles des Hooks comme useState, useEffect, etc.
_/
/_
installez React Developer Tools depuis le Chrome Web Store
vous verrez une icône React (un atome) dans la barre d'outils de votre navigateur.
Lorsque vous visitez une page qui utilise React (Airbnb.com , React.dev ...) , cette icône sera activée,
vous permettant d'ouvrir les outils de développement et d'accéder à l'onglet React.
_/

- https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

## 3.jsx.js

/_ COURS _/
/\*
La méthode createElement est une fonction fondamentale de la bibliothèque React.
Elle est utilisée pour créer et renvoyer des éléments React,
qui sont les plus petites unités de construction des interfaces utilisateur React.

Syntaxe de createElement :
importation de React: import React from 'react';

React.createElement(type, [props], [...children])
type : élément que vous souhaitez créer.
Cela peut être une chaîne (pour les éléments DOM comme 'div', 'span', etc.)

    props : Un objet contenant les propriétés (ou "props") que vous souhaitez passer à l'élément.
            Cela peut inclure des attributs comme className ou id pour les éléments DOM,

    children : Les éléments enfants qui doivent être imbriqués à l'intérieur de l'élément créé.
            Cela peut être du texte, d'autres éléments React, ou un mélange des deux.

\*/

/\*\*

- Exercice : Créer un titre avec createElement
  Objectif : Utilisez React.createElement pour créer un titre (h1)

Étapes :
Modification de App.js :
Ouvrez src/App.js dans votre éditeur de code.
Remplacez le contenu du return du composant App pour utiliser React.createElement au lieu de JSX.
\*/

```js
import React from "react";

import "./App.css";

function App() {
  return React.createElement("h1", null, "Bienveue à React ");
}

export default App;
```

## 4.jsx.js

/\*\*

- JSX est une extension de syntaxe pour JavaScript,
  recommandée par React pour décrire à quoi devrait ressembler l'interface utilisateur.
  Il ressemble à du HTML, mais il est intégré directement dans du JavaScript.
  Un élément JSX ressemble à une balise HTML.

\*/

/\*
Exercice : Créer un titre avec JSX
Objectif : Utilisez JSX pour créer un titre (h1) .

Étapes :

Modification de App.js :

Ouvrez src/App.js dans votre éditeur de code.
Utiliser JSX :

Dans la fonction App, retournez le JSX suivant :

<h1>Bienvenue à React !</h1>
Vérification :

Assurez-vous que votre serveur de développement est en cours d'exécution avec npm start.
Ouvrez votre navigateur et vous devriez voir le titre "Bienvenue à React !" affiché.

```js
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Bienvenue à React !</h1>
      <h2>Bienvenue à React !</h2>
    </div>
  );
}
// on peut changer la Div par <Fragment></Fragment> , permet de ne pas afficher l'element dans le DOM
// on peut mettre juste des balise vide <></>
export default App;
```

### Component

## 1-fonctionnel.js

# cours

/\*
COURS:
Un composant est une partie de l'interface utilisateur qui peut être réutilisée dans différentes parties de l'application.
Les composants peuvent être des éléments simples comme des boutons ou des champs de texte,
ou des éléments plus complexes comme des formulaires ou des tableaux.

Les composants fonctionnels sont la manière la plus simple de créer un composant React.
Ils sont appelés ainsi parce qu'ils sont littéralement des fonctions JavaScript.
exemple:
const MonComposant = ( ) => {
return <p>coucou, !</p>;
}

pour l'utiliser dans App.js:
function App() {
return <MonComposant /> ;
}
Dans cet exemple, MonComposant commence par une majuscule,
la majuscule est obligatoire pour les noms de composants.  
 React considère les composants commençant par des lettres minuscules comme des balises DOM.
Par exemple, <div /> représente une balise HTML div, mais <Welcome /> représente un composant, et exige que l’identifiant Welcome existe dans la portée courante."  
\*/

```js
import React from "react";

const MonComposant = () => {
  return <p>Mon premier Composant</p>;
};

function App() {
  return (
    <div>
      <MonComposant />
    </div>
  );
}

export default App;
```

# Exercice : Création d'un Composant avec Create React App

/\*
Exercice : Création d'un Composant avec Create React App
Objectif : Créer un composant fonctionnel qui affiche le message "Bonjour !" à l'écran.

Étapes :

Créez un nouveau projet en utilisant Create React App.

Ouvrez src/App.js dans votre éditeur de code.
Définissez un composant fonctionnel appelé MonComposant qui retourne dans un h1: Bonjour !

utilisez le composant MonComposant pour afficher le message à l'écran.
\*/

# 2-class.js

/\*
COURS:
Un composant est une partie de l'interface utilisateur qui peut être réutilisée dans différentes parties de l'application.
Les composants peuvent être des éléments simples comme des boutons ou des champs de texte,
ou des éléments plus complexes comme des formulaires ou des tableaux.

Contrairement aux composants fonctionnels, les composants de classe sont définis en utilisant la syntaxe de classe ES6.
Avant l'introduction des Hooks dans React 16.8, les composants de classe étaient le principal moyen de gérer l'état et le cycle de vie des composants.

Voici un exemple de composant de classe qui affiche le message "Bonjour !" à l'écran

\*/
// Importation de la bibliothèque React depuis le module 'react'.
import React from "react";

// Définition d'un composant de classe nommé 'MonComposantClass'.
// Ce composant étend la classe 'Component' de React, ce qui signifie qu'il hérite de toutes ses fonctionnalités.
class MonComposantClass extends React.Component {
// La méthode 'render' est obligatoire pour tous les composants React.
// Elle détermine ce qui sera affiché à l'écran lorsque le composant est utilisé.
render() {
// Retourne un élément JSX (ici, une balise <h1>) qui sera rendu à l'écran.
// Lorsque ce composant est utilisé, il affichera "Bonjour !" dans un en-tête de niveau 1.
return <h1>Bonjour !</h1>;
}
}
/\*
Exercice : Création d'un Composant de Class

reprenez l'exercice 1
Définissez un composant de classe appelé MonComposantClass qui retourne un texte dans un <p>
Utilisez le composant MonComposantClass pour afficher le message à l'écran sous le h1.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
chaque composant React retourne un seul élément parent, il faut donc envelopper tous les éléments enfants dans un conteneur unique,
que ce soit un élément DOM comme <div></div>, ou utiliser des Fragments de React <></> pour éviter d'ajouter des nœuds supplémentaires au DOM.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
\*/

```js
import React from "react";

const MonComposant = () => {
  return <p>Mon premier Composant</p>;
};

class MonComposantClass extends React.Component {
  render() {
    return <h1>Bonjour !</h1>;
  }
}

function App() {
  return (
    <div>
      <MonComposant />
      <MonComposantClass />
    </div>
  );
}

export default App;
```

# 3-externe.js

/\*
**\*\*\*\***\*\*\***\*\*\*\***Séparation des Composants React dans des Fichiers Externes\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***
Pour optimiser la structure de votre projet React,
il est vivement conseillé de placer chaque composant dans un fichier distinct.
Cette approche offre une meilleure organisation du code, le rend plus clair et simplifie la réutilisation des composants.

Lors de la création d'un fichier pour un composant, respectez les conventions suivantes :
Nommez le fichier en suivant la règle de la majuscule initiale pour le nom du composant.
N'oubliez pas d'importer React ainsi que toute autre dépendance requise en début de fichier.
À la fin du fichier, exportez votre composant en utilisant la syntaxe : export default NomDuComposant.
Lorsque vous souhaitez utiliser ce composant dans un autre fichier, importez-le en utilisant la syntaxe :
import NomDuComposant from './CheminVersLeFichier';.

    // exemple:
    // dans Salutation.js//
    import React from 'react';

    function Salutation(props) {
        return <h1>Bonjour, {props.nom} !</h1>;
    }

    export default Salutation;
    //
    // dans App.js
    import React from 'react';
    import Salutation from './Salutation';  // Importation du composant

    function App() {
        return (
            <div>
            <Salutation />
            </div>
            );
        }

    export default App;

        */

/\*
Exercice :  
 Séparation des Composants dans des Fichiers Externes

Objectif :
Déplacer les composants MonComposant et MonComposantClass dans des fichiers séparés et les importer dans le fichier App.js.
\*/

- MonComponent.jsx

```js
import React from "react";

const MonComponent = () => {
  return (
    <div>
      <h1>Mon Component</h1>
    </div>
  );
};

export default MonComponent;
```

- MonComposantClass.jsx

```js
import React from "react";

class MonComposantClass extends React.Component {
  render() {
    return <h2>Ceci c'est mon composant Class</h2>;
  }
}

export default MonComposantClass;
```

- App.js

```js
import React from "react";
import MonComponent from "./MonComponent";
import MonComposantClass from "./MonComposantClass";

function App() {
  return (
    <div>
      <MonComponent />
      <MonComposantClass />
    </div>
  );
}

export default App;
```

# 4-props.js

/\*
Les "props" sont des données que l'on passe d'un composant parent à un composant enfant dans React.

Définition d'un composant avec des props :
fonctionnel:
// Importation de la bibliothèque React (si ce n'est pas déjà fait)
import React from 'react';
// Définition du composant "Welcome" en tant que fonction fléchée
const Welcome = (props) => {
// Retourne un élément h1 qui affiche un message de bienvenue
// en utilisant la prop "name" passée au composant
return <h1>Bonjour, {props.name}</h1>;
}
// Exportation du composant Welcome pour qu'il puisse être utilisé dans d'autres fichiers
export default Welcome;

class:  
 // Importation de la bibliothèque React
import React from 'react';
// Définition du composant "Welcome" en tant que composant de class
class Welcome extends React.Component {
// La méthode render est responsable de la description de ce que le composant doit afficher
render() {
// Retourne un élément h1 qui affiche un message de bienvenue en utilisant la prop "name" passée au composant
return <h1>Bonjour, {this.props.name}</h1>;
}
}
// Exportation du composant Welcome pour qu'il puisse être utilisé dans d'autres fichiers
export default Welcome;

Utilisation du composant :
import React from "react";
// Définition du composant "Welcome" en tant que composant de class
class Welcome extends React.Component {
render() {
return <h1>Bonjour, {this.props.name}</h1>;
}
}
function App() {
return (
<>
<Welcome name="Sara" />;
</>
);
}
export default App;
\*/

/\*
Exercice : Affichage d'un Message Personnalisé avec Props
Objectif : Créer 2 composants (1 fonctionnel, 1 class) qui affichent un message personnalisé en utilisant les props.

Étapes :

Définissez 2 composants (1 fonctionnel, 1 class) qui acceptent une prop .

Dans le composant principal App, utilisez les composants passez une valeur pour la prop .

Lancez votre application pour voir le message personnalisé affiché à l'écran.
\*/

- MonComponent.jsx

```js
import React from "react";

const MonComponent = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Bonjour, {props.name}! MonComponent</h1>
    </div>
  );
};

export default MonComponent;
```

- App.js

```js
import React from "react";
import MonComponent from "./MonComponent";
import MonComposantClass from "./MonComposantClass";

function App() {
  return (
    <>
      <MonComponent name="Abdelhakim" />
      <MonComposantClass name="Abdelhakim" />
    </>
  );
}

export default App;
```

- MonComposantClass.jsx

```js
import React from "react";

class MonComposantClass extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}! MonComposantClass </h1>;
  }
}

export default MonComposantClass;
```

# 5-state.js

/\*
Exercice pratique : Compteur simple

Objectif : Créer un compteur qui permet à l'utilisateur d'augmenter, de diminuer ou de réinitialiser un nombre.

Étapes :

Initialisation :
Dans votre composant principal App, initialisez un état (state) avec une propriété count définie à 0.
Affichage du compteur :

Affichez la valeur actuelle du compteur dans un élément h1 ou div.
Boutons de contrôle :

Ajoutez trois boutons : "Augmenter", "Diminuer" et "Réinitialiser".
Gestion des événements :

Lorsque l'utilisateur clique sur "Augmenter", augmentez la valeur de count de 1.
Lorsque l'utilisateur clique sur "Diminuer", diminuez la valeur de count de 1.
Lorsque l'utilisateur clique sur "Réinitialiser", réinitialisez count à 0.
\*/


## 2-Intereupteur.js 

prevState
Lorsque vous voulez mettre à jour le state en fonction de la valeur précédente du state, 
il est recommandé d'utiliser la fonction de setState(). 
Cette fonction une autre fonction qui a pour argument prevState, qui reçoit l'état précédent du state.
Elle garantit que vous travaillez avec la valeur la plus récente de l'état, 
surtout si plusieurs setState sont appelés en succession rapide (par exemple, à l'intérieur d'une boucle ou en réponse à plusieurs événements).

 this.setState((prevState) => ({ count: prevState.count + 1 })); 


2. Interrupteur On/Off :

Créez un composant de classe qui affiche "Off" initialement (défini dans le state).
Ajoutez un bouton qui, lorsqu'il est cliqué, change l'affichage entre "On" et "Off" en utilisant this.setState.
*/



