/*
Spread Operator:
Si vous avez un tableau et que vous souhaitez copier ses éléments dans un nouveau tableau, 
vous pouvez utiliser la syntaxe spread :
    const arr = [1, 2, 3];
    const arr2 = [...arr];
    console.log(arr2) // [1, 2, 3]
pour ajouter un element:
    const arr2 = [...arr,4];
    console.log(arr2) // [1, 2, 3, 4]

*/
/*
exercice:
Fusion de tableaux :
Vous avez deux tableaux :
const fruits = ["pomme", "banane", "cerise"];
const légumes = ["carotte", "brocoli"];
Utilisez le Spread Operator pour créer un nouveau tableau aliments qui contient tous les éléments des deux tableaux.

2. Ajout d'éléments :
Vous avez un tableau :
const nombres = [1, 2, 3];
Utilisez le Spread Operator pour ajouter les nombres 4, 5 et 6 à la fin du tableau sans modifier le tableau original.

3. Clonage d'objets :
Vous avez un objet :
const voiture = { marque: "Toyota", modèle: "Corolla" };
Utilisez le Spread Operator pour créer un nouvel objet nouvelleVoiture qui est une copie de l'objet voiture, mais avec une propriété supplémentaire couleur: "rouge".

4. Fusion d'objets :
Vous avez deux objets :

const infosPersonnelles = { nom: "Dupont", prénom: "Jean" };
const infosContact = { email: "jean.dupont@email.com", téléphone: "0123456789" };
Utilisez le Spread Operator pour fusionner ces deux objets en un seul objet infosComplètes.

Conseil : Pour chaque étape, après avoir écrit votre code, essayez d'afficher le résultat avec console.log() pour vérifier que vous avez obtenu le résultat attendu.
*/
