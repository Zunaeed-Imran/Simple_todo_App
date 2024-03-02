import { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(['Eat', 'work', 'sleep']);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Enter Title"
            value={newTask}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="button" onClick={addTask}>
            Add Data
          </button>
        </div>
      </form>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
