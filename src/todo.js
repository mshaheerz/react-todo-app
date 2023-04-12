import React from 'react'
import { useState, useRef } from 'react'

import swal from 'sweetalert'

function Todofile() {
  const [todo, setTodo] = useState([])
  const [todoletter, SetTodoletter] = useState('')
  // let [count,setCount]=useState(0)
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   setCount(count=todo.length)
  //   // counts=todo.length
  // });
  const first = useRef()
  return (
    <div>
      <div className="container">
        <h2 className="count">Total List count:{todo.length}</h2>
      </div>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>
            Whoop, it's{' '}
            {new Date().toLocaleString('en-us', { weekday: 'long' })} 🌝 ☕{' '}
          </h2>
        </div>
        <div className="input">
          <input
            value={todoletter}
            onChange={(event) => SetTodoletter(event.target.value)}
            type="text"
            placeholder="🖊️ Add item..."
          />
          <i
            onClick={() =>
              todoletter
                ? setTodo([
                    ...todo,
                    { id: Date.now(), text: todoletter, status: false },
                  ])
                : swal('sorry', 'Please input something!', 'warning')
            }
            className="fas fa-plus"
          ></i>
        </div>

        <div className="todos" ref={first}>
          {todo.map((obj, index) => {
            return (
              <div key={index} className="todo">
                <div className="left">
                  <input
                    onChange={(e) => {
                      setTodo(
                        todo.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked
                          }
                          return obj2
                        }),
                      )
                    }}
                    value={obj.status}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>{obj.text}</p>
                  <h1>Active Tasks</h1>
                </div>
                <div className="right">
                  <i
                    onClick={(e) => {
                      let index = todo.findIndex((objs) => {
                        return obj.id === objs.id
                      })
                      console.log(first.current)
                      if (index !== -1) {
                        todo.splice(index, 1)
                        setTodo([...todo])
                      }
                    }}
                    className="fas fa-times"
                  ></i>
                </div>
              </div>
            )
          })}

          {todo.map((obj) => {
            if (obj.status) {
              return <h1>{obj.text}</h1>
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}

export default Todofile
