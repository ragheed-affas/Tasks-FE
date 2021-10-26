import {useEffect, useState} from 'react'
import {fetchAllTasks} from '../api'

const BASE_URL = 'https://tasks.ragheed-affas.repl.co/api/v1'

const useFetchTasks = (update) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  const fetchTasks = async () => {
    try {
      const { data, err } = await fetchAllTasks();
      setTasks(data)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }
  
  useEffect(async ()=> {
    setLoading(true)
    await fetchTasks()
  }, [])

  return {tasks, isLoading, error, fetchTasks}
}

export default useFetchTasks