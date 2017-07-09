import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  
  constructor(){
     super();
  }
  
  
   render() {
    
      return (
        <div>
        <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/details' >Details</Link></li>
        <li><Link to='/aboutus/120'>AboutUs</Link></li>   
        </ul>
         </div>
      );
   }
}

export default Header;