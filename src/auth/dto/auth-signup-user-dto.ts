import { IsNotEmpty, Matches } from 'class-validator';

export class SignUpUserDto {

  @IsNotEmpty()
  email: string;

  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message: 'invalid password',
  // })
  @IsNotEmpty()
  password: string;

}