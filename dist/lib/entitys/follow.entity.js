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
exports.Follow = void 0;
var typeorm_1 = require("typeorm");
var users_entity_1 = require("./users.entity");
var Follow = (function () {
    function Follow() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Follow.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return users_entity_1.Users; }, function (user) { return user.following; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", users_entity_1.Users)
    ], Follow.prototype, "follower", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return users_entity_1.Users; }, function (user) { return user.followers; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", users_entity_1.Users)
    ], Follow.prototype, "following", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Follow.prototype, "createdAt", void 0);
    Follow = __decorate([
        (0, typeorm_1.Entity)()
    ], Follow);
    return Follow;
}());
exports.Follow = Follow;
//# sourceMappingURL=follow.entity.js.map