import { ReactNode, createContext } from 'react'
import { CreateTaskUseCase } from '../use-cases/create-task-use-case/create-task-use-case'
import { AxiosTaskRepository } from '../repositories/axios-task-repository'
import { ListTasksUseCase } from '../use-cases/list-tasks-use-case/list-tasks-use-case'

interface UseCaseContext {
  createTaskUseCase: CreateTaskUseCase
  listTasksUseCase: ListTasksUseCase
}

const createTaskUseCase = new CreateTaskUseCase(new AxiosTaskRepository())
const listTasksUseCase = new ListTasksUseCase(new AxiosTaskRepository())

const useCaseContext = createContext<UseCaseContext>({ createTaskUseCase, listTasksUseCase })

function UseCaseProvider({ children }: { children: ReactNode }) {
  return (
    <useCaseContext.Provider value={{ createTaskUseCase, listTasksUseCase }}>
      {children}
    </useCaseContext.Provider>
  )
}

export { UseCaseProvider, useCaseContext }
