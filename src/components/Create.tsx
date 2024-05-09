import { FormEvent, useContext, useState } from 'react'
import { useCaseContext } from '../contexts/use-case'

interface CreateProps {
  setListUpdated: (value: boolean) => void
}

export function Create({ setListUpdated }: CreateProps) {
  const [description, setDescription] = useState('')
  const { createTaskUseCase } = useContext(useCaseContext)

  async function createTask(event: FormEvent) {
    event.preventDefault()

    try {
      await createTaskUseCase.execute({
        description,
        done: false,
      })
  
      setListUpdated(false)
      setDescription('')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <form onSubmit={createTask}>
      <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Criar</button>
    </form>
  )
}