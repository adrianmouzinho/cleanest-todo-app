interface TaskProps {
  description: string
  done: boolean
}

export class Task {
  private _id?: string
  private props: TaskProps

  constructor(props: TaskProps, id?: string) {
    const { description, done } = props

    if (!this.isDescriptionValid(description)) {
      throw new Error('INVALID_TASK_DESCRIPTION')
    }

    if (!this.isDoneValid(done)) {
      throw new Error('INVALID_TASK_DONE')
    }

    this._id = id
    this.props = {
      description,
      done
    }
  }

  get id() {
    return this._id
  }

  get description() {
    return this.props.description
  }

  get done() {
    return this.props.done
  }

  private isDescriptionValid(description: string): boolean {
    return typeof description === 'string' && 
      description.length > 3 &&
      description.length < 100
  }

  private isDoneValid(done: boolean): boolean {
    return typeof done === 'boolean'
  }
}