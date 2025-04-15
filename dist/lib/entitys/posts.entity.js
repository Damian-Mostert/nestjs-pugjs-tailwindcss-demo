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
exports.Posts = void 0;
var typeorm_1 = require("typeorm");
var users_entity_1 = require("./users.entity");
var Posts = (function () {
    function Posts() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Posts.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Posts.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'text' }),
        __metadata("design:type", String)
    ], Posts.prototype, "content", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
        __metadata("design:type", Array)
    ], Posts.prototype, "photoUrls", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        __metadata("design:type", Number)
    ], Posts.prototype, "likeCount", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'json', nullable: true }),
        __metadata("design:type", Array)
    ], Posts.prototype, "comments", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return users_entity_1.Users; }, function (user) { return user.posts; }, { onDelete: 'CASCADE' }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", users_entity_1.Users)
    ], Posts.prototype, "author", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Posts.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Posts.prototype, "updatedAt", void 0);
    Posts = __decorate([
        (0, typeorm_1.Entity)()
    ], Posts);
    return Posts;
}());
exports.Posts = Posts;
//# sourceMappingURL=posts.entity.js.map