import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from '../tasks/task';
import { User } from '../auth/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'taskmanagement',
  entities: [Task, User],
  synchronize: true,
};
