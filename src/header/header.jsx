import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  
  constructor(){
     super();
  }
  
  
   render() {
    
      return (
        <div>
          <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand"  to='/' >Home</Link>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to='/' >Home</Link></li>
      <li><Link to='/details' >Details</Link></li>
      <li><Link to='/aboutus'>AboutUs</Link></li>
     
    </ul>
  </div>
</nav>
  
        
         </div>
      );
   }
}

export default Header;