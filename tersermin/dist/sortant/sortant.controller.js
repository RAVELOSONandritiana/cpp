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
exports.SortantController = void 0;
const common_1 = require("@nestjs/common");
const sortant_service_1 = require("./sortant.service");
const sortant_types_dto_1 = require("./dto/sortant-types.dto");
const auth_guard_1 = require("../auth/auth.guard");
let SortantController = class SortantController {
    sortantService;
    constructor(sortantService) {
        this.sortantService = sortantService;
    }
    async acheterProduitFournisseur(body) {
        return await this.sortantService.acheterProduitFournisseur(body);
    }
    async sumManyMonth(body) {
        const { debut, fin } = body;
        return await this.sortantService.sumManyMonth(debut, fin);
    }
};
exports.SortantController = SortantController;
__decorate([
    (0, common_1.Post)('acheter'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sortant_types_dto_1.AchatSortantDto]),
    __metadata("design:returntype", Promise)
], SortantController.prototype, "acheterProduitFournisseur", null);
__decorate([
    (0, common_1.Get)('summanymonth'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SortantController.prototype, "sumManyMonth", null);
exports.SortantController = SortantController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('sortant'),
    __metadata("design:paramtypes", [sortant_service_1.SortantService])
], SortantController);
//# sourceMappingURL=sortant.controller.js.map