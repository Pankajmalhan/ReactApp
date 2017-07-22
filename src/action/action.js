import Dispatcher from "../dispatcher/dispatcher";

export function createToDo(task,priority){
    Dispatcher.dispatch({
        type:"create_new",
        task:task,
        priority:priority
    });
};

export function deleteToDo(id){
    Dispatcher.dispatch({
        type:"delete",
        id:id
    });
};