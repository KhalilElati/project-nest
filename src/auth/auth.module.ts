import { Module } from '@nestjs/common';
// import { AuthController } from './auth.controller';
// import { CognitoProvider } from './cognito/cognito';
import { ConfigModule } from '@nestjs/config';
// import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user/entities/user.entity';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ConfigModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService, UserService],
  exports: [TypeOrmModule, PassportModule],
})
export class AuthModule {}
