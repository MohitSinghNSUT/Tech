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
export const store= createStore(Reducer)
console.log(store)
console.log(store.getState())
const incrementAction = (data)=>{
    return {
        type: 'INCREMENT',
        payload: data
    }
}
const decrementAction = (data)=>{
    return {
        type: 'DECREMENT',
        payload: data
    }
}

store.dispatch(incrementAction({ id: 1, name: 'Task 1' }))
console.log(store.getState())
store.dispatch(incrementAction({ id: 2, name: 'Task 2' }))
console.log(store.getState())
store.dispatch(decrementAction({ id: 1 }))
console.log(store.getState())

export default Reducer