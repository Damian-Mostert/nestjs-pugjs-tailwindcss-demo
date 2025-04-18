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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var auth_service_1 = require("../services/auth.service");
var AuthController = (function () {
    function AuthController(authService) {
        this.authService = authService;
    }
    AuthController.prototype.logout = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                req.session.user = null;
                return [2, res.redirect("/login")];
            });
        });
    };
    AuthController.prototype.login = function (username, password, req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.authService.validateUser(username, password)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2, res.redirect("/?loginError=true")];
                        }
                        req.session.user = user;
                        return [2, res.redirect("/")];
                }
            });
        });
    };
    AuthController.prototype.register = function (email, password, firstName, lastName, res, req) {
        return __awaiter(this, void 0, void 0, function () {
            var newUser, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.authService.createUser({
                                email: email,
                                password: password,
                                firstName: firstName,
                                lastName: lastName
                            })];
                    case 1:
                        newUser = _a.sent();
                        req.session.user = newUser;
                        return [2, res.redirect("/")];
                    case 2:
                        err_1 = _a.sent();
                        return [2, res.status(common_1.HttpStatus.BAD_REQUEST).json({
                                success: false,
                                message: err_1.message || 'Registration failed',
                            })];
                    case 3: return [2];
                }
            });
        });
    };
    __decorate([
        (0, common_1.Get)('/logout'),
        __param(0, (0, common_1.Req)()),
        __param(1, (0, common_1.Res)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "logout", null);
    __decorate([
        (0, common_1.Post)('/login'),
        __param(0, (0, common_1.Body)('username')),
        __param(1, (0, common_1.Body)('password')),
        __param(2, (0, common_1.Req)()),
        __param(3, (0, common_1.Res)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "login", null);
    __decorate([
        (0, common_1.Post)('/register'),
        __param(0, (0, common_1.Body)('email')),
        __param(1, (0, common_1.Body)('password')),
        __param(2, (0, common_1.Body)('firstName')),
        __param(3, (0, common_1.Body)('lastName')),
        __param(4, (0, common_1.Res)()),
        __param(5, (0, common_1.Req)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "register", null);
    AuthController = __decorate([
        (0, common_1.Controller)(),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map