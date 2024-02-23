import React, { useState } from 'react';

const ListeTaches = () => {
  const [taches, setTaches] = useState([]);
  const [tache, setTache] = useState('');

  const handleChange = (event) => {
    setTache(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    setTaches([...taches, tache]);
   console.log(taches);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tache}
          onChange={handleChange}
          placeholder="Ajoutez une tâche"
        />
        <button type="submit">Ajouter</button>
      </form>
 
      {/* Affichage de la liste des tâches */}
     
    </div>
  );
};

export default ListeTaches;
