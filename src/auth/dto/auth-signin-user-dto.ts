import { IsEmail, IsString, Matches } from 'class-validator';

export class SignInUserDto {
  @IsEmail()
  email: string;

  /* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character */

  password: string;
}
