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
exports.VenteController = void 0;
const common_1 = require("@nestjs/common");
const vente_service_1 = require("./vente.service");
const vente_type_dto_1 = require("./dto/vente-type.dto");
const auth_guard_1 = require("../auth/auth.guard");
let VenteController = class VenteController {
    venteService;
    constructor(venteService) {
        this.venteService = venteService;
    }
    async ActionVente(vente) {
        return await this.venteService.ActionVente(vente);
    }
    async getPrixTotal(body) {
        return await this.venteService.getPrixTotal(body);
    }
    async historiqueClient(client) {
        return await this.venteService.getHistoriqueClient(client);
    }
    async clearHistoriqueClient(client) {
        return await this.venteService.clearHistoriqueClient(client);
    }
    async getClientNMonth(body) {
        return await this.venteService.getClientNmonth(body);
    }
    async getProductNMonth(body) {
        return await this.venteService.getProductNMonth(body);
    }
    async getHistoriqueVenteN(n) {
        return (await this.venteService.getHistoriqueVente()).splice(n - 1, 10);
    }
    async historiqueVenteInRange(body) {
        return await this.venteService.historiqueVenteInRange(body);
    }
    async clearHistoriqueVenteInRange(body) {
        return await this.venteService.clearHistoriqueVenteInRange(body);
    }
};
exports.VenteController = VenteController;
__decorate([
    (0, common_1.Post)('actionvente'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vente_type_dto_1.VenteTypeValidation]),
    __metadata("design:returntype", Promise)
], VenteController.prototype, "ActionVente", null);
__decorate([
    (0, common_1.Post)('getprixtotal'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VenteController.prototype, "getPrixTotal", null);
__decorate([
    (0, common_1.Get)('historiqueclient'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vente_type_dto_1.ClientTypeValidation]),
    __metadata("design:returntype", Promise)
], VenteController.prototype, "historiqueClient", null);
__decorate([
    (0, common_1.Delete)('clearhistoriqueclient'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vente_type_dto_1.ClientTypeValidation]),
    __metadata("design:returntype", Promise)
], VenteController.prototype, "clearHistoriqueClient", null);
__decorate([
    (0, common_1.Get)('getclientnmonth'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vente_type_dto_1.nMonth]),
    __metadata("design:returntype", Promise)
], VenteController.prototype, "getClientNMonth", null);
__decorate([
    (0, common_1.Get)('productnmonth'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vente_type_dto_1.nMonth]),
    __metadata("design:returntype", Promise)
], VenteController.prototype, "getProductNMonth", null);
__decorate([
    (0, common_1.Get)('historiquen/:n'),
    __param(0, (0, common_1.Param)('n')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VenteController.prototype, "getHistoriqueVenteN", null);
__decorate([
    (0, common_1.Get)('historiqueventeinrange'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vente_type_dto_1.RangeValidation]),
    __metadata("design:returntype", Promise)
], VenteController.prototype, "historiqueVenteInRange", null);
__decorate([
    (0, common_1.Delete)('clearhistoriqueventeinrange'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vente_type_dto_1.RangeValidation]),
    __metadata("design:returntype", Promise)
], VenteController.prototype, "clearHistoriqueVenteInRange", null);
exports.VenteController = VenteController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('vente'),
    __metadata("design:paramtypes", [vente_service_1.VenteService])
], VenteController);
//# sourceMappingURL=vente.controller.js.map