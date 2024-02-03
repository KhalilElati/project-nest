// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import {
//   CognitoUserPool,
//   CognitoUserAttribute,
//   CognitoUser,
//   AuthenticationDetails,
//   ISignUpResult,
//   CognitoUserSession,
// } from 'amazon-cognito-identity-js';
// import { AuthRegisterUserDto } from '../dto/auth-register-user-dto';
// import { AuthLoginUserDto } from '../dto/auth-login-user-dto';

// @Injectable()
// export class CognitoProvider {
//   private userPool: CognitoUserPool;
//   private userPoolId: string;
//   private clientId: string;

//   constructor(private config: ConfigService) {
//     const region = config.get<string>('AWS_COGNITO_REGION');
//     this.userPoolId = config.get<string>('AWS_COGNITO_USER_POOL');
//     this.clientId = config.get<string>('AWS_COGNITO_APP_CLIENT_ID');
//     this.userPool = new CognitoUserPool({
//       UserPoolId: this.userPoolId,
//       ClientId: this.clientId,
//     });
//   }

//   async signUp(
//     authRegisterUserDto: AuthRegisterUserDto,
//   ): Promise<ISignUpResult> {
//     const attributeList: CognitoUserAttribute[] = [];
//     const { given_name, family_name, email, password } = authRegisterUserDto;

//     const nameAttribute = {
//       Name: 'given_name',
//       Value: given_name,
//     };
//     const nameAttributeObject = new CognitoUserAttribute(nameAttribute);
//     const lastNameAttribute = {
//       Name: 'family_name',
//       Value: family_name,
//     };
//     const lastNameAttributeObject = new CognitoUserAttribute(lastNameAttribute);
//     attributeList.push(nameAttributeObject);
//     attributeList.push(lastNameAttributeObject);
//     return new Promise((resolve, reject) => {
//       this.userPool.signUp(
//         email,
//         password,
//         attributeList,
//         null,
//         (err, result) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(result);
//           }
//         },
//       );
//     });
//   }

//   async signIn(authLoginDto: AuthLoginUserDto): Promise<CognitoUserSession> {
//     const { email, password } = authLoginDto;
//     const user = new CognitoUser({ Username: email, Pool: this.userPool });
//     const authDetails = new AuthenticationDetails({
//       Username: email,
//       Password: password,
//     });
//     return new Promise((resolve, reject) => {
//       user.authenticateUser(authDetails, {
//         onSuccess: (session: CognitoUserSession) => resolve(session),
//         onFailure: (err) => reject(err),
//       });
//     });
//   }
// }
