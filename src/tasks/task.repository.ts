import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task';
import { CreateTaskDto } from './dto/create-task.dto';
import { TASKSTATUS } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async getTask(filterDto: GetTasksFilterDto): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');
    if (status) {
      query.andWhere('task.status = :status', { status: status });
    }
    if (search) {
      query.andWhere(
        'task.title LIKE :search OR task.description LIKE :search',
        { search: `%${search}%` },
      );
    }
    const tasks = query.getMany();
    return tasks;
  }
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = new Task();
    task.status = TASKSTATUS.OPEN;
    task.title = title;
    task.description = description;
    await task.save();
    return task;
  }
}
