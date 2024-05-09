import { Task } from '../../entities/task'
import { TaskRepository } from '../../repositories/task-repository'
import { CreateTaskRequestDto, CreateTaskResponseDto } from './create-task-dto'

export class CreateTaskUseCase {
  private taskRepository: TaskRepository

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository
  }

  async execute(createTaskDto: CreateTaskRequestDto): Promise<CreateTaskResponseDto> {
    const { description, done } = createTaskDto
    const task = new Task({ description, done })

    await this.taskRepository.create(task)
  }
}