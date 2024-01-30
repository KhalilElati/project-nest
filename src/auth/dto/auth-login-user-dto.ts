import { IsEmail, IsString, Matches } from 'class-validator';

export class AuthLoginUserDto {
  @IsEmail()
  email: string;

  /* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character */

  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'invalid password',
  })
  password: string;
}
