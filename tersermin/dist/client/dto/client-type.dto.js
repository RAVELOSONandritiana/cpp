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
exports.DateValidation = exports.FrequenceClientValidation = exports.FindClientInIntervalleValidation = void 0;
const class_validator_1 = require("class-validator");
class ClientTypeValidation {
    nomClient;
    contact;
    constructor(nomClient, contact) {
        this.nomClient = nomClient;
        this.contact = contact;
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'nomClient est vide',
    }),
    __metadata("design:type", String)
], ClientTypeValidation.prototype, "nomClient", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'nomClient est vide',
    }),
    __metadata("design:type", String)
], ClientTypeValidation.prototype, "contact", void 0);
class FindClientInIntervalleValidation extends ClientTypeValidation {
    debut;
    fin;
    constructor(nomClient, contact, debut, fin) {
        super(nomClient, contact);
        this.debut = debut;
        this.fin = fin;
    }
}
exports.FindClientInIntervalleValidation = FindClientInIntervalleValidation;
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'la date de debut est vide',
    }),
    __metadata("design:type", String)
], FindClientInIntervalleValidation.prototype, "debut", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'la date de fin est vide',
    }),
    __metadata("design:type", String)
], FindClientInIntervalleValidation.prototype, "fin", void 0);
class FrequenceClientValidation {
    date;
    client;
    n;
    constructor(client, date, n) {
        this.date = date;
        this.client = client;
        this.n = n;
    }
}
exports.FrequenceClientValidation = FrequenceClientValidation;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'date est vide',
    }),
    __metadata("design:type", String)
], FrequenceClientValidation.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'le client est absent',
    }),
    __metadata("design:type", ClientTypeValidation)
], FrequenceClientValidation.prototype, "client", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], FrequenceClientValidation.prototype, "n", void 0);
class DateValidation {
    debut;
    fin;
    constructor(debut, fin) {
        this.debut = debut;
        this.fin = fin;
    }
}
exports.DateValidation = DateValidation;
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'la date de debut est vide',
    }),
    __metadata("design:type", String)
], DateValidation.prototype, "debut", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'la date de fin est vide',
    }),
    __metadata("design:type", String)
], DateValidation.prototype, "fin", void 0);
//# sourceMappingURL=client-type.dto.js.map