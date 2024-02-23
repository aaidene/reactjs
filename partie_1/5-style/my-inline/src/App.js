import './App.css';
import Menu from './composants/Menu';
import MyButton from './composants/MyButton';
import MyParent from './composants/MyParent';

import Paragraphe from './composants/Paragraphe';
import MonBouton from './composants/monBouton';

function App() {



  return (
    <div className="App">
     
   <Paragraphe/>
       <MyParent />
       <Menu/>
  
    </div>
  );
}

export default App;
