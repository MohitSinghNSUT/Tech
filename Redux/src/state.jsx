import { createStore } from 'redux'

const initialState = {
    count: 0 ,
    task:[]
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
                task: [...state.task, action.payload]
            }
        case 'DECREMENT':
            return {
                ...state,
                task: state.task.filter((item) => item.id !== action.payload.id),
                count: state.count - 1
            }
        default:
            return state
    }
}
const store= createStore(Reducer)
console.log(store)
console.log(store.getState())
store.dispatch({ type: 'INCREMENT', payload: { id: 1, name: 'Task 1' } })
console.log(store.getState())
store.dispatch({ type: 'INCREMENT', payload: { id: 2, name: 'Task 2' } })
console.log(store.getState())
store.dispatch({ type: 'DECREMENT', payload: { id: 1 } })
console.log(store.getState())
export default Reducer