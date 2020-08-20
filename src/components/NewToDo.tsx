import * as React from 'react'
import {useRef} from 'react';
import './NewToDo.css';

interface NewToDoProps {
    toDoAddHandler: (text: string) => void;
}

const NewToDo = ({toDoAddHandler}: NewToDoProps) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const toDoSubmitHandler = (event: React.FormEvent): void => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        toDoAddHandler(enteredText);
        textInputRef.current!.value = "";
    }

    return (
        <form onSubmit={toDoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">ADD TO DO</button>
        </form>
    )
};

export default NewToDo;