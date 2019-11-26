import React, { Component } from 'react';

class Bouton extends Component {
    
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }
    
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Admin' : 'Return'}
      </button>
            </div>
        );
    }
}

export default Bouton;