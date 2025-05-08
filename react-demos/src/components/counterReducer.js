const initialState = {counter  : 0}

function counterReducer(state, action) {
    if (action.type === "increment") {
        return {...state, counter: state.counter + 1}
    } else if (action.type === "decrement") {
        return { ...state, counter: state.counter - 1 }
    } else if (action.type === "incByAmount") {
        return { ...state, counter: state.counter + action.payload}
    } else if (action.type === "decByAmount") {
        return { ...state, counter: state.counter - action.payload}
    }   
    else {
        return state
    }
}


export {initialState, counterReducer}