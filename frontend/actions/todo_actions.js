export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

const receiveTodos = function(todos){
    return ({
        type: RECEIVE_TODOS,
        todos: todos
    })
}

const receiveTodo = function(todo){
    return({
        type: RECEIVE_TODO,
        todo: todo
    })
}