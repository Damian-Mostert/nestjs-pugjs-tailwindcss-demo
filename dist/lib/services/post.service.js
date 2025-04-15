"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var posts_entity_1 = require("../entitys/posts.entity");
var users_entity_1 = require("../entitys/users.entity");
var PostService = (function () {
    function PostService(postsRepository, usersRepository) {
        this.postsRepository = postsRepository;
        this.usersRepository = usersRepository;
    }
    PostService.prototype.feedByUserId = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var user, followedIds, feedUserIds, posts;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.usersRepository.findOne({
                            where: { id: userId },
                            relations: ['following'],
                        })];
                    case 1:
                        user = _b.sent();
                        if (!user)
                            throw new Error('User not found');
                        followedIds = ((_a = user.following) === null || _a === void 0 ? void 0 : _a.map(function (f) { return f.id; })) || [];
                        feedUserIds = __spreadArray([userId], followedIds, true);
                        return [4, this.postsRepository.find({
                                where: feedUserIds.map(function (id) { return ({ author: { id: id } }); }),
                                relations: ['author'],
                                order: { createdAt: 'DESC' },
                            })];
                    case 2:
                        posts = _b.sent();
                        posts = posts.map(function (post) {
                            var _a;
                            var score = (post.likeCount * 2) +
                                (((_a = post.comments) === null || _a === void 0 ? void 0 : _a.length) || 0) * 3 +
                                (1 / (Math.abs(+new Date() - +new Date(post.createdAt)) / (1000 * 60 * 60) + 1));
                            return __assign(__assign({}, post), { _score: score + Math.random() * 0.5 });
                        });
                        posts.sort(function (a, b) { return b._score - a._score; });
                        return [2, posts.map(function (_a) {
                                var _score = _a._score, post = __rest(_a, ["_score"]);
                                return post;
                            })];
                }
            });
        });
    };
    PostService.prototype.create = function (createPostDto, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var user, newPost;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.usersRepository.findOne({ where: { id: userId } })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new Error('User not found');
                        }
                        newPost = this.postsRepository.create(__assign(__assign({}, createPostDto), { author: user }));
                        return [4, this.postsRepository.save(newPost)];
                    case 2: return [2, _a.sent()];
                }
            });
        });
    };
    PostService.prototype.update = function (id, updatePostDto) {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.postsRepository.findOne({ where: { id: id } })];
                    case 1:
                        post = _a.sent();
                        if (!post) {
                            throw new Error('Post not found');
                        }
                        Object.assign(post, updatePostDto);
                        return [4, this.postsRepository.save(post)];
                    case 2: return [2, _a.sent()];
                }
            });
        });
    };
    PostService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.postsRepository.findOne({ where: { id: id } })];
                    case 1:
                        post = _a.sent();
                        if (!post) {
                            throw new Error('Post not found');
                        }
                        return [4, this.postsRepository.remove(post)];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    PostService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.postsRepository.find({ relations: ['author'] })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    PostService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.postsRepository.findOne({ where: { id: id }, relations: ['author'] })];
                    case 1:
                        post = _a.sent();
                        if (!post) {
                            throw new Error('Post not found');
                        }
                        return [2, post];
                }
            });
        });
    };
    PostService.prototype.findByAuthor = function (authorId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.postsRepository.find({ where: { author: { id: authorId } }, relations: ['author'] })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    PostService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(posts_entity_1.Posts)),
        __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
        __metadata("design:paramtypes", [typeorm_2.Repository,
            typeorm_2.Repository])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map