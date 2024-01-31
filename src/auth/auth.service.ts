import {
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from './../user/user.service';
import { SignUpUserDto } from './dto/auth-signup-user-dto';
import { SignInUserDto } from './dto/auth-signin-user-dto';
import { User } from 'src/user/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: SignUpUserDto): Promise<Partial<User>> {
    return this.userService.create(createUserDto);
  }

  async validateUser(signInUserDto: SignInUserDto) {
    const { email, password } = signInUserDto;
    const user = await this.userService.findByEmail(email);
    const hashedPassword = await bcrypt.hash(password, user.salt);
    if (hashedPassword !== user.password) {
      throw new UnauthorizedException();
    }
    if (hashedPassword === user.password) {
      const payload = {
        ...user,
      };
      const jwt = this.jwtService.sign(payload);
      return { access_token: jwt };
    }
  }
}
