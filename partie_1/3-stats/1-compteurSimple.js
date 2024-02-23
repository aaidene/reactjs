/*
Gestion des événements onClick dans React
Dans React, la gestion des événements est très similaire à celle des éléments DOM, mais avec quelques différences syntaxiques. 
Par exemple, les événements React sont nommés en camelCase plutôt qu'en minuscules.

Au lieu d'utiliser une chaîne de caractères comme gestionnaire d'événements, 
comme c'est le cas en HTML pur, avec JSX, vous passez une fonction.
        <button onClick={() => this.uneFonction()}></button> 
*/

/*
1. Compteur simple :

Créez un composant de classe qui affiche un nombre (initialisé à 0 dans le state).
Ajoutez un bouton "Incrémenter" qui, lorsqu'il est cliqué, augmente la valeur du compteur de 1 en utilisant this.setState.

*/
