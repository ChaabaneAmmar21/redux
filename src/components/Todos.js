import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';
import {bin2} from 'react-icons-kit/icomoon/bin2'

export const Todos = ({handleEditClick, editFormVisibility}) => {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos from the store
  const todo = useSelector((state)=>state.operationsReducer);
  const [STATUE, setSTATUE] = useState("ALL")
  return <div> {STATUE==="ALL" ? todo.map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
            {editFormVisibility===false&&(
              <input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
            )}
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&(
                <>
                  <span className='md4' onClick={()=>handleEditClick(todo)} style={{  }}><Icon icon={edit2}/></span>
                  <span className='del4'onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={bin2}/></span>
                </>
              )}

        </div>
       
    </div>
  )): STATUE==="DONE" ?todo.filter((e)=>e.completed===true).map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
            {editFormVisibility===false&&(
              <input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
            )}
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&(
                <>
                  <span className='md4' onClick={()=>handleEditClick(todo)} style={{  }}><Icon icon={edit2}/></span>
                  <span className='del4'onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={bin2}/></span>
                </>
              )}

        </div>
       
    </div>
  )):todo.filter((e)=>e.completed===false).map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
            {editFormVisibility===false&&(
              <input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
            )}
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&(
                <>
                  <span className='md4' onClick={()=>handleEditClick(todo)} style={{  }}><Icon icon={edit2}/></span>
                  <span className='del4'onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={bin2}/></span>
                </>
              )}

        </div>
       
    </div>))}
  <button className='btn btn-danger btn-md delete-all' onClick={()=>setSTATUE("DONE")} >DONE FILTER</button>
  <button className='btn btn-danger btn-md delete-all' onClick={()=>setSTATUE("ALL")} >ALL</button>
  <button className='btn btn-danger btn-md delete-all' onClick={()=>setSTATUE("UNDONE")} >UNDONE</button>
  </div>
}
