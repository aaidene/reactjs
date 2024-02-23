## hooks

```js
// 0-cours.js

// Importation des modules nécessaires depuis React
import React, { useState } from "react";

// Définition d'un composant fonctionnel nommé Example
function Example() {
  // Déclaration d'une variable d'état 'count' avec sa fonction de mise à jour 'setCount'
  // La valeur initiale de 'count' est 0
  const [count, setCount] = useState(0);

  // Retourne l'élément JSX du composant
  return (
    <div>
      {/* Affiche le nombre de clics sur le bouton */}
      <p>You clicked {count} times</p>
      {/* Bouton pour incrémenter le compteur de clics */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// Exemple d'utilisation de useState avec un objet
const [id, setId] = useState({ name: "", age: 0 });

// Pour mettre à jour un objet, on utilise la fonction de mise à jour en passant une fonction de mise à jour
// Cette fonction de mise à jour reçoit le prevState (état précédent) et retourne un nouvel objet avec les modifications
setId((prevState) => ({ ...prevState, name: "Alice" }));

// Utilisation de plusieurs appels useState dans un seul composant
const [age, setAge] = useState(0);
const [fruit, setFruit] = useState("banane");
const [todos, setTodos] = useState([{ text: "Apprendre les Hooks" }]);

// Conclusion sur l'utilisation des composants fonctionnels avec les Hooks
// Ils sont populaires pour leur syntaxe concise, facilité de développement, compréhension et testabilité.
// L'équipe React continue d'introduire davantage de Hooks pour les rendre encore plus puissants.
```

/_
https://create-react-app.dev/docs/getting-started/
Create React App est un outil qui permet de créer une application React avec une configuration de base.
Pour créer une application React avec Create React App,
vous devez exécuter les commandes suivantes :
npx create-react-app my-app //Remplacez "my-app" par le nom que vous souhaitez donner à votre application.
cd my-app
npm start
Cela démarrera un serveur de développement local et ouvrira votre application dans le navigateur par défaut
(npx vous permet d'utiliser la dernière version de create-react-app chaque fois que vous initialisez un nouveau projet, sans avoir à vous soucier de mettre à jour une installation globale.)
_/
/_
React Developer Tools est une extension de navigateur qui vous aide à inspecter et à déboguer vos applications React :
• Vous pouvez voir l'arborescence des composants React telle qu'elle est rendue sur la page.
Cela vous permet de naviguer dans la hiérarchie des composants et de voir leurs props, leur état et d'autres informations.
• React Developer Tools prend également en charge l'inspection des Hooks,
vous permettant de voir les valeurs actuelles des Hooks comme useState, useEffect, etc.
_/
////////////////////////////
/_
installez React Developer Tools depuis le Chrome Web Store
vous verrez une icône React (un atome) dans la barre d'outils de votre navigateur.
Lorsque vous visitez une page qui utilise React (Airbnb.com , React.dev ...) , cette icône sera activée,
vous permettant d'ouvrir les outils de développement et d'accéder à l'onglet React.
_/
//////////////exe1
import React from "react";

const MonCoposantFonctionnel = () => {
return <h1> hello MonCoposantFonctionnel</h1>;
};

function App() {
return (

<div>
<MonCoposantFonctionnel />
</div>
);
}

export default App;

///////////////exe2
-------MonComposantClass
class MonComposantClass extends React.Component {
render() {
return <p>MonComposantClass.</p>;
}
}

//////////////ex4 ///////////////

-------------WelcomeClass
import React, { Component } from "react";

class WelcomeClass extends Component {
constructor(props) {
super(props);
console.log(props);
}

render() {
return <h1>Bonjour, {this.props.name}</h1>;
}
}

export default WelcomeClass;

---------WelcomeFunc
import React from "react";

function WelcomeFunc(props) {
console.log(props);
return <h1>Bonjour, {props.name}</h1>;
}

export default WelcomeFunc;

/////////////////////
/\*

1. Compteur simple :

Créez un composant de classe qui affiche un nombre (initialisé à 0 dans le state).
Ajoutez un bouton "Incrémenter" qui, lorsqu'il est cliqué, augmente la valeur du compteur de 1 en utilisant this.setState.

\*/
import React from "react";

export default class Counter extends React.Component {
constructor(props) {
super(props);
// Initialisation du state avec une propriété "count" définie à 0
this.state = { count: 0 };
}

// incrémenter la valeur de "count" dans le state
incrementCount() {
this.setState({ count: this.state.count + 1 });
}

// définir ce que le composant doit afficher
render() {
return (

<div>
{/_ Affichage de la valeur actuelle de "count" du state_/}
<div>Count: {this.state.count}</div>
<button onClick={() => this.incrementCount()}>Incrémenter</button>
</div>
);
}
}
////////////////////exe2

import React from "react";

class Interrupteur extends React.Component {
// 1. Initialisation du state directement sans le constructeur
state = {
isOn: false,
};

// 2. Méthode pour changer l'état en utilisant une fonction fléchée
toggleSwitch = () => {
this.setState((prevState) => ({
isOn: !prevState.isOn,
}));
};

// 3. Rendu et Gestion des événements
render() {
return (

<div>
<p>{this.state.isOn ? "On" : "Off"}</p>
<button onClick={this.toggleSwitch}>Basculer</button>
</div>
);
}
}

export default Interrupteur;
///////////////////////////////////////

Spread Operator:
Si vous avez un tableau et que vous souhaitez copier ses éléments dans un nouveau tableau,
vous pouvez utiliser la syntaxe spread :
const arr = [1, 2, 3];
const arr2 = [...arr];
console.log(arr2) // [1, 2, 3]
pour ajouter un element:
const arr2 = [...arr,4];
console.log(arr2) // [1, 2, 3, 4]

Fusion de tableaux :
Vous avez deux tableaux :
const fruits = ["pomme", "banane", "cerise"];
const légumes = ["carotte", "brocoli"];
const aliments = [...fruits, ...légumes];

---

npx create-react-app my-app

ES7+ React/Redux/GraphQL/React-Native

Auto Rename Tag

ESLint

if (toggle === "fermé") { setToggle("ouvert") } else { setToggle("fermé") } }

### hooks

## 0-cours.js

Les Hooks
Les Hooks sont une fonctionnalité introduite dans React 16.8 qui d'utiliser des fonctionnalités de React telles que l'état et les effets sans avoir à écrire de classes.
Les Hooks sont des fonctions qui permettent de "s'accrocher" aux fonctionnalités de l'état et du cycle de vie de React à partir de composants fonctionnels.
Ils ne fonctionnent pas à l'intérieur des classes, mais permettent d'utiliser React sans classes.
useState :
Avant l'introduction des Hooks dans React, l'utilisation de l'état local était principalement limitée aux composants de classe.
Cependant, avec useState, les composants fonctionnels peuvent également avoir un état.
C’est un hook de React qui permet de définir et de mettre à jour l'état d'un composant fonctionnel.
Il est utilisé pour stocker des données qui peuvent être modifiées et qui doivent être conservées entre les rendus.
La syntaxe de useState est la suivante :
const [state, setState] = useState(initialState);
state est la variable qui contient l'état actuel,
setState est la fonction qui permet de mettre à jour l'état.
initialState est la valeur initiale de l'état.
Voici un exemple d'utilisation de useState :
import React, { useState } from 'react';

function Example() {
const [count, setCount] = useState(0);

return (

<div>
<p>You clicked {count} times</p>
<button onClick={() => setCount(count + 1)}>Click me</button>
</div>
);
}

useState peut également être utilisé avec des objets :
const [id, setId] = useState({ name: '', age: 0 });

Pour mettre à jour un objet, il est important de se rappeler que setState ne fusionne pas automatiquement l'objet. Vous devez le faire manuellement :
setId(prevState => ({ ...prevState, name: 'Alice' }));

Il est tout à fait possible d'utiliser plusieurs appels useState dans un seul composant :
const [age, setAge] = useState(0);
const [fruit, setFruit] = useState('banane');
const [todos, setTodos] = useState([{ text: 'Apprendre les Hooks' }]);
Les composants fonctionnels sont devenus de plus en plus populaires en raison de leur syntaxe plus concise et de leur facilité de développement, de compréhension et de test. De plus, l'équipe React continue d'introduire davantage de Hooks pour les composants fonctionnels, ce qui les rend encore plus puissants.

## 1-compteurSimple.js

Gestion des événements onClick dans React
Dans React, la gestion des événements est très similaire à celle des éléments DOM, mais avec quelques différences syntaxiques.
Par exemple, les événements React sont nommés en camelCase plutôt qu'en minuscules.

Au lieu d'utiliser une chaîne de caractères comme gestionnaire d'événements,
comme c'est le cas en HTML pur, avec JSX, vous passez une fonction.

<button onClick={() => this.uneFonction()}></button>

1. Compteur simple :

Créez un composant fonctionnel qui affiche un nombre (initialisé à 0 avec le Hook useState).
Ajoutez un bouton "Incrémenter" qui, lorsqu'il est cliqué, augmente la valeur du compteur de 1 en utilisant setCount (ou le nom que vous donnez à la fonction de mise à jour du Hook useState).

/////////////////2-Interrupteur.js//////////////\_ 2. Interrupteur On/Off :
Créez un composant fonctionnel qui affiche "Off" initialement (initialisé avec le Hook useState).
Ajoutez un bouton qui, lorsqu'il est cliqué, change l'affichage entre "On" et "Off" en utilisant setToggle (ou le nom que vous donnez à la fonction de mise à jour du Hook useState).

## 3-taches.js/////////////////

- 3.  Liste de tâches :
      Créez un composant fonctionnel qui contient un champ de saisie

<form onSubmit={}>
          <input
            type="text"
            value={}
            onChange={}
            placeholder="Ajoutez une tâche"
          />
          <button type="submit">Ajouter</button>
        </form> et une liste vide (ul li). 
Lorsque l'utilisateur saisit une tâche et appuie sur "Ajouter", la tâche doit être ajoutée à la liste. 
Les tâches doivent être stockées dans un tableau à l'aide du Hook useState
*/
- TaskList.js

import React, { useState } from "react";

function TaskList() {
const [task, settask] = useState([])
const [inputTask, setinputTask] = useState("")

    const handleSumit = (event) => {
        event.preventDefault()
        const newTask = inputTask
        settask([...task, newTask])
        console.log(task)

    }
    /////////////////////////////////////////
    const handleChange = (event) => {
        // console.log(event.target.value)
        setinputTask(event.target.value)
    }
    ////////////////////////////////////
    return (
        <div>
            <form onSubmit={handleSumit}>
                <input onChange={handleChange} type="text" placeholder="Ajoutez une tâche" />
                <button type="submit">Ajouter</button>
            </form>
            <h1> {inputTask} </h1>
            <ul>
                <li>{task} </li>
            </ul>
        </div>
    );

}

export default TaskList;

/////////////Signup.js ////////////////
. Formulaire d'inscription :

Créez un composant fonctionnel qui contient deux champs de saisie : "Nom d'utilisateur" et "Mot de passe".
Ajoutez un bouton "S'inscrire".
Lorsque l'utilisateur saisit des informations et clique sur le bouton,
ces informations doivent être stockées et un message de confirmation doit être affiché.
N'oubliez pas d'ajouter une validation pour les entrées, par exemple,
en vous

import React, { useState } from "react";

// Définition du composant fonctionnel Signup
function Signup() {
// Initialisation des états pour le nom d'utilisateur, le mot de passe et le message
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

// Fonction pour gérer la soumission du formulaire
const handleSubmit = (event) => {
event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Vérifie si le mot de passe est vide
    if (password.trim() === "" || username.trim() === "") {
      setMessage("champs"); // Affiche un message d'erreur
    } else {
      setMessage(`Bienvenue ${username} !`); // Affiche un message de bienvenue
      setUsername(""); // Réinitialise le champ du nom d'utilisateur
      setPassword(""); // Réinitialise le champ du mot de passe
    }

};

return (
<div>
{/_ Formulaire d'inscription _/}
<form onSubmit={handleSubmit}>
<label>
Nom d'utilisateur:
{/_ Champ de saisie pour le nom d'utilisateur _/}
<input
type="text"
value={username}
onChange={(event) => setUsername(event.target.value)}
/>
</label>
<label>
Mot de passe:
{/_ Champ de saisie pour le mot de passe _/}
<input
type="password"
value={password}
onChange={(event) => setPassword(event.target.value)}
/>
</label>
{/_ Bouton pour soumettre le formulaire _/}
<button type="submit">S'inscrire</button>
</form>
{/_ Affichage du message (erreur ou bienvenue) _/}
<p>{message}</p>
</div>
);
}
export default Signup;
-------------------version 2
import React, { useState } from "react";

function Signup() {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        if (username.trim() && password.trim()) {
            setMessage(`bienvenue ${username}`)
            setUsername("")
            setPassword("")
        } else {
            setMessage(`champs vide`)
        }
        e.preventDefault()
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <ladel>
                    nom d'utilisateur
                    <input onChange={(e) => { setUsername(e.target.value) }} type="text" value={username} />
                </ladel>
                <ladel>
                    password
                    <input onChange={(e) => { setPassword(e.target.value) }} type="text" value={password} />
                </ladel>
                <button type="submit" > S'inscrire </button>
            </form>
            <h1>{message}</h1>
        </>);

}

export default Signup;

////////////////////// exe 5
Faites un nouveau composant appelé Boite.
Dans votre composant App, placez le composant Boite comme une balise,
semblable à une balise HTML , et écrivez un texte entre ces balises.
<Boite>blabla</Boite>
Observez le résultat. Qu'est-ce que vous voyez à l'écran?
inspectez le code avec react developer tools

---

import React from "react";

const Boite = ({ children }) => {
return <div className="boite">{children}</div>;
};

export default Boite;
---App.js
import Boite from "./Boite";

function App() {
return (
<div>
<Boite nom="toto">child</Boite>
</div>
);
}
export default App;

/////////////// exe6 //////////////

/\*_
Pour passer des méthodes entre les composants, nous pouvons utiliser les Hooks.
Les Hooks sont une fonctionnalité ajoutée à React 16.8 qui permet d'utiliser l'état et d'autres fonctionnalités .
_/

/\*\*
Créez un composant ParentComponent qui contient une méthode handleClick qui affiche un message dans la console lorsque le bouton est cliqué.
Créez un composant ChildComponent qui affiche un bouton.
Passez la méthode handleClick en tant que prop à ChildComponent.
Utilisez la méthode handleClick en tant que gestionnaire d'événements pour le bouton dans ChildComponent.
Lorsque vous cliquez sur le bouton dans ChildComponent, la méthode handleClick dans ParentComponent sera appelée et le message sera affiché dans la console.
