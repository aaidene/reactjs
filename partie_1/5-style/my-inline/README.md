## style

# 1-Inline.js

- Inline styles:
  Dans React, les styles en ligne ne sont pas écrits comme des chaînes de caractères, mais comme des objets JavaScript.
  Cela diffère de la manière dont nous définissons généralement les styles en ligne en HTML pur.
  Avantages des styles en ligne :
  Isolation : Les styles en ligne sont spécifiques à un élément, ce qui évite les conflits de styles.
  Dynamisme : Il est facile de manipuler les styles en fonction de l'état ou des props du composant.
  Pas besoin d'ajouter des fichiers CSS supplémentaires : Tout est dans le fichier JS.

- Définir un objet de style :

```js
    function App() {
        return <button style={{backgroundColor: 'blue'}}>Cliquez-moi</button>;
    }
    ou-----------
    Créez un objet JavaScript où les propriétés sont en camelCase:
        const buttonStyle = {
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px'
            };
    Appliquer le style à un élément :
        function App() {
            return <button style={buttonStyle}>Cliquez-moi</button>;
            }

```

- Limitations des styles en ligne :
  Pas de pseudo-classes ou pseudo-éléments :
  Vous ne pouvez pas utiliser :hover, ::before, etc. avec des styles en ligne.
  Pas de médias queries :
  Les styles en ligne ne prennent pas en charge les requêtes média.
  Verbosité :
  Pour des styles complexes, les styles en ligne peuvent rendre le composant verbeux et difficile à lire.

- Créez un composant qui affiche un paragraphe de texte.
  Utilisez des styles en ligne pour définir la couleur du texte et la taille de la police

```js
import React from "react";

function MyComponent() {
  const styles = {
    color: "orange",
    fontSize: "90px",
  };

  return (
    <>
      <h1 style={styles}>inline style</h1>

      <p style={{ color: "red", fontSize: "40px" }}> hello world </p>
    </>
  );
}

export default MyComponent;
```

# 2-conditionnels.js

- Créez un composant MyButton qui accepte une prop isActive.
  Si isActive est true, le bouton doit avoir un arrière-plan vert. Sinon, il doit être gris.
  Utilisez des styles en ligne pour définir ces couleurs en fonction de la prop.

- vous souhaitez utiliser ce composant bouton dans un parent.
  Le composant MyParent doit avoir un state local isActive qui détermine si le bouton est actif ou non.
  Il doit également afficher le composant Button et lui passer la valeur de isActive comme prop.
  Ajoutez un autre bouton dans MyParent qui, lorsqu'il est cliqué, bascule la valeur de isActive entre true et false.
  Lorsque vous cliquez sur le bouton dans MyParent, le state isActive doit changer,
  ce qui à son tour change la couleur d'arrière-plan du composant Button.

//////////////// 2-conditionnels.js ////////////

/\*\*
Créez un composant MyButton qui accepte une prop isActive.
Si isActive est true, le bouton doit avoir un arrière-plan vert. Sinon, il doit être gris.
Utilisez des styles en ligne pour définir ces couleurs en fonction de la prop.

vous souhaitez utiliser ce composant bouton dans un parent.
Le composant MyParent doit avoir un state local isActive qui détermine si le bouton est actif ou non.
Il doit également afficher le composant Button et lui passer la valeur de isActive comme prop.
Ajoutez un autre bouton dans MyParent qui, lorsqu'il est cliqué, bascule la valeur de isActive entre true et false.
Lorsque vous cliquez sur le bouton dans MyParent, le state isActive doit changer,
ce qui à son tour change la couleur d'arrière-plan du composant Button.

\*/------------MyButton.js--
import React from "react";

function MyButton({ isActive }) {
console.log(isActive);

const buttonStyle = {
backgroundColor: isActive ? "grey" : "green",
padding: "10px 20px",
margin: "50px",
border: "none",
borderRadius: "5px",
color: "white",
cursor: "pointer",
};

return <button style={buttonStyle}>MyButton</button>;
}

export default MyButton;

-------------------MyParent.js-----------
import React, { useState } from "react";
import MyButton from "./MyButton";

function MyParent() {
const [isActive, setIsActive] = useState(false);

const toggleActive = () => {
setIsActive(!isActive);
};

return (

<div>
<MyButton isActive={isActive} />
<br />
<button onClick={toggleActive}>toggle </button>
</div>
);
}

export default MyParent;

////////////////3-externe.js//////

Créez un composant simple, comme un bouton .
Créez un fichier CSS externe pour ce composant.
Utilisez des sélecteurs CSS pour appliquer des styles spécifiques à ce composant.
Importez le fichier CSS dans votre composant React et appliquez-le.
------myButton.css
// .my-button {
// background-color: blue;
// color: white;
// padding: 10px 20px;
// border: none;
// border-radius: 5px;
// }

---

import "./my-button.css";
<button className="my-button">css externe</button>;


Créez un menu de navigation :

Créez un composant de menu de navigation avec plusieurs liens.
Utilisez un fichier CSS externe pour styliser le menu.
Ajoutez des styles de survol pour les liens et assurez-vous que les styles changent au survol.

Créez un composant React qui permet à l'utilisateur de basculer entre un thème sombre et un thème clair.
Créez un fichier CSS externe contenant les styles appropriés pour les deux thèmes.
Lorsque l'utilisateur bascule entre les thèmes en cliquant sur un bouton,
utilisez JavaScript pour ajouter ou supprimer les classes CSS correspondant au thème actuel sur l'ensemble de la page,
ce qui changera dynamiquement le style de l'application en fonction du thème sélectionné.
