import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TASKSTATUS } from './task-status.enum';

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
      throw new NotFoundException(`Task with ${id} not found`);
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
  async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return this.taskRepo.createTask(createTaskDto);
  }
  //
  async deleteTask(id: number): Promise<void> {
    const result = await this.taskRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ${id} not found`);
    }
  }
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
