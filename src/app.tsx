import { useContext, useEffect, useState } from 'react'
import { Create } from './components/Create'
import { Task } from './entities/task'
import { useCaseContext } from './contexts/use-case'

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const { listTasksUseCase } = useContext(useCaseContext)

  useEffect(() => {
    async function loadTasks() {
      try {
        const tasks = await listTasksUseCase.execute()
        setTasks(tasks)
      } catch (error) {
        alert(error)
      }
    }

    loadTasks()
  })

  return (
    <div>
      <h1>To-do</h1>
      <Create setListUpdated={(value: boolean) => {}} />
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>{task.description}</li>
          )
        })}
      </ul>
    </div>
  )
}
