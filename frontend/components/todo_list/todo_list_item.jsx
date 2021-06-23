import React, { Component } from 'react'
import { TodoDetailViewContainer } from './todo_detail_view_container'
export default class TodoListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            detail: false
        }
        this.updateDone = this.updateDone.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.toggleDetail = this.toggleDetail.bind(this)
    }

    updateDone(){
        let copy = Object.assign({}, this.props.todo)
        copy.done = (copy.done ? false : true)
        return this.props.receiveTodo(copy)
    }

    removeTodo(){
        this.props.removeTodo(this.props.todo)
    }

    toggleDetail(){
        this.setState({
            detail: !this.state.detail
        })
    }

    
    render() {
        return (
            <li>
                <span onClick={this.toggleDetail}>
                    {this.props.todo.title} 
                </span>
                <button onClick={this.updateDone}>
                    {this.props.todo.done ? "Done" : "Undo"}
                </button>
                { this.state.detail ? <TodoDetailViewContainer todo={this.props.todo} removeTodo={this.props.removeTodo} /> : ""}
            </li>
        )
    }
}
