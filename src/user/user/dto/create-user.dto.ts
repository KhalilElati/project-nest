import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  email: string;
}
