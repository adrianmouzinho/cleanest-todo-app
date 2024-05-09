import { Task } from '../entities/task'

export interface TaskRepository {
  create(task: Task): Promise<Task>
  list(): Promise<Task[]>
  toggle(taskId: string): Promise<void>
  remove(taskId: string): Promise<void>
}