import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { filter } from 'rxjs/operators';
@Injectable()
export class TasksService {
  private tasks: ITask[] = [];
  getAllTasks(): ITask[] {
    return this.tasks;
  }
  getTaskById(id: string) {
    return this.getAllTasks().find((task: ITask) => task.id === id);
  }
  getTaskWithFilters(filterDto: GetTasksFilterDto): ITask[] {
    const { status, search} = filterDto;
    let tasks = this.getAllTasks();
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }
    if(search) {
      tasks = tasks.filter((task) => task.title.includes(search) || task.description.includes(search));
    }
    return tasks;
  }
  createTask(createTaskDto: CreateTaskDto): ITask {
    const { title, description } = createTaskDto;
    const task: ITask = { id: uuid.v1(), title, description, status: TASKSTATUS.OPEN };
    this.tasks.push(task);
    console.log(task);
    return task;
  }

  deleteTask(id: string) {
    const index = this.getAllTasks().findIndex((t) => t.id === id);
    console.log(this.tasks.splice(index, 1));
    return this.tasks;
  }
  updateTaskStatus(id: string, taskStatus: TASKSTATUS) {
    const task = this.getTaskById(id);
    task.status = taskStatus;
    return task;
  }
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TASKSTATUS;
}

export enum TASKSTATUS {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}
