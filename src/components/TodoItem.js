import React from 'react'

const TodoItem = ({todo}) => {
    return (
        <div>
            <h4 className="text-center">{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger">Delete</button>
        </div>
    )
}

export default TodoItem
