/*
Créez un composant de classe qui contient un champ de saisie 
Lorsque l'utilisateur saisit une tâche et la valide,elle remplace l'ancienne valeur du state et s'affiché a l'ecran

aide :
    Gestion des événements :
        Utilisez l'événement onChange sur l'élément <input> pour détecter chaque modification du champ de saisie en utilisant une fonction de rappel
         qui prendra en argument l'événement lui-même, souvent désigné par event, permettant d'accéder à la valeur saisie via event.target.value.
         Cette fonction mettra à jour le state avec la nouvelle valeur.
    Affichage de la valeur :
        Pour afficher la valeur actuelle de la tâche à l'écran, utilisez {this.state.task} dans votre méthode render.     
*/
