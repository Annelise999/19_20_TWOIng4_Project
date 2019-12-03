import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';






class Bouton extends Component {
    
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick(this);
        
      }
    


      handleClick()  {

    
    if (this.location ='/'){
   //     if (this.state.isToggleOn=true){
     
          this.props.history.push('/about');
          this.setState({isToggleOn: !this.state.isToggleOn});
        
       }
   else if (this.location='/about'){
       this.props.history.push('/');
       this.setState({isToggleOn: !this.state.isToggleOn});
   }
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


export default withRouter (Bouton);