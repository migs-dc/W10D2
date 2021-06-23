import React from 'react'
import TodoListItem from '../todo_list/todo_list_item'
import TodoForm from '../todo_list/todo_form'
class TodoList extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const todoLis = this.props.todos.map(todo => {
            return <TodoListItem 
            receiveTodo={this.props.receiveTodo}
            removeTodo={this.props.removeTodo}
            todo={todo} key={todo.id}/>
        })
        return (
            <ul>
                {todoLis}
                <TodoForm receiveTodo={this.props.receiveTodo}/>
            </ul>
        )
    }
}

export default TodoList
