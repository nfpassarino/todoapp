import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length === 0) {
            return;
        }

        handleAddTodo({
            id: new Date().getTime(),
            desc: description,
            done: false
        });

        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit= { handleSubmit }>
                <input
                    type="text"
                    name="description"
                    placeholder="..."
                    autoComplete="off"
                    className="form-control"
                    value={ description }
                    onChange={ handleInputChange } 
                />
                <div className="d-grid gap-2">
                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-1"
                    >
                        Agregar
                    </button>
                </div>
            </form>
        </>
    )
}
