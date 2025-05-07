function reducer(state, action) {
    if (action.type === "increment") {
        return {...state, counter: state.counter + 1}
    } else if (action.type === "decrement") {
        return {...state, counter: state.counter - 1}
    } else if (action.type === "reset")
        return { ...state, counter: 0 }
    else {
        return state
    }
}