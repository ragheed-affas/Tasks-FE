import React, { useState } from 'react';
import Task from './components/Task'
import NewTask from './components/NewTask'

import useFetchTasks from './hooks/useFetchTasks';
import { fetchAddTask, fetchDeleteTask, fetchPatchTask } from './api'

import deleteIcon from '../assets/delete.svg'

function App() {

  const { tasks, isLoading, error, fetchTasks } = useFetchTasks()

  if (error) return <div>{error.message}</div>
  if (isLoading) return <div>loading...</div>;

  return (
    <main style={{ margin: 25 }}>
      <div>
        {tasks.map(t => t ?
          <Task task={t} fetchTasks={fetchTasks} key={t._id} />
          : null)}
        <NewTask fetchTasks={fetchTasks} />
      </div>
    </main>
  );
}

export default App;