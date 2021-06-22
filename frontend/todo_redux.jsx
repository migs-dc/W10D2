import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from './store/store'

import { receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions'
import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from './actions/todo_actions'
import { receiveStep, receiveSteps, removeStep} from './actions/step_actions'
import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from './actions/step_actions'

window.REMOVE_STEP = REMOVE_STEP


document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector('#root')
    ReactDOM.render(<div>5</div>, root)
})
const store = configureStore();
window.store = store;
window.receiveTodo = receiveTodo
window.receiveTodos = receiveTodos
window.RECEIVE_TODO = RECEIVE_TODO
window.RECEIVE_TODOS = RECEIVE_TODOS
window.removeTodo = removeTodo
window.REMOVE_TODO = REMOVE_TODO
window.RECEIVE_STEPS = RECEIVE_STEPS
window.RECEIVE_STEP = RECEIVE_STEP
window.REMOVE_STEP = REMOVE_STEP
window.receiveStep = receiveStep
window.removeStep = removeStep
window.receiveSteps = receiveSteps