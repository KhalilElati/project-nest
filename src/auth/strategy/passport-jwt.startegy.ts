
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import {PassportStrategy} from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from "../auth.service";
import { ConfigService } from "@nestjs/config";
import { JwtPayloadInterface } from "../interfaces/jwt-payload.interface"


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // TODO: change this to true
      
      
    });
  }

  async validate(payload: JwtPayloadInterface) {
    // j'ai récupéré mon user
    console.log(payload);
    return { userId: payload.sub, username: payload.username}

  }
}