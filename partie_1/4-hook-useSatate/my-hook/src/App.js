
import './App.css';
import CompteurSimple from './componenets/Compteursimple';
import Interepteur from './componenets/Interepteur';
import ListesTaches from './componenets/ListesTaches';
import Formulaire from './componenets/Formulaire';
import Boite from './componenets/Boite'

function App() {
  return (
    <div>
      <p>Compteur simple</p>
      <CompteurSimple />
        <Interepteur />
          <ListesTaches />
              <Formulaire />
                <Boite >teste</Boite >
             

    </div>
  );
}

export default App;
