import React from 'react';

export default function TaskList({tasks, completeTask, deleteTask}) {
   return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.completed ? <strike>{task.content}</strike> : task.content}
                    <div>
                        <button className="complete" onClick={() => completeTask(task.id)}>{task.completed ? '-' : 'V'}</button>
                        <button className="delete" onClick={() => deleteTask(task.id)}>X</button>
                    </div>
                </li>
            ))}
        </ul>
   );
}