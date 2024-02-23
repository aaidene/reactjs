/*
Le Hook useParams est une fonctionnalité de React Router qui permet d'accéder aux paramètres d'URL dans un composant React. 
Il est utile lorsque vous devez extraire des valeurs de l'URL pour personnaliser le contenu de votre application.

Utilisation de useParams

Importez useParams depuis la bibliothèque React Router :
import { useParams } from "react-router-dom";
Dans votre composant, utilisez useParams pour extraire les paramètres d'URL :
function UserProfile() {
  const { username } = useParams();

  return (
    <div>
      <h1>Profil de l'utilisateur : {username}</h1>
      {// Le reste de votre contenu }
      </div>
      );
    }
  useParams vous permet d'accéder aux paramètres d'URL, comme username dans cet exemple, et de les utiliser dans votre composant.

Configuration des Routes:
Assurez-vous de configurer des routes dans React Router avec des paramètres d'URL pour que useParams fonctionne correctement. 
Par exemple :<Route path="/profile/:username" element={<UserProfile />} />

Supposons que vous ayez une route comme celle-ci :
<Route path="/profil/:param1/:param2/:param3" element={<UserProfile />} />
Dans votre composant UserProfile, vous pouvez récupérer les paramètres d'URL en utilisant useParams et accéder au troisième paramètre (param3)  :
import { useParams } from "react-router-dom";

function UserProfile() {
  const { param1, param2, param3 } = useParams();

  return (
    <div>
      <h1>Profil de l'utilisateur</h1>
      <p>Paramètre 1 : {param1}</p>
      <p>Paramètre 2 : {param2}</p>
      <p>Paramètre 3 : {param3}</p>
      {// Le reste de votre contenu }
      </div>
      );
    }
  Ainsi, vous pouvez extraire param1, param2, et param3 de l'URL et les utiliser dans votre composant. 
  Assurez-vous que le nombre de paramètres extraits correspond au nombre de paramètres définis dans votre route 
*/

/**
Exercice : Paramètres d'URL
Ajoutez une page, "Profil", qui accepte un paramètre d'URL 
(par exemple, le nom d'utilisateur) 
et affiche des informations spécifiques à cet utilisateur. 
Utilisez props.match.params pour accéder au paramètre d'URL.
 */
