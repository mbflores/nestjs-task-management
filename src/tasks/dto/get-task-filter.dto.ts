import { TASKSTATUS } from '../tasks.service';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TASKSTATUS.OPEN, TASKSTATUS.DONE, TASKSTATUS.IN_PROGRESS])
  status: TASKSTATUS;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}