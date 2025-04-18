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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
var typeorm_1 = require("typeorm");
var settings_entity_1 = require("./settings.entity");
var posts_entity_1 = require("./posts.entity");
var follow_entity_1 = require("./follow.entity");
var Users = (function () {
    function Users() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Users.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Users.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "firstName", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "lastName", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return settings_entity_1.Settings; }, function (settings) { return settings.user; }, {
            cascade: true,
            eager: true,
        }),
        __metadata("design:type", settings_entity_1.Settings)
    ], Users.prototype, "settings", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return posts_entity_1.Posts; }, function (post) { return post.author; }),
        __metadata("design:type", Array)
    ], Users.prototype, "posts", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return follow_entity_1.Follow; }, function (follow) { return follow.follower; }),
        __metadata("design:type", Array)
    ], Users.prototype, "following", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return follow_entity_1.Follow; }, function (follow) { return follow.following; }),
        __metadata("design:type", Array)
    ], Users.prototype, "followers", void 0);
    Users = __decorate([
        (0, typeorm_1.Entity)()
    ], Users);
    return Users;
}());
exports.Users = Users;
//# sourceMappingURL=users.entity.js.map