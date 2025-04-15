import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
@Controller()
export class PagesController {
  @Get('/')
  Home(@Req() req: Request, @Res() res: Response) {
    if (!req.session.user) return res.redirect('/login');
    return res.render('home', {
      layoutVariant: 'headerFooter',
      user: req.session.user,
      posts: [],
      meta: { title: 'Home' },
    });
  }

  @Get('/register')
  Register(@Req() req: Request, @Res() res: Response) {
    if (req.session.user) return res.redirect('/');
    return res.render('register', {
      layoutVariant: 'headerFooter',
      meta: { title: 'Register' },
    });
  }

  @Get('/login')
  Login(@Req() req: Request, @Res() res: Response) {
    if (req.session.user) return res.redirect('/');
    return res.render('login', {
      layoutVariant: 'headerFooter',
      meta: { title: 'Login' },
    });
  }

  @Get('/post')
  PostPage(@Req() req: Request, @Res() res: Response) {
    if (!req.session.user) return res.redirect('/login');
    return res.render('post', {
      layoutVariant: 'headerFooter',
      user: req.session.user,
      meta: { title: 'Post' },
    });
  }

  @Get('/settings')
  Settings(@Req() req: Request, @Res() res: Response) {
    if (!req.session.user) return res.redirect('/login');
    return res.render('settings', {
      layoutVariant: 'headerFooter',
      user: req.session.user,
      meta: { title: 'Settings' },
    });
  }

  @Get('/profile/:id')
  Profile(@Req() req: Request, @Res() res: Response, @Param() params: { id: string }) {
    if (!req.session.user) return res.redirect('/login');
    return res.render('profile', {
      layoutVariant: 'headerFooter',
      user: req.session.user,
      meta: { title: `User ${params.id}` },
    });
  }

  @Get('*')
  @Post('*')
  notFound(@Req() req: Request, @Res() res: Response) {
    return res.status(404).render('404', {
      user: req.session.user ?? null,
      layoutVariant: 'headerFooter',
      meta: { title: 'Page Not Found' },
    });
  }
}
