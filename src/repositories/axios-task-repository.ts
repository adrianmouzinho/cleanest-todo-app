import axios, { AxiosInstance } from 'axios';
import { Task } from '../entities/task';
import { TaskRepository } from './task-repository'

// const api = axios.create({
//   baseURL: 'http://localhost:3333',
// })

export class AxiosTaskRepository implements TaskRepository {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3333',
    })
  }

  async create(task: Task): Promise<Task> {
    const { description, done } = task

    const response = await this.api.post('/tasks', { description, done })

    return response.data
  }

  async list(): Promise<Task[]> {
    const response = await this.api.get('/tasks')

    return response.data
  }

  async toggle(taskId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async remove(taskId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}