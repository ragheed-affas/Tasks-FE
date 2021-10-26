import React, { useState } from 'react';
import { fetchAddTask  } from '../api'

function NewTask({ fetchTasks }) {
  const [newTask, setNewTask] = useState('')
  const [isLoading, setLoading] = useState(false);

  const addTask = async () => {
    setLoading(true)
    const { data, err } = await fetchAddTask(newTask)
    if (data) {
      setLoading(false)
      setNewTask('')
      fetchTasks()
    }
  }

  return (
    <form
      style={{
        marginTop: 50,
      }}
      onSubmit={(e) => {
        e.preventDefault()
        addTask()
      }}
    >
      <textarea
        type="text"
        value={isLoading ? 'saving...' : newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{
          width: '100%',
          border: 'none',
          padding: 20,
          boxShadow: '-5px 5px 10px #ccc',
          outline: 'none',
          boxSizing: 'border-box',
          display: 'block',
          marginBottom: 10
        }}
        placeholder="new task..."
        disabled={isLoading}
      />
      <button
        type="submit"
        style={{
          border: 'none',
          background: 'blue',
          color: '#fff',
          padding: '10px 30px',
          boxShadow: '-5px 5px 10px #ccc',
          cursor: 'pointer',
        }}
        disabled={isLoading || !newTask}
      >
        SAVE
      </button>
    </form>
  );
}

export default NewTask;