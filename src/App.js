import { useDispatch } from 'react-redux';
import { useStore, actions } from './store';
import { initState } from './store/reducer';
import { addStudent, editStudent, deleteStudent } from './redux/actions';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {

  //dùng useContext và Provider
  /*
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state
  console.log('state: ' + todoInput);

  function AddNote() {
    dispatch(actions.addTodoInput(todoInput))
    dispatch(actions.setTodoInput(''))
  }

  console.log(todos);

  return (
    <div>
      <input
        value={todoInput}
        placeholder='Nhập...'
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={AddNote}>Add</button>
      {todos.map((todo, index)=>{
        return(
          <li>{todo}</li>
        )
      })}
    </div>
  );*/
  
  //dùng useRedux
  const students = useSelector((state) => state.student.students);
  const dispatch = useDispatch();
  const [student, setStudent] = useState({ id: '', name: '', age: '' });
  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleAddOrEditStudent = () => {
    if (isEdit) {
      dispatch(editStudent(student));
      setIsEdit(false);
    } else {
      dispatch(addStudent({ ...student, id: Date.now() }));
    }
    setStudent({ id: '', name: '', age: '' });
  };
  const handleEdit = (student) => {
    setStudent(student);
    setIsEdit(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return ( <div>
    <h1>Student Management</h1>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={student.name}
      onChange={handleInputChange}
    />
    <input
      type="number"
      name="age"
      placeholder="Age"
      value={student.age}
      onChange={handleInputChange}
    />
    <button onClick={handleAddOrEditStudent}>
      {isEdit ? 'Edit' : 'Add'} Student
    </button>

    <ul>
      {students.map((stu) => (
        <li key={stu.id}>
          {stu.id}- {stu.name} - {stu.age}{' '}
          <button onClick={() => handleEdit(stu)}>Edit</button>
          <button onClick={() => handleDelete(stu.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>)
}

export default App;
