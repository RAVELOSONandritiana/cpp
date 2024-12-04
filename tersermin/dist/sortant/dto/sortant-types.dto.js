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
exports.AchatSortantDto = void 0;
const class_validator_1 = require("class-validator");
class AchatSortantDto {
    nom_produit;
    nombre;
    prix_unitaire;
}
exports.AchatSortantDto = AchatSortantDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AchatSortantDto.prototype, "nom_produit", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le nombre de produit a achetre ne peut pas etre vide',
    }),
    __metadata("design:type", String)
], AchatSortantDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le prix unitaire ne peut pas etre vide',
    }),
    __metadata("design:type", String)
], AchatSortantDto.prototype, "prix_unitaire", void 0);
//# sourceMappingURL=sortant-types.dto.js.map