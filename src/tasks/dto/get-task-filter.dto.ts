import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TASKSTATUS } from '../task-status.enum';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TASKSTATUS.OPEN, TASKSTATUS.DONE, TASKSTATUS.IN_PROGRESS])
  status: TASKSTATUS;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}