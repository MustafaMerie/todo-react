import React, { useState, useEffect } from 'react'
import FormToDo from './FormToDo';
import ItemListToDo from './ItemListToDo';


export default function ListToDo() {

    const [todos, setTodos] = useState([])


    useEffect(() => {
        const todosStore = JSON.parse(localStorage.getItem('todos'))
        if (todosStore) setTodos(todosStore)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const addToDo = todo => {
        const newTodo = [todo, ...todos]
        setTodos(newTodo)
    }

    const completeTodo = index => {
        let todosArray = [...todos];
        todosArray[index].isCompleted = !todosArray[index].isCompleted;
        setTodos(todosArray);
    }

    const deleteToDo = id => {
        let todosArray = [...todos].filter(todo => todo.id !== id)
        setTodos(todosArray);
    }


    /*

    we can do the deleteing using splice method also

    const deleteToDo = index => {
        let todosArray = [...todos];
        todosArray.splice(index, 1);
        setTodos(todosArray);
    }

    onClick={() => deleteToDo(index)}
    */

    return (
        <>
            <FormToDo onSubmit={addToDo} />
            {
                todos.length <= 0 ? <h3 className="text-center my-5">You have nothing to do ... So far!</h3> :
                    todos.map((todo, index) => <ItemListToDo key={index} index={index} todo={todo} todos={todos} completeTodo={completeTodo} deleteToDo={deleteToDo}></ItemListToDo>)


            }
        </>
    )
}
