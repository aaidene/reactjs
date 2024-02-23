import React, { useState } from 'react'; // Importez React et useState depuis 'react'
import MyButton from './MyButton';

const MyParent = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive); 
  };

  return (
    <div>
      <MyButton isActive={isActive} />
      <button onClick={toggleActive}> Active</button>
    </div>
  );
}

export default MyParent;
