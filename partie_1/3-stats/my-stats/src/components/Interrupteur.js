import React from 'react';

class Interrupteur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            etat: false
        };
    }

    allumeEteint = () => {
        this.setState((prevState) => ({
            etat: !prevState.etat
        }));
    }

    render() {
        return (
            <div>
              
                <p>{this.state.etat ? 'On' : 'off'}</p>
 
                <button onClick={this.allumeEteint}>Allumer / Éteindre</button>
            </div>
        );
    }
}

export default Interrupteur;
