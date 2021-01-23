import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TASKSTATUS } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TASKSTATUS.OPEN,
    TASKSTATUS.IN_PROGRESS,
    TASKSTATUS.DONE,
  ]

  transform(value: any): any {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status`);
    }
    return value;
  }
  private isStatusValid = (status) => this.allowedStatuses.indexOf(status) !== -1;
}

