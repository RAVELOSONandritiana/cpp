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
exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
const client_service_1 = require("./client.service");
const client_type_dto_1 = require("./dto/client-type.dto");
const vente_type_dto_1 = require("../vente/dto/vente-type.dto");
const auth_guard_1 = require("../auth/auth.guard");
let ClientController = class ClientController {
    clientService;
    constructor(clientService) {
        this.clientService = clientService;
    }
    async frequenceClientManyMonth(req) {
        const { client, date, n } = req;
        return await this.clientService.frequenceClientManyMonth(client, date, n);
    }
    async getClients() {
        return await this.clientService.getClients();
    }
    async historiqueClientSpecifique(client) {
        return await this.clientService.historiqueClientSpecifique(client);
    }
    async historiqueClientInIntervalle(body) {
        return await this.clientService.historiqueClientInIntervalle(body);
    }
    async frequenceEachClientMonth(date) {
        return await this.clientService.frequenceEachClientMonth(date);
    }
};
exports.ClientController = ClientController;
__decorate([
    (0, common_1.Get)('frequenceclientmanymonth'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_type_dto_1.FrequenceClientValidation]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "frequenceClientManyMonth", null);
__decorate([
    (0, common_1.Get)('getclients'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClients", null);
__decorate([
    (0, common_1.Get)('historiqueclientspecifique'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vente_type_dto_1.ClientTypeValidation]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "historiqueClientSpecifique", null);
__decorate([
    (0, common_1.Get)('historiqueclientinrange'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_type_dto_1.FindClientInIntervalleValidation]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "historiqueClientInIntervalle", null);
__decorate([
    (0, common_1.Get)('frequenceeachclientmonth'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_type_dto_1.DateValidation]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "frequenceEachClientMonth", null);
exports.ClientController = ClientController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('client'),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ClientController);
//# sourceMappingURL=client.controller.js.map