import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../lib';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('jwt-user'))
  @Get('private')
  getPrivateHello(@Req() req: any) {
    console.log(req?.user);
    return this.appService.getPrivateMessage();
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: any, @Body() body: Record<string, string>) {
    console.log(req?.user);
    // return { statusbar: 'success' };
    // console.log(req.a)
    return this.appService.getToken({
      username: body.username,
      id: req.user.id
    });
  }
}
