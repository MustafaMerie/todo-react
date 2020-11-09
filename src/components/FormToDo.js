import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function FormToDo(props) {

    const [text, setText] = useState('');

    const addToDoHandler = e => {

        e.preventDefault()

        props.onSubmit({
            todoText: text,
            isCompleted: false,
            id: uuidv4()
        })

        setText('')

    }

    return (
        <form className="row justify-content-between p-3" onSubmit={addToDoHandler}>
            <input required pattern=".*\S+.*" type="text" className="inputControl" aria-describedby="toDoText" placeholder="Please write your todo" value={text} onChange={(e) => setText(e.target.value)} />
            <input type="submit" className="btn btnControl btnBg" value="Add" />
        </form>
    )
}
