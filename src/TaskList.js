import React from 'react';

export default function TaskList({tasks, completeTask, deleteTask}) {
   return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li className="task-list__item" key={task.id}>
                    <p>{task.completed ? <strike>{task.content}</strike> : task.content}</p>
                    <div className="button-container">
                        <button className="complete" onClick={() => completeTask(task.id)}>{task.completed ? '-' : 'Check!'}</button>
                        <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
   );
}