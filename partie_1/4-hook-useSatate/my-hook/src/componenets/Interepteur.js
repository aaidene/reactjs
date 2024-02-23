import React, { useState } from 'react';

const Interepteur = () => {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle); 
  };



  return (
    <div>
      <p style={{ color: toggle ? 'green' : 'red' }}>{toggle ? 'On' : 'Eteind'}</p>
      
      <button onClick={toggleState}>{toggle ? 'Eteind' : 'Allume'}</button>
    </div>
  );
}

export default Interepteur;