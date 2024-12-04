"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortantModule = void 0;
const common_1 = require("@nestjs/common");
const sortant_service_1 = require("./sortant.service");
const sortant_controller_1 = require("./sortant.controller");
const stock_module_1 = require("../stock/stock.module");
const stock_service_1 = require("../stock/stock.service");
const moment_service_1 = require("../moment/moment.service");
let SortantModule = class SortantModule {
};
exports.SortantModule = SortantModule;
exports.SortantModule = SortantModule = __decorate([
    (0, common_1.Module)({
        imports: [stock_module_1.StockModule],
        providers: [sortant_service_1.SortantService, stock_service_1.StockService, moment_service_1.MomentService],
        controllers: [sortant_controller_1.SortantController],
    })
], SortantModule);
//# sourceMappingURL=sortant.module.js.map