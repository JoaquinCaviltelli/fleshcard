// src/TaskForm.js
import { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [name, setName] = useState('');
  const [impact, setImpact] = useState(5);
  const [confidence, setConfidence] = useState(5);
  const [ease, setEase] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ name, impact, confidence, ease });
    setName('');
    setImpact(5);
    setConfidence(5);
    setEase(5);
  };

  return (
    <form onSubmit={handleSubmit} className=" max-w-full">
      <input
        type="text"
        placeholder="Tarea"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 py-2 px-4 border border-gray-300 rounded w-full outline-none"
      />
      <div className="mb-2">
        <label>Impacto: <b className='text-blue-600'>{impact}</b> </label>
        <input
          type="range"
          min="1"
          max="10"
          value={impact}
          onChange={(e) => setImpact(Number(e.target.value))}
          className="w-full slider"
          
        />
      </div>
      <div className="mb-2">
        <label>Confianza: <b className='text-blue-600'>{confidence}</b></label>
        <input
          type="range"
          min="1"
          max="10"
          value={confidence}
          onChange={(e) => setConfidence(Number(e.target.value))}
          className="w-full slider"
        />
      </div>
      <div className="mb-4">
        <label>Facilidad: <b className='text-blue-600'>{ease}</b></label>
        <input
          type="range"
          min="1"
          max="10"
          value={ease}
          onChange={(e) => setEase(Number(e.target.value))}
          className="w-full slider"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;
