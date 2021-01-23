import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TASKSTATUS } from './task-status.enum';

@Entity()
export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  string: string;

  @Column()
  status: TASKSTATUS;
}
