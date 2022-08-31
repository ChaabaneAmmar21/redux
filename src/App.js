import {useState} from 'react';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll, FILTER_TODO} from './redux/todoapp/actions';
import './index.css'

function App() {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos state for conditional rendering
  const todos = useSelector((state)=>state.operationsReducer);

  // update form visibility state
  const [editFormVisibility, setEditFormVisibility]=useState(false);

  // editTodo state
  const [editTodo, setEditTodo]=useState('');

  // this function will trigger when someone clicks the edit icon
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  // back button click
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }
   
    return (
    <div className="container text-center" style={{ background:'rgb(0, 173, 181)' }}>
      <br></br>
      <h1 style={{color:"AppWorkspace"}}>TODO-APP </h1>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length > 1 && (
        <div>
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())} >DELETE ALL</button>
       
       
   
        </div>
        
      )}
    </div>
  );
}

export default App;
