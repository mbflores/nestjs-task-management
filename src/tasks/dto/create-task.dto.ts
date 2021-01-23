import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsOptional()
  title: string;
  @IsNotEmpty()
  description: string;
}