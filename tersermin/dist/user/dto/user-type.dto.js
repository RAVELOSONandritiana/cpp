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
exports.alterUserValidation = exports.UserTypeValidationCanEmpty = exports.UserTypeValidation = void 0;
const class_validator_1 = require("class-validator");
class UserTypeValidation {
    username;
    password;
    type;
}
exports.UserTypeValidation = UserTypeValidation;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'username est vide',
    }),
    __metadata("design:type", String)
], UserTypeValidation.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'password est vide',
    }),
    __metadata("design:type", String)
], UserTypeValidation.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'type est vide',
    }),
    __metadata("design:type", String)
], UserTypeValidation.prototype, "type", void 0);
class UserTypeValidationCanEmpty {
    username;
    password;
    type;
}
exports.UserTypeValidationCanEmpty = UserTypeValidationCanEmpty;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserTypeValidationCanEmpty.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserTypeValidationCanEmpty.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserTypeValidationCanEmpty.prototype, "type", void 0);
class alterUserValidation {
    oldUser;
    newUser;
}
exports.alterUserValidation = alterUserValidation;
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'oldUser object not found or attribut required not found',
    }),
    __metadata("design:type", UserTypeValidation)
], alterUserValidation.prototype, "oldUser", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'newUser not found in query',
    }),
    __metadata("design:type", UserTypeValidationCanEmpty)
], alterUserValidation.prototype, "newUser", void 0);
//# sourceMappingURL=user-type.dto.js.map