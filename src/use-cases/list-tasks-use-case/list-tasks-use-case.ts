import { TaskRepository } from '../../repositories/task-repository'
import { ListTasksResponseDto } from './list-tasks-dto'

export class ListTasksUseCase {
  private taskRepository: TaskRepository

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository
  }

  async execute(): Promise<ListTasksResponseDto> {
    const tasks = await this.taskRepository.list()

    return tasks
  }
}