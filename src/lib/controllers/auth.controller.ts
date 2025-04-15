import { Controller, Post, Body, Req, Res, HttpStatus, Get } from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('/logout')
  async logout(
    @Req() req: Request,
    @Res() res: Response
  ) {
    req.session.user = null;
    return res.redirect("/login");
  }
  @Post('/login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
    @Req() req: Request,
    @Res() res: Response
  ) {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      return res.redirect("/?loginError=true");
    }    
    req.session.user = user;
    return res.redirect("/");
  }

  @Post('/register')
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Res() res: Response,
    @Req() req: Response
    ) {
    try {
      const newUser = await this.authService.createUser({
        email,
        password,
        firstName,
        lastName
      });
      //@ts-expect-error
      req.session.user = newUser;
      return res.redirect("/");
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: err.message || 'Registration failed',
      });
    }
  }
}
