// src/TaskList.js

const TaskList = ({ tasks, removeTask, toggleComplete }) => {
  return (
    <div className="py-6">
      {tasks.length === 0 && <p>No hay tareas</p>}
      <ul>
        {tasks.map((task, index) => (
          <li
          
            key={index}
            className={`flex items-center justify-between py-2 pl-4 pr-2 mb-4 border-2 rounded relative ${
              task.completed ? "bg-blue-100" : "bg-white"
            }`}
          >
            <span className="border-2  rounded-full w-8 h-8 flex justify-center items-center absolute -top-3 -left-3 bg-white ">
              {task.impact + task.confidence + task.ease}

            </span>
            <span
            onClick={() => toggleComplete(index)}
             className={`flex-1 cursor-pointer ${task.completed ? "line-through" : ""}`}>
              {task.name} 
            </span>
            <div>
              
              <button className="" onClick={() => removeTask(index)} >
                <span className="bg-blue-500 text-white rounded material-symbols-outlined p-1">
                  delete
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
