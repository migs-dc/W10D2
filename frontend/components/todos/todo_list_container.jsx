import { connect } from 'react-redux'
import { removeTodo } from '../../actions/todo_actions'
import TodoList from './todo_list'

const mSTP = state => {
    return {
        todos: Object.values(state.todos)
    }
}

const mDTP = dispatch => {
    return {
        receiveTodo: todo => {
            return dispatch(receiveTodo(todo))
        },
        removeTodo: todo => {
            return dispatch(removeTodo(todo))
        }
    }
}

export const TodoListContainer = connect(mSTP, mDTP)(TodoList)