import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ITask, TasksService, TASKSTATUS } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Get()
  getAllTasks(): ITask[] {
    return this.taskService.getAllTasks();
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): ITask {
    return this.taskService.createTask(createTaskDto);
  }
  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TASKSTATUS) {
    return this.taskService.updateTaskStatus(id, status);
  }
}
