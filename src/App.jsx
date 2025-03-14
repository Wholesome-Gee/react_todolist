import { useState } from 'react'
import './App.css'
import { IoMdAddCircleOutline } from 'react-icons/io';
import List from './components/List';

function App() {
  // let 변수
  let now = new Date().toString();
  let [month,day,year] = [now.slice(4,7),now.slice(8,10),now.slice(11,15)]
  
  // state 변수
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState('')
  const [order, setOrder] = useState(1)

  // function
  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (value.length > 0) {
      let newTodo = { id: crypto.randomUUID(), content: value, finish: false, important: false, order:order }
      let copyTodos = [newTodo, ...todos]
      setTodos(copyTodos);
      setValue('')
      setOrder(order+1)
      copyTodos.sort((a,b)=> ((a.important === b.important) ? 0 : a.important ? -1 : 1))
    } else {
      console.log('오늘의 할 일을 입력하세요.');
      
    }
  }

  console.log(todos);
  

  return (
    <div>
      <div className="box">
        <div className="todo-list">
          <header className="todo-list_header">
            <div className='header_date'>
              <p className='header_date_year'>{year}</p>
              <div className='header_date_divider'>
                <span className='header_date_month'>{month}</span>
                <span className='header_date_day'>{day}</span>
              </div>
            </div>
            <h1 className='header_title'>TODO LIST</h1>
          </header>
          <section className='todo-list_section'>
            <ul className='section_todos'>
              {
                todos.length > 0 ? 
                  todos.map((todo,index)=>{ 
                    return (
                      <List todos={todos} setTodos={setTodos} todo={todo} index={index} key={todo.id}/>
                    )
                  }) :
                  <div style={{height:'100%', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'1.2rem', fontWeight:'bold', color:'#aaa'}}>오늘 뭐하지? ( ° ͜ʖ °)</div>
              }
              
              
            </ul>
          </section>
        </div>
        <div className="todo-bottom">
          <label className="todo-bottom_title" htmlFor="todo-form_input">오늘의 할 일</label>
          <form className="todo-bottom_form" onSubmit={handleSubmit}>
            <input id="todo-form_input" value={value} onChange={handleChange} type="text" placeholder='오늘의 할 일을 입력하세요.' />
            <button className="todo-form_btn" type='submit'><IoMdAddCircleOutline className='i-submit' /></button>
          </form>
          <p className='todo-bottom_copyright'>made by Wholesome-Gee</p>

          </div>
          
          <p></p>
        </div>
      </div>
  )
}

export default App


// 700에서 250

// 440에서 330 240