import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { JWTPayload } from '../interfaces/jwt-payload.dto';

@Injectable()
export class JwtUserStrategy extends PassportStrategy(Strategy, 'jwt-user') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration:  '1',
      secretOrKey: 'JWT_SECRET',
      algorithms: ['HS256'],
      audience: 'aud-user',
      issuer: 'issu-user'
    });
  }

  async validate(payload) {
    // TODO: we can add jwt to redis and validate it here
//  username: 'test1', id: '1', iat: 1718355676 }
    return payload;
  }
}

// import { Injectable } from '@nestjs/common';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { PassportStrategy } from '../../lib';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: 's3cr3t'
//     });
//   }

//   validate(payload) {
//     return { id: payload.id, email: payload.email };
//   }
// }
