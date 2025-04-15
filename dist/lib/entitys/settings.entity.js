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
exports.Settings = void 0;
var typeorm_1 = require("typeorm");
var users_entity_1 = require("./users.entity");
var Settings = (function () {
    function Settings() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Settings.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return users_entity_1.Users; }, function (user) { return user.settings; }, { onDelete: 'CASCADE' }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", users_entity_1.Users)
    ], Settings.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 'everyone' }),
        __metadata("design:type", String)
    ], Settings.prototype, "profileVisibility", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "allowMessages", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "showOnlineStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 'light' }),
        __metadata("design:type", String)
    ], Settings.prototype, "theme", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "emailNotifications", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "pushNotifications", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "isActive", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "isDeactivated", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "isPrivateAccount", void 0);
    Settings = __decorate([
        (0, typeorm_1.Entity)()
    ], Settings);
    return Settings;
}());
exports.Settings = Settings;
//# sourceMappingURL=settings.entity.js.map