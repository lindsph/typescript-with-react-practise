import * as React from 'react';
import './ToDoList.css';

interface ToDoListProps {
    items: {
        id: string,
        text: string
    }[],
    toDoDeleteHandler: (id: string) => void;
};

const ToDoList = ({items, toDoDeleteHandler}: ToDoListProps) => {

    return (
        <ul>
            {items.map(item => {
                return (
                    <li key={item.id}>
                        <span>{item.text}</span>
                        <button onClick={() => toDoDeleteHandler(item.id)}>DELETE</button>
                    </li>   
                )
            })}
        </ul>
    )
}

export default ToDoList;