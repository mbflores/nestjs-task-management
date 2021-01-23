import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepo: UserRepository) {
  }
  async sighUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return await this.userRepo.signUp(authCredentialsDto);
  }
}
