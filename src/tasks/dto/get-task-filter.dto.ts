import { TASKSTATUS } from '../tasks.service';

export class GetTasksFilterDto {
  status: TASKSTATUS;
  search: string;
}