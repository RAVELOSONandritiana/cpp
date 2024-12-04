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
exports.RangeValidation = exports.nMonth = exports.VenteTypeValidation = exports.ClientTypeValidation = void 0;
const class_validator_1 = require("class-validator");
class ClientTypeValidation {
    nomClient;
    contact;
    constructor(nomClient, contact) {
        this.nomClient = nomClient;
        this.contact = contact;
    }
}
exports.ClientTypeValidation = ClientTypeValidation;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'nomClient null',
    }),
    __metadata("design:type", String)
], ClientTypeValidation.prototype, "nomClient", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'contact null',
    }),
    __metadata("design:type", String)
], ClientTypeValidation.prototype, "contact", void 0);
class VenteTypeValidation extends ClientTypeValidation {
    nomProduit;
    nombre;
    constructor(nomProduit, nomClient, contact, nombre) {
        super(nomClient, contact);
        this.nomProduit = nomProduit;
        this.nombre = nombre;
    }
}
exports.VenteTypeValidation = VenteTypeValidation;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'nomProduit null',
    }),
    __metadata("design:type", String)
], VenteTypeValidation.prototype, "nomProduit", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'nombre null',
    }),
    __metadata("design:type", String)
], VenteTypeValidation.prototype, "nombre", void 0);
class nMonth {
    date;
    n;
}
exports.nMonth = nMonth;
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'date not found in query',
    }),
    __metadata("design:type", String)
], nMonth.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le n month is empty',
    }),
    __metadata("design:type", Number)
], nMonth.prototype, "n", void 0);
class RangeValidation {
    debut;
    fin;
}
exports.RangeValidation = RangeValidation;
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'debut not found in query',
    }),
    __metadata("design:type", String)
], RangeValidation.prototype, "debut", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'fin not found in query',
    }),
    __metadata("design:type", String)
], RangeValidation.prototype, "fin", void 0);
//# sourceMappingURL=vente-type.dto.js.map