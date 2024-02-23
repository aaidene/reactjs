import React from 'react';

class SaisieTache extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tache: '' // Initialisation du state avec une chaîne vide
        };
    }

  
    modifierTache  = (event) => {
        this.setState({
            tache: event.target.value 
        });
    }

    render() {
        return (
            <div>
            
                <input 
                    type="text" 
                    value={this.state.tache} 
                    onChange={this.modifierTache } 
                />
            
                <p>Taches: {this.state.tache}</p>
            </div>
        );
    }
}

export default SaisieTache;
