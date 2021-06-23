import React, { Component } from 'react'
import { StepListContainer } from '../step_list/step_list_container'

export default class TodoDetailView extends Component {
    constructor(props){
        super(props)
        this.removeTodo = this.removeTodo.bind(this)
    }
    removeTodo(){
        this.props.removeTodo(this.props.todo)
    }
    render() {
        return (
            <div>
                <p>{ this.props.todo.body }</p>
                <button onClick={this.removeTodo}>Delete Todo</button> 
                <StepListContainer id={this.props.todo.id} todoId={this.props.todo.id}/>
            </div>
        )
    }
}
