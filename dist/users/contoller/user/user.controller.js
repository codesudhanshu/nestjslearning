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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const userdata_dto_1 = require("./userdata.dto");
let UserController = class UserController {
    getuser() {
        return { username: "Sudhanshu", password: "123456" };
    }
    getuserpost() {
        return [{
                username: "Sudhanshu Srivastava",
                email: 'sudhanshusrivastava139@gmail.com',
                phoneNumber: 8467098755,
                post: [{
                        id: 1,
                        title: 1,
                        socialmedia: "instagram"
                    }, {
                        id: 2,
                        title: 2,
                        socialmedia: "Facebook"
                    }, {
                        id: 3,
                        title: 3,
                        socialmedia: "Linkedin"
                    }]
            }];
    }
    createuser(request, response) {
        console.log(request.body);
        response.send("India is Best");
    }
    createuserdata(userdata) {
        console.log(userdata);
        return {};
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getuser", null);
__decorate([
    (0, common_1.Get)('posts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getuserpost", null);
__decorate([
    (0, common_1.Post)('posting'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createuser", null);
__decorate([
    (0, common_1.Post)("userdata"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userdata_dto_1.userdatadto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createuserdata", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user')
], UserController);
//# sourceMappingURL=user.controller.js.map