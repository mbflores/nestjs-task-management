import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepo: TaskRepository,
  ) {}
  // private tasks: ITask[] = [];
  // getAllTasks(): ITask[] {
  //   return this.tasks;
  // }
  // getTaskById(id: string) {
  //   const found = this.getAllTasks().find((task: ITask) => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with ${id} not found`);
  //   }
  //   return found;
  // }
  async getTaskById(id: number): Promise<TaskEntity> {
    const found = await this.taskRepo.findOne(id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  // getTaskWithFilters(filterDto: GetTasksFilterDto): ITask[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(
  //       (task) =>
  //         task.title.includes(search) || task.description.includes(search),
  //     );
  //   }
  //   return tasks;
  // }
  // createTask(createTaskDto: CreateTaskDto): ITask {
  //   const { title, description } = createTaskDto;
  //   const task: ITask = {
  //     id: uuid.v1(),
  //     title,
  //     description,
  //     status: TASKSTATUS.OPEN,
  //   };
  //   this.tasks.push(task);
  //   console.log(task);
  //   return task;
  // }
  //
  // deleteTask(id: string) {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id === found.id);
  //   return this.tasks;
  // }
  // updateTaskStatus(id: string, taskStatus: TASKSTATUS) {
  //   const task = this.getTaskById(id);
  //   task.status = taskStatus;
  //   return task;
  // }
}
//
// export interface ITask {
//   id: string;
//   title: string;
//   description: string;
//   status: TASKSTATUS;
// }
