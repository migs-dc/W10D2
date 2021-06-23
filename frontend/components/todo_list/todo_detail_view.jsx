import React, { Component } from 'react'

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
            </div>
        )
    }
}
