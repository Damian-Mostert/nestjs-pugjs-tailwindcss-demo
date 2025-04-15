import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { NextFunction, Response, Request } from 'express';

import * as session from 'express-session';
import * as dotenv from 'dotenv';

import links from "./data/links";

const MySQLStore = require('express-mysql-session')(session);

dotenv.config({ path: join(__dirname, '../', ".env") });

const secret = process.env.SESSION_SECRET;
const sessionStore = new MySQLStore({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

sessionStore.onReady().catch((error: Error) => console.error(error));

NestFactory.create<NestExpressApplication>(AppModule).then(app => {
  app.use(
    session({
      key: 'session_id', // Name of the cookie
      secret: secret, // Session secret for signing the cookie
      store: sessionStore, // MySQL session store
      resave: false, // Do not resave session if unmodified
      saveUninitialized: false, // Do not save uninitialized sessions
      cookie: {
        secure: false, // Set to true if using HTTPS
        httpOnly: true, // Cookie accessible only through HTTP
        maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
      },
    })
  );

  // Set up static assets and views
  app.useStaticAssets(join(__dirname, '..', 'node_modules/alpinejs'));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views/pages'));
  app.setViewEngine('pug');  // Set Pug as the view engine  
  // Inject local helpers for views
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.method === 'GET' || req.method === 'POST') {
      res.locals.links = links;
      res.locals.path = req.path;
      res.locals.Form = require('../views/lib/form.js');
      res.locals.Accordion = require('../views/lib/accordion.js');
      res.locals.InputField = require('../views/lib/inputField.js');
      res.locals.Modal = require('../views/lib/modal.js');
      res.locals.Tabs = require('../views/lib/tabs.js');
    }
    next();
  });

  app.listen(3000);
});
