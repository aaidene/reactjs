# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# 0-cours.js

- Le state est une manière pour les composants React de stocker des informations changeantes.
  C'est une donnée interne à un composant et elle peut changer au fil du temps, contrairement aux props qui sont immuables.

- Initialisation du state :
  Dans les composants de classe, le state est généralement initialisé dans le constructeur avec une structure comme celle-ci :

```js
import React from "react";

class MonComposant extends React.Component {
  constructor(props) {
    super(props);
    // Initialisation du state avec une propriété "nom" ayant la valeur "Marc"
    this.state = {
      nom: "Marc",
    };
  }

  render() {
    return (
      <div>
        {/* Affichage de la valeur de la propriété "nom" du state */}
        {this.state.nom}
      </div>
    );
  }
}

export default MonComposant;
```

        export default MonComposant;
        Dans cet exemple, j'ai créé un composant de classe appelé MonComposant. Le constructeur est utilisé pour initialiser le state du composant.
        Vous pouvez ajouter votre JSX ou d'autres méthodes à ce composant selon vos besoins.

- Accéder au state :
  Vous pouvez accéder à la valeur actuelle du state en utilisant this.state.nomDeLaVariable

Mise à jour du state :
Pour mettre à jour le state, utilisez toujours la méthode this.setState().
Elle informe React que le state a changé et que le composant doit être réaffiché.
N'assignez jamais directement le state. Par exemple, this.state.myVar = 123 est incorrect.
Utilisez plutôt this.setState({ myVar: 123 })
exemple:

```js
import React from "react";

class MonComposant extends React.Component {
  constructor(props) {
    super(props);
    // Initialisation du state avec une propriété "nom" ayant la valeur "Marc"
    this.state = {
      nom: "Marc",
    };
  }

  // Méthode pour mettre à jour la propriété "nom" du state
  changerNom() {
    this.setState({
      nom: "Jean",
    });
  }

  render() {
    return (
      <div>
        {/* Affichage de la valeur de la propriété "nom" du state */}
        {this.state.nom}
        {/* Bouton pour déclencher la mise à jour du state */}
        <button onClick={this.changerNom.bind(this)}>Changer le nom</button>
      </div>
    );
  }
}

export default MonComposant;
```

# 1-compteurSimple

Gestion des événements onClick dans React
Dans React, la gestion des événements est très similaire à celle des éléments DOM, mais avec quelques différences syntaxiques.
Par exemple, les événements React sont nommés en camelCase plutôt qu'en minuscules.

Au lieu d'utiliser une chaîne de caractères comme gestionnaire d'événements,
comme c'est le cas en HTML pur, avec JSX, vous passez une fonction.
<button onClick={() => this.uneFonction()}></button>
\*/

/\*

1. Compteur simple :

Créez un composant de classe qui affiche un nombre (initialisé à 0 dans le state).
Ajoutez un bouton "Incrémenter" qui, lorsqu'il est cliqué, augmente la valeur du compteur de 1 en utilisant this.setState.

```js
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
        {/* Affichage de la valeur actuelle de "count" du state*/}
        <div>Count: {this.state.count}</div>
        <button onClick={() => this.incrementCount()}>Incrémenter</button>
      </div>
    );
  }
}
```



