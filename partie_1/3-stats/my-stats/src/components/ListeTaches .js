import React from 'react';

class ListeTaches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taches: [], 
            tache: '' 
        };
    }

    
    modifierTache = (event) => {
        this.setState({
            tache: event.target.value 
        });
    }


    ajouterTache = (event) => {
        event.preventDefault();  
        const tachess = [...this.state.taches, this.state.tache]; // 
        this.setState({
            taches: tachess, 
            tache: '' 
        });
    }

    render() {
        return (
            <div>
           
                <form onSubmit={this.ajouterTache}>
                    <input
                        type="text"
                        value={this.state.tache} 
                        onChange={this.modifierTache} 
                        placeholder="Ajoutez une tâche"
                    />
                    <button type="submit">Ajouter</button>
                </form>
                
              
              <ul>
    {this.state.taches.map(tache => (
        <li>{tache}</li>
    ))}
</ul>

             
            </div>
        );
    }
}

export default ListeTaches;
