import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { CognitoProvider } from './cognito/cognito';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from 'aws-sdk';

@Module({
  imports: [ConfigModule],
  controllers: [AuthController],
  providers: [CognitoProvider],
})
export class AuthModule {}
