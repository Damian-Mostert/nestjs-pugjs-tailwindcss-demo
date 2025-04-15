"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@nestjs/core");
var app_module_1 = require("./app.module");
var path_1 = require("path");
var session = require("express-session");
var dotenv = require("dotenv");
var links_1 = require("./data/links");
var MySQLStore = require('express-mysql-session')(session);
dotenv.config({ path: (0, path_1.join)(__dirname, '../', ".env") });
var secret = process.env.SESSION_SECRET;
var sessionStore = new MySQLStore({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
sessionStore.onReady().catch(function (error) { return console.error(error); });
core_1.NestFactory.create(app_module_1.AppModule).then(function (app) {
    app.use(session({
        key: 'session_id',
        secret: secret,
        store: sessionStore,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        },
    }));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'node_modules/alpinejs'));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views/pages'));
    app.setViewEngine('pug');
    app.use(function (req, res, next) {
        if (req.method === 'GET' || req.method === 'POST') {
            res.locals.links = links_1.default;
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
//# sourceMappingURL=main.js.map