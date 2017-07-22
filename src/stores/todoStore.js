import {EventEmitter} from "events";

import  Dispatcher from "../dispatcher/dispatcher";

class TodoStore extends EventEmitter{

constructor(){
    super(); 
    this.todoList=[
        {
            id:110,
            text:"Take your breakfast",
            priority:"High"
        },
         {
            id:111,
            text:"Meet Rahul Prajapat",
            priority:"High"
        },
        {
            id:112,
            text:"Read a book",
            priority:"Low"
        },
        {
            id:113,
            text:"Organize your desk",
            priority:"Medium"
        }
    ]
}

getAll(){
    return this.todoList;
}

addNewItem(task,priority){

var newid=100+this.todoList.length;

this.todoList.push({
    id:newid,
    text:task,
    priority:priority
});
this.emit('change');

}

removeItem(id){
this.todoList=this.todoList.filter(context=>context.id!=id);
this.emit('change');
}

handleAction(action){

   switch(action.type){
       case "create_new":{
           this.addNewItem(action.task,action.priority);
       }
       case "delete":{
           this.removeItem(action.id);
       }
   } 
}
}

const todoObj=new TodoStore();
Dispatcher.register(todoObj.handleAction.bind(todoObj));
export default todoObj;
