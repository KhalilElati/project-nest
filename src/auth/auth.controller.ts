import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthRegisterUserDto } from './dto/auth-register-user-dto';
import { AuthLoginUserDto } from './dto/auth-login-user-dto';
import { CognitoProvider } from './cognito/cognito';

@Controller('')
export class AuthController {
  constructor(private readonly cognito: CognitoProvider) {}
  @Post('/login')
  loginUser(@Body() authLoginDto: AuthLoginUserDto) {
    const authResult = this.cognito.signIn(authLoginDto);
    return authResult;
  }
  @Post('/signup')
  signUpUser(@Body() createAuthDto: AuthRegisterUserDto) {
    return this.cognito.signUp(createAuthDto);
  }
}

//   @Get()
//   findAll() {
//     return this.authService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.authService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateAuthDto: AuthLoginUserDto) {
//     return this.authService.update(+id, updateAuthDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.authService.remove(+id);
//   }
// }
