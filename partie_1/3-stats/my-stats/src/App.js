
//import MonComposant from "./components/MonComposant";
import CompteurSimple from "./components/CompteurSimple";
import Interrupteur from "./components/Interrupteur";
import SaisieTache from "./components/taches_0";
import ListeTaches from "./components/ListeTaches ";
import NameForm from "./components/Formulaires";

function App() {
  return (
    <div >
      <h1 > Les stats</h1>
       <div>   <CompteurSimple/></div>
           <div>  <Interrupteur/> </div>
               <div>   <SaisieTache/></div>
                   <div>   <ListeTaches/></div>

                     <div>   <NameForm/></div>

     
    
      
    </div>
  );
}

export default App;
