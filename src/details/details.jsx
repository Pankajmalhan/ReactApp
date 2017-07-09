import React from 'react';
import { Router } from 'react-router';
class Details extends React.Component {
  constructor(props){
     super();
     this.navigateProgramatically = this.navigateProgramatically.bind(this);
  } 
   navigateProgramatically() {
    this.props.history.push('/aboutus/1500');
  }

   render() {    
      return (
        <div>
       <p>This is Details Page</p>
       <h2>{this.props.data}</h2>
<button onClick={this.navigateProgramatically}>Change Root</button>
         </div>
      );
   }
}


export default Details;