/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaRegStar, FaRegTrashAlt, FaStar } from 'react-icons/fa'


function List({todos,todo,setTodos}) {
  // todo = {id:'string', content:'string', finish:false, favorite:false }
  const [isFinished, setIsFinished] = useState(false)
  const [isImportant, setIsImportant] = useState(false)
  function handleCheckboxChange () {
    setIsFinished(!isFinished)
    todo.finish = !todo.finish
    let todoIndex = todos.findIndex((item)=>item.id === todo.id)
    let copyTodos = [...todos]
    copyTodos[todoIndex] = todo
    setTodos(copyTodos)
  }


  function handleDeleteBtnClick() {
    let todoIndex = todos.findIndex((item)=>item.id === todo.id)
    let copyTodos = [...todos]
    copyTodos.splice(todoIndex, 1)
    setTodos(copyTodos)
  }

  function handleImportantBtnClick() {
    todo.important = !todo.important
    let findIndex = todos.findIndex((item)=> item.id === todo.id)
    let copyTodos = [...todos]
    copyTodos[findIndex] = todo
    copyTodos.sort((a,b)=> b.order - a.order )
    copyTodos.sort((a,b)=> ((a.important === b.important) ? 0 : a.important ? -1 : 1))
    setTodos(copyTodos)
    setIsImportant(!isImportant)
  };
  
  return (
    <div>
      <li className='section_todo'>
        <input className='todo_checkbox' type="checkbox" id={todo.id}/>
        {
          isFinished ?
            <>
              <label className='todo_label-finished' htmlFor={todo.id} onClick={handleCheckboxChange} ></label>
              <p className='todo_content-finished' onClick={handleCheckboxChange}>
                {todo.content}
              </p>
            </>
          :
            <>
              <label className='todo_label' htmlFor={todo.id} onClick={handleCheckboxChange} ></label>
              <p className='todo_content' onClick={handleCheckboxChange}>
                {todo.content}
              </p>
            </>
        }
        
        <div className='todo_btns'>
          
          { 
            isFinished ?
              null
            :
              isImportant ? 
                <button className='btn' onClick={handleImportantBtnClick}><FaStar className='i-important' /></button>
              :
                <button className='btn' onClick={handleImportantBtnClick}><FaRegStar className='i-important'/></button>
          }
          <button className='btn' onClick={handleDeleteBtnClick}><FaRegTrashAlt className='i-delete' /></button>
        </div>
      </li>
    </div>
  )
}

export default List