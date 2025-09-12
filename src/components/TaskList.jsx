import React from "react";

function TaskList({ tasks, toggleTask, removeTask }) {
    return (
        <div className="task-section">
            <h2>My Tasks</h2>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? "completed" : ""}>
                        <label>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                            />
                            {task.text} <span>({task.date})</span>
                        </label>
                        <button onClick={() => removeTask(task.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
