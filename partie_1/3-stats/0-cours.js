/*
Le state est une manière pour les composants React de stocker des informations changeantes. 
C'est une donnée interne à un composant et elle peut changer au fil du temps, contrairement aux props qui sont immuables.

Initialisation du state :********
    Dans les composants de classe, le state est généralement initialisé dans le constructeur avec une structure comme celle-ci :
     import React from 'react';

class MonComposant extends React.Component {
    constructor(props) {
        super(props);
        // Initialisation du state avec une propriété "nom" ayant la valeur "Marc"
        this.state = {
            nom: "Marc"
        };
    }

    render() {
        return (
            <div>
                {// Affichage de la valeur de la propriété "nom" du state }
                {this.state.nom}
            </div>
        );
    }
}

export default MonComposant;

            export default MonComposant;
        Dans cet exemple, j'ai créé un composant de classe appelé MonComposant. Le constructeur est utilisé pour initialiser le state du composant. 
        Vous pouvez ajouter votre JSX ou d'autres méthodes à ce composant selon vos besoins.

Accéder au state :*****************
    Vous pouvez accéder à la valeur actuelle du state en utilisant this.state.nomDeLaVariable    
    
Mise à jour du state :*******************
    Pour mettre à jour le state, utilisez toujours la méthode this.setState(). 
    Elle informe React que le state a changé et que le composant doit être réaffiché.
    N'assignez jamais directement le state. Par exemple, this.state.myVar = 123 est incorrect. 
    Utilisez plutôt this.setState({ myVar: 123 })
    exemple:
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
    changerNom = () => {
        this.setState({
            nom: "Jean"
        });
    }

    render() {
        return (
            <div>
                {// Affichage de la valeur de la propriété "nom" du state }
                {this.state.nom}
                {// Bouton pour déclencher la mise à jour du state }
                <button onClick={this.changerNom}>Changer le nom</button>
            </div>
        );
    }
}

export default MonComposant;


*/
