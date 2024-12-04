"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const vente_module_1 = require("./vente/vente.module");
const stock_module_1 = require("./stock/stock.module");
const client_module_1 = require("./client/client.module");
const auth_module_1 = require("./auth/auth.module");
const employe_module_1 = require("./employe/employe.module");
const email_module_1 = require("./email/email.module");
const serverSocket_1 = require("./serverSocket/serverSocket");
const cron_service_1 = require("./cron/cron.service");
const sortant_module_1 = require("./sortant/sortant.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            vente_module_1.VenteModule,
            stock_module_1.StockModule,
            client_module_1.ClientModule,
            auth_module_1.AuthModule,
            employe_module_1.EmployeModule,
            email_module_1.EmailModule,
            sortant_module_1.SortantModule,
        ],
        providers: [serverSocket_1.ServerSocket, cron_service_1.CronService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map