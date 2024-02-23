/*
prevState
Lorsque vous voulez mettre à jour le state en fonction de la valeur précédente du state, 
il est recommandé d'utiliser la fonction de setState(). 
Cette fonction une autre fonction qui a pour argument prevState, qui reçoit l'état précédent du state.
Elle garantit que vous travaillez avec la valeur la plus récente de l'état, 
surtout si plusieurs setState sont appelés en succession rapide (par exemple, à l'intérieur d'une boucle ou en réponse à plusieurs événements).

 this.setState((prevState) => ({ count: prevState.count + 1 })); 
*/
/*
2. Interrupteur On/Off :

Créez un composant de classe qui affiche "Off" initialement (défini dans le state).
Ajoutez un bouton qui, lorsqu'il est cliqué, change l'affichage entre "On" et "Off" en utilisant this.setState.
*/

