import React, { Component } from 'react'
import { uniqueId } from '../../util/utils'
export default class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            body: "",
            done: false
        }
        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.updateDone = this.updateDone.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    updateBody(e){
        this.setState({
            body: e.target.value
        })
    }

    updateDone(e){
        this.setState({
            done: e.target.value
        })
    }

    handleSubmit(e){
        debugger
        e.preventDefault()
        const todo = Object.assign({}, this.state, {id: uniqueId()})
        this.props.receiveTodo(todo)
    }
    render() {
        return (
            <div>
                <label htmlFor="title">Title
                    <input onChange={this.updateTitle} type="text" name="" id="title" />
                </label>

                <label htmlFor="body">Body
                    <input onChange={this.updateBody} type="text" name="" id="body" />
                </label>

                {/* <label htmlFor="done">Done
                    <input onChange={this.updateDone} type="radio" name="status" id="done" value={true}/>
                </label>

                <label htmlFor="not-done">Not Done
                    <input onChange={this.updateDone} type="radio" name="status" id="not-done" value={false}/>
                </label> */}

                <button onClick={this.handleSubmit} type="submit">Create Todo</button>
            </div>
        )
    }
}
