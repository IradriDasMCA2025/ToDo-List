import React from "react";

function TaskInput({ taskText, setTaskText, taskDate, setTaskDate, addTask, todayStr }) {
    return (
        <div className="task-input">
            <input
                type="text"
                placeholder="Enter task..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <input
                type="date"
                value={taskDate}
                min={todayStr}
                onChange={(e) => setTaskDate(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default TaskInput;
