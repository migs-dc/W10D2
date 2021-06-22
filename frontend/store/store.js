import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'

export const configureStore = function(defaultState = {}){
    return createStore(reducer, defaultState)
}