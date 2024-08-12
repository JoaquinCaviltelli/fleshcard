// src/App.js
import  { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import { loadTasks, saveTasks } from './localStorage';

const App = () => {
  const [tasks, setTasks] = useState(loadTasks());

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks.sort((a, b) => (b.impact + b.confidence + b.ease) - (a.impact + a.confidence + a.ease))}
        removeTask={removeTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
