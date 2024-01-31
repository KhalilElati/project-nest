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
// import { AuthRegisterUserDto } from './dto/auth-register-user-dto';
// // import { CognitoProvider } from './cognito/cognito';
import { SignInUserDto } from './dto/auth-signin-user-dto';
import { AuthService } from './auth.service';
import { SignUpUserDto } from './dto/auth-signup-user-dto';
@Controller('')
export class AuthController {
  constructor(
    // private readonly cognito: CognitoProvider
    private authService: AuthService,
  ) {}
  @Post('/login')
  loginUser(@Body() authLoginDto: SignInUserDto) {
    const authResult = this.authService.validateUser(authLoginDto);
    return authResult;
  }

  @Post('/signup')
  signUpUser(@Body() authRegisterDto: SignUpUserDto) {
    return this.authService.signUp(authRegisterDto);
  }
}

//   @Post('/signup')
//   signUpUser(@Body() createAuthDto: AuthRegisterUserDto) {
//     return this.cognito.signUp(createAuthDto);
//   }
// }

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
