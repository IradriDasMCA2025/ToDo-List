import React from "react";

function CompletedTasks({ tasks }) {
    return (
        <div className="completed-panel">
            <h2>Completed Tasks</h2>
            {tasks.length === 0 ? (
                <p>No completed tasks</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            ✅ {task.text} <span>({task.date})</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CompletedTasks;
