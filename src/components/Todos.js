import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({todos}) => {
    return (
        <div className="container">
            <h3>Todos List</h3>
            <TodoItem todo={todos[0]}></TodoItem>
        </div>
    )
}

export default Todos
