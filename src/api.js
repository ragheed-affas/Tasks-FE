const BASE_URL = 'https://tasks.ragheed-affas.repl.co/api/v1';

export const fetchAllTasks = async () => {
  try {
    const res = await fetch(`${BASE_URL}/tasks`)
    const data = await res.json()
    return { data }
  } catch (err) {
    return { err }
  }
}

export const fetchAddTask = async (newTask) => {
  try {
    const res = await fetch(`${BASE_URL}/tasks`,
    {
      method: 'POST',
      body: JSON.stringify({task: newTask, done: false}),
      headers: {"Content-type": "application/json"}
    })
    const data = await res.json()
    return { data }
  } catch (err) {
    return { err }
  }
}

export const fetchDeleteTask = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/tasks/${id}`, { method: 'DELETE' })
    const data = await res.json()
    return { data }
  } catch (err) {
    return { err }
  }
}

export const fetchPatchTask = async (taskObj) => {
  try {
    const res = await fetch(`${BASE_URL}/tasks/${taskObj._id}`, {
      method: 'PATCH',
      body: JSON.stringify(taskObj),
      headers: {"Content-type": "application/json"}
    })
    const data = await res.json()
    return { data }
  } catch (err) {
    return { err }
  }
}