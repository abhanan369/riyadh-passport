import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '../../lib';
import { AppController } from '../common/app.controller';
import { AppService } from '../common/app.service';
// import { JwtStrategy } from '../common/jwt.strategy';
import { LocalStrategy } from '../common/local.strategy';
import { JwtUserStrategy } from '../common/jwt.strategy';

@Module({
  controllers: [AppController],
  imports: [
    JwtModule.register({
      signOptions: {
        header: {
          kid: process.env.KID || 'my_secret_kid!!!',
          alg: 'HS256',
          typ: 'JWT'
        }
      }
    })
    // PassportModule.register({})
  ],
  providers: [AppService, LocalStrategy, JwtUserStrategy]
})
export class AppModule {}
