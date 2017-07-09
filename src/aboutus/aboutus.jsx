import React from 'react';

class AboutUs extends React.Component {
  constructor(props){
     super();
    this.studentId=props.data.params.id; 
  } 
   render() {    
      return (
        <div>
       <p>This is AboutUs Page</p>
       <h3> Student Roll No Is: {this.studentId}</h3>
         </div>
      );
   }
}

export default AboutUs;