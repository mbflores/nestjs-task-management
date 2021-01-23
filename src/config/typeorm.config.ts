import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TaskEntity } from '../tasks/task.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'taskmanagement',
  entities: [TaskEntity],
  synchronize: true
}
