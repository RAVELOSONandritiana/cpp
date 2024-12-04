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
exports.AlterEmployeTypeValidation = exports.EmployeTypeValidation = void 0;
const class_validator_1 = require("class-validator");
var TypeEmploi;
(function (TypeEmploi) {
    TypeEmploi["VENDEUR"] = "vendeur";
    TypeEmploi["LIVREUR"] = "livreur";
    TypeEmploi["ADMIN"] = "admin";
})(TypeEmploi || (TypeEmploi = {}));
class EmployeTypeValidation {
    nom;
    prenom;
    role;
    contact;
}
exports.EmployeTypeValidation = EmployeTypeValidation;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le nom de l employe est vide',
    }),
    __metadata("design:type", String)
], EmployeTypeValidation.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le prenom de l employe est vide',
    }),
    __metadata("design:type", String)
], EmployeTypeValidation.prototype, "prenom", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(TypeEmploi),
    (0, class_validator_1.IsNotEmpty)({
        message: 'un employe doit avoir un role ou le role n existe pas',
    }),
    __metadata("design:type", String)
], EmployeTypeValidation.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le contact de l employe est vide',
    }),
    __metadata("design:type", String)
], EmployeTypeValidation.prototype, "contact", void 0);
class NewEmployeTypeValidation {
    nom;
    prenom;
    role;
    contact;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewEmployeTypeValidation.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewEmployeTypeValidation.prototype, "prenom", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(TypeEmploi),
    __metadata("design:type", String)
], NewEmployeTypeValidation.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewEmployeTypeValidation.prototype, "contact", void 0);
class AlterEmployeTypeValidation {
    oldEmploye;
    newEmploye;
}
exports.AlterEmployeTypeValidation = AlterEmployeTypeValidation;
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'les informations concernant l employe ne peut pas etre vide',
    }),
    __metadata("design:type", EmployeTypeValidation)
], AlterEmployeTypeValidation.prototype, "oldEmploye", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", NewEmployeTypeValidation)
], AlterEmployeTypeValidation.prototype, "newEmploye", void 0);
//# sourceMappingURL=employe-types.dto.js.map