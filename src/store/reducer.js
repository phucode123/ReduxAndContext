import { ADD_TODO, SET_TODO_INPUT } from "./constants";

const initState ={
todos: [],
todoInput: '',
}

function reducer(state, action){
    console.log(state);
    
    switch(action.type)
    {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            throw new Error('PHƯƠNG THỨC NÀY LẠ QUA')
    }
}

export {initState};
export default reducer;