import { connect } from 'react-redux'
import TodoDetailView from './todo_detail_view'

import { removeTodo } from '../../actions/todo_actions'

// const mSTP = state => {
//     return {

//     }
// }

const mDTP = dispatch => {
    return {
        removeTodo: todo => {
            return dispatch(removeTodo(todo))
        }
    }
}

export const TodoDetailViewContainer = connect(null, mDTP)(TodoDetailView)