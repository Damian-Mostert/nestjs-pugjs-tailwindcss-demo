"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesController = void 0;
var common_1 = require("@nestjs/common");
var PagesController = (function () {
    function PagesController() {
    }
    PagesController.prototype.Home = function (req, res) {
        if (!req.session.user)
            return res.redirect('/login');
        return res.render('home', {
            layoutVariant: 'headerFooter',
            user: req.session.user,
            posts: [],
            meta: { title: 'Home' },
        });
    };
    PagesController.prototype.Register = function (req, res) {
        if (req.session.user)
            return res.redirect('/');
        return res.render('register', {
            layoutVariant: 'headerFooter',
            meta: { title: 'Register' },
        });
    };
    PagesController.prototype.Login = function (req, res) {
        if (req.session.user)
            return res.redirect('/');
        return res.render('login', {
            layoutVariant: 'headerFooter',
            meta: { title: 'Login' },
        });
    };
    PagesController.prototype.PostPage = function (req, res) {
        if (!req.session.user)
            return res.redirect('/login');
        return res.render('post', {
            layoutVariant: 'headerFooter',
            user: req.session.user,
            meta: { title: 'Post' },
        });
    };
    PagesController.prototype.Settings = function (req, res) {
        if (!req.session.user)
            return res.redirect('/login');
        return res.render('settings', {
            layoutVariant: 'headerFooter',
            user: req.session.user,
            meta: { title: 'Settings' },
        });
    };
    PagesController.prototype.Profile = function (req, res, params) {
        if (!req.session.user)
            return res.redirect('/login');
        return res.render('profile', {
            layoutVariant: 'headerFooter',
            user: req.session.user,
            meta: { title: "User ".concat(params.id) },
        });
    };
    PagesController.prototype.notFound = function (req, res) {
        var _a;
        return res.status(404).render('404', {
            user: (_a = req.session.user) !== null && _a !== void 0 ? _a : null,
            layoutVariant: 'headerFooter',
            meta: { title: 'Page Not Found' },
        });
    };
    __decorate([
        (0, common_1.Get)('/'),
        __param(0, (0, common_1.Req)()),
        __param(1, (0, common_1.Res)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], PagesController.prototype, "Home", null);
    __decorate([
        (0, common_1.Get)('/register'),
        __param(0, (0, common_1.Req)()),
        __param(1, (0, common_1.Res)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], PagesController.prototype, "Register", null);
    __decorate([
        (0, common_1.Get)('/login'),
        __param(0, (0, common_1.Req)()),
        __param(1, (0, common_1.Res)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], PagesController.prototype, "Login", null);
    __decorate([
        (0, common_1.Get)('/post'),
        __param(0, (0, common_1.Req)()),
        __param(1, (0, common_1.Res)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], PagesController.prototype, "PostPage", null);
    __decorate([
        (0, common_1.Get)('/settings'),
        __param(0, (0, common_1.Req)()),
        __param(1, (0, common_1.Res)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], PagesController.prototype, "Settings", null);
    __decorate([
        (0, common_1.Get)('/profile/:id'),
        __param(0, (0, common_1.Req)()),
        __param(1, (0, common_1.Res)()),
        __param(2, (0, common_1.Param)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], PagesController.prototype, "Profile", null);
    __decorate([
        (0, common_1.Get)('*'),
        (0, common_1.Post)('*'),
        __param(0, (0, common_1.Req)()),
        __param(1, (0, common_1.Res)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], PagesController.prototype, "notFound", null);
    PagesController = __decorate([
        (0, common_1.Controller)()
    ], PagesController);
    return PagesController;
}());
exports.PagesController = PagesController;
//# sourceMappingURL=pages.controller.js.map