import React from 'react';

export const TodoListItem = ({ todo, i, handleToggle, handleDelete }) => {
    return (
        <li
            key={ todo.id }
            className="list-group-item"
        >
            <p
                className={ `${ todo.done && 'complete' }`}
                onClick={ (e) => handleToggle(todo.id) }
            >
                {i + 1} { todo.desc }
            </p>
            <hr />
            <button
                className="btn btn-danger"
                onClick={ (e) => handleDelete(todo.id) }
            >
                Borrar
            </button>
        </li>
    )
}
