import React from 'react';

class MonComposant extends React.Component {
    constructor(props) {
        super(props);
        // Initialisation du state avec une propriété "nom" ayant la valeur "Marc"
        this.state = {
            nom: "Marc"
        };
    }

    // Méthode pour mettre à jour la propriété "nom" du state
    changerNom() {
        this.setState({
            nom: "Jean"
        });
    }

    render() {
        return (
            <div>
                {/* Affichage de la valeur de la propriété "nom" du state */}
                {this.state.nom}
                {/* Bouton pour déclencher la mise à jour du state */}
                <button onClick={this.changerNom.bind(this)}>Changer le nom</button>
            </div>
        );
    }
}

export default MonComposant;



