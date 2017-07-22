import React from 'react';
import todoObj  from '../stores/todoStore';
import * as todoActions from "../action/action"
class AboutUs extends React.Component {
  constructor(props){
     super();
   this.state={
    todos:todoObj.getAll()
  }  
}

componentWillMount() {
  todoObj.on("change",()=>{
    this.setState({
      todos:todoObj.getAll()
    })
  })
}

   render() {    
      return (
        <div>
      <table id="mytable" className="table table-bordred table-striped">
                   
                   <thead><tr>
                  <th>Task</th>
                  <th>Priority</th>
                 
                  </tr>
                   </thead>
                  <tbody>
                    {this.state.todos.map((data, i) => (
            <tr key={i}>
               <td>{data.text}</td>
    <td>{data.priority}</td>   
    
        </tr>
          ))}
      
    </tbody>
        
</table>
         </div>
      );
   }
}

export default AboutUs;