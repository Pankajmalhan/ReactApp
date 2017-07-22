import React from 'react';

class Home extends React.Component {
  constructor(){
     super();
  } 
   render() {    
      return (
        <div>
         <div className="alert alert-success alert-dismissible fade in" role="alert">
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span></button>
    <strong>Welcome  !  </strong>
  This is Home Page of Application
  
  </div>
         </div>
      );
   }
}

export default Home;