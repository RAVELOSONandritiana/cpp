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
exports.MonthValidation = exports.RangeValidation = exports.alterProductValidation = exports.newProduct = exports.ProduitValidation = void 0;
const class_validator_1 = require("class-validator");
class ProduitValidation {
    nomProduit;
    prixProduit;
    quantite;
    quantiteMin;
}
exports.ProduitValidation = ProduitValidation;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le nomProduit est vide',
    }),
    __metadata("design:type", String)
], ProduitValidation.prototype, "nomProduit", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'prixProduit est vide',
    }),
    __metadata("design:type", String)
], ProduitValidation.prototype, "prixProduit", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'quantite est vide',
    }),
    __metadata("design:type", String)
], ProduitValidation.prototype, "quantite", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'quantiteMin est vide',
    }),
    __metadata("design:type", String)
], ProduitValidation.prototype, "quantiteMin", void 0);
class newProduct {
    newName;
    prixProduit;
    quantite;
    quantiteMin;
}
exports.newProduct = newProduct;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], newProduct.prototype, "newName", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], newProduct.prototype, "prixProduit", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], newProduct.prototype, "quantite", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], newProduct.prototype, "quantiteMin", void 0);
class alterProductValidation {
    news;
    nomProduit;
}
exports.alterProductValidation = alterProductValidation;
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le nouveau element est vide',
    }),
    __metadata("design:type", newProduct)
], alterProductValidation.prototype, "news", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le nomProduit est vide',
    }),
    __metadata("design:type", String)
], alterProductValidation.prototype, "nomProduit", void 0);
class RangeValidation {
    debut;
    fin;
}
exports.RangeValidation = RangeValidation;
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], RangeValidation.prototype, "debut", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], RangeValidation.prototype, "fin", void 0);
class MonthValidation {
    date;
    n;
}
exports.MonthValidation = MonthValidation;
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], MonthValidation.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsInt)({
        message: 'n mois ne peut pas etre vide',
    }),
    __metadata("design:type", Number)
], MonthValidation.prototype, "n", void 0);
//# sourceMappingURL=stock-type.dto.js.map