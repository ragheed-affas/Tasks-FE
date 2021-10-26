import React, { useState } from 'react';
import { fetchDeleteTask, fetchPatchTask } from '../api'
import deleteIcon from '../../assets/delete.svg'

function Task({task, fetchTasks}) {

  const [isLoading, setLoading] = useState(false);

  const patchTask = async (task) => {
    setLoading(true)
    const { data, err } = await fetchPatchTask(task)
    setLoading(false)
    if (data) {
      fetchTasks()
    }
  }

  const deleteTask = async (id) => {
    setLoading(true)
    const { data, err } = await fetchDeleteTask(id)
    setLoading(false)
    fetchTasks()
  }

  return (
    <div
      style={{
        padding: 20,
        marginBottom: 15,
        display: 'flex',
        alignItems: 'center',
        boxShadow: '-5px 5px 10px #ccc',
      }}
    >
      <input
        id={task._id}
        type="checkbox"
        onChange={(e) => patchTask({ ...t, done: e.targetask.checked })}
        checked={task.done}
        style={{
          marginRight: 10
        }}
      />
      <div
        style={{
          flexGrow: 1,
          textDecoration: task.done ? 'line-through' : 'none',
          wordBreak: 'break-all',
        }}
      >
        {task.task}
      </div>
      <button
        onClick={() => deleteTask(task._id)}
        style={{
          width: 20,
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          padding: 0
        }}
      >
        <img src={deleteIcon} alt="delete icon" />
      </button>
    </div>
  );
}

export default Task;