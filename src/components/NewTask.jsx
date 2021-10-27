import React, { useState } from 'react';
import { fetchAddTask  } from '../api'

function NewTask({ fetchTasks }) {
  const [newTask, setNewTask] = useState('')
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addTask = async () => {
    setLoading(true)
    const res = await fetchAddTask(newTask)
    if (!res.data.msg) {
      setNewTask('')
      fetchTasks()
    } else {
      setError(res.data.msg)
    }
    setLoading(false)
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
        onChange={(e) => {
          setNewTask(e.target.value)
          setError(null)
        }}
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
        <div
          style={{
            fontSize: 12,
            margin: '10px 0',
            color: '#ff0000',
            height: 14
          }}>
      {error ? `error: ${error}` : ''}
        </div>
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