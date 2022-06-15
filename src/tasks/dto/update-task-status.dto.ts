import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.module';

export class updateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
