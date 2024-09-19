import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from './actionTypes';

const initialState = {
  students: [],
};
const studentReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_STUDENT:
            return{
                ...state,
                students : [...state.students, action.payload],
            }
        case EDIT_STUDENT:
            return{
                ...state,
                students: state.students.map((student)=>
                student.id === action.payload.id? action.payload: student
            ),
            }
        case DELETE_STUDENT:
                return{
                    ...state,
                    students: state.students.filter((student)=>
                    student.id !== action.payload,
                ),
                }
        default: 
             return state;
    }
}
export default studentReducer;