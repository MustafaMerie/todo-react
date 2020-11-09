import React, { useState } from 'react'

export default function ItemListToDo({ todos, todo, index, completeTodo, deleteToDo }) {

    const [editToDo, setEditToDo] = useState(false)

    const [updateTodo, setUpdateTodo] = useState(todo.todoText)

    const [updateTodos, setUpdateTodos] = useState(todos)

    const submitUpdate = id => {
        setUpdateTodos(
            todos.map(todo => {
                if (todo.id === id && updateTodo.length > 0) {
                    console.log(todo.todoText)
                    todo.todoText = updateTodo
                }
            })
        )
        localStorage.setItem('todos', JSON.stringify(todos))
        setEditToDo(!editToDo)

    }

    return (
        <div className="litsItem my-5 p-3">

            {
                editToDo ?
                    <div className="row">
                        <input className="inputControl" required value={updateTodo} onChange={(e) => setUpdateTodo(e.target.value)} />
                        <button className="btn btnBg btnControl btnControlUpdate" onClick={() => submitUpdate(todo.id)}>Update</button>
                    </div>
                    :
                    <div className="row justify-content-between flexColumn">
                        <div>
                            <h4 className={`${todo.isCompleted ? 'completed' : ''}`}>{todo.todoText}</h4>
                        </div>
                        <div>
                            <button className="btn btn-success" onClick={() => completeTodo(index)}><i className={`fa ${todo.isCompleted ? "fa-times" : "fa-check"}`} aria-hidden="true"></i></button>
                            <button className="btn btn-danger btnsMarginFix" onClick={() => deleteToDo(todo.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                            <button className="btn btn-warning btn-warning-white" onClick={() => setEditToDo(!editToDo)} disabled={todo.isCompleted}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                        </div>
                    </div>
            }

        </div >
    )
}
