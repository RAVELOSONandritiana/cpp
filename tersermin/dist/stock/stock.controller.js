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
exports.StockController = void 0;
const common_1 = require("@nestjs/common");
const stock_service_1 = require("./stock.service");
const stock_type_dto_1 = require("./dto/stock-type.dto");
const auth_guard_1 = require("../auth/auth.guard");
let StockController = class StockController {
    stockService;
    constructor(stockService) {
        this.stockService = stockService;
    }
    async addProduct(produit) {
        return await this.stockService.addProduct(produit);
    }
    async getInfoProduct(req) {
        const { fil } = req.query;
        return await this.stockService.getInfoProduct(fil);
    }
    async alterProduct(body) {
        return await this.stockService.alterProduct(body);
    }
    async quantiteMinAvailable() {
        return await this.stockService.quantiteMinAvailable();
    }
    async bestProductInRange(body) {
        return await this.stockService.bestProductInRange(body);
    }
    async bestProductInManyMonths(body) {
        return await this.stockService.bestProductInManyMonths(body);
    }
};
exports.StockController = StockController;
__decorate([
    (0, common_1.Post)('addproduct'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stock_type_dto_1.ProduitValidation]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "addProduct", null);
__decorate([
    (0, common_1.Get)('getinfoproduct'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getInfoProduct", null);
__decorate([
    (0, common_1.Put)('alterproduct'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stock_type_dto_1.alterProductValidation]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "alterProduct", null);
__decorate([
    (0, common_1.Get)('needtoadd'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockController.prototype, "quantiteMinAvailable", null);
__decorate([
    (0, common_1.Get)('bestproduct'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stock_type_dto_1.RangeValidation]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "bestProductInRange", null);
__decorate([
    (0, common_1.Get)('bestproductinmanymonths'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stock_type_dto_1.MonthValidation]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "bestProductInManyMonths", null);
exports.StockController = StockController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('stock'),
    __metadata("design:paramtypes", [stock_service_1.StockService])
], StockController);
//# sourceMappingURL=stock.controller.js.map