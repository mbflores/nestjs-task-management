import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  // @Get()
  // getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): ITask[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.taskService.getTaskWithFilters(filterDto);
  //   }
  //   return this.taskService.getAllTasks();
  // }
  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getTaskById(id);
  }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDto: CreateTaskDto): ITask {
  //   return this.taskService.createTask(createTaskDto);
  // }
  // @Delete('/:id')
  // deleteTask(@Param('id') id: string) {
  //   return this.taskService.deleteTask(id);
  // }
  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidationPipe) status: TASKSTATUS,
  // ) {
  //   return this.taskService.updateTaskStatus(id, status);
  // }
}
