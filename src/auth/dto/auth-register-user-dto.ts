import { IsEmail, IsString, Matches } from 'class-validator';

export class AuthRegisterUserDto {
  @IsString()
  given_name: string;
  @IsString()
  family_name: string;

  @IsEmail()
  email: string;

  /* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character */

  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'invalid password',
  })
  password: string;
}
