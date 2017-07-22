import React from 'react';
import { Router } from 'react-router';
import ReactDOM from 'react-dom';
import todoObj  from '../stores/todoStore';
import * as todoActions from "../action/action"
class Details extends React.Component {

  constructor(props){
     super();
  this.state={
    todos:todoObj.getAll()
  }  
}

addTodo(){
todoActions.createToDo(
    ReactDOM.findDOMNode(this.refs.taskName).value,
    ReactDOM.findDOMNode(this.refs.priority).value
    );
}

removeToDo(id){
 todoActions.deleteToDo(id);
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
                 
                  <th>Delete</th>
                  </tr>
                   </thead>
                  <tbody>
                    {this.state.todos.map((data, i) => (
            <tr key={i}>
               <td>{data.text}</td>
    <td>{data.priority}</td>   
   
    <td><p data-placement="top" data-toggle="tooltip" 
    onClick={this.removeToDo.bind(this,data.id)}
     title="Delete"><button className="btn btn-danger btn-xs" 
     data-title="Delete" data-toggle="modal" data-target="#delete" >
     <span className="glyphicon glyphicon-trash"></span></button></p></td>
        </tr>
          ))}
      
    </tbody>
        
</table>
  
      <div className="col-md-6 col-sm-12 col-md-offset-3">
        <div >
    <div className="form-group">
      <label htmlFor="Task">Task:</label>
      <input type="Task" className="form-control" 
      ref="taskName" id="Task" placeholder="Enter Task" name="Task"/>
    </div>
    <div className="form-group">
      <label htmlFor="Priority">Priority:</label>
      <input type="Priority" className="form-control"
       ref="priority" id="pwd" placeholder="Enter Priority" name="Priority"/>
    </div>
    <button type="submit" onClick={this.addTodo.bind(this)} className="btn btn-success">Submit</button>
  </div>
       
        </div>
         </div>
      );
   }
}


export default Details;