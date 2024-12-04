"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
const common_1 = require("@nestjs/common");
const node_cron_1 = require("node-cron");
const employe_service_1 = require("../employe/employe.service");
let CronService = class CronService {
    employeService = new employe_service_1.EmployeService();
    onModuleInit() {
        try {
            (0, node_cron_1.schedule)(process.env.INIT_EMPLOYE, async () => {
                const response = await this.employeService.falseDisponibility();
                if (response.status == false) {
                    throw new Error(response.error);
                }
            });
        }
        catch (error) {
            console.error(error.message);
        }
    }
};
exports.CronService = CronService;
exports.CronService = CronService = __decorate([
    (0, common_1.Injectable)()
], CronService);
//# sourceMappingURL=cron.service.js.map