

import React, { useState } from 'react';

function CompteurSimple() {

  const [count, setCount] = useState(0);


  const increment = () => {
    if (count < 25) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

const decrement = () => {
    setCount(count -1);
  };



  return (
    <div>
    
      <p>compteur: {count}</p>

       <button onClick={() => increment()}>+ Add</button>
       
       <button onClick={() => decrement()}>- Dec</button>
   
     
    </div>
  );
}

export default CompteurSimple;
