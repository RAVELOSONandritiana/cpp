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
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const moment_service_1 = require("../moment/moment.service");
let ClientService = class ClientService {
    prisma = new client_1.PrismaClient();
    momentService = new moment_service_1.MomentService();
    constructor() { }
    async clientExist(client) {
        try {
            const c = await this.prisma.client.findFirst({
                where: {
                    contact: client.contact,
                    nomClient: client.nomClient,
                },
            });
            if (c == undefined) {
                throw new Error('client n existe pas');
            }
            return {
                status: true,
                data: c,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async frequenceOneDay(client, date) {
        try {
            const { status: statusClientExist } = await this.clientExist(client);
            if (statusClientExist == false) {
                throw new Error('client introuvable');
            }
            const res = await this.prisma.vente.findMany({
                where: {
                    dateVente: {
                        gte: this.momentService.dateStartOf(date, "day"),
                        lt: this.momentService.dateEndOf(date, "day"),
                    },
                    client: {
                        nomClient: client.nomClient,
                        contact: client.contact,
                    },
                },
            });
            return {
                status: true,
                nombre: res.length,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async frequenceClientOneMonth(client, date) {
        const daysInMonth = await this.momentService.getDaysInAMonth(date);
        const statClient = [];
        for (const day of daysInMonth) {
            statClient.push((await this.frequenceOneDay(client, day)).status);
        }
        return statClient;
    }
    async frequenceClientManyMonth(client, date, n) {
        const months = this.momentService.getMonths(date, n);
        const tab = [];
        for (const debutMonth of months) {
            let r = await this.frequenceClientOneMonth(client, debutMonth);
            r = r.filter((e) => e);
            tab.push(r.length);
        }
        return tab;
    }
    async getClients() {
        try {
            const response = await this.prisma.client.findMany({
                select: {
                    nomClient: true,
                    contact: true,
                },
            });
            return {
                status: true,
                data: response,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async historiqueClientSpecifique(client) {
        try {
            const res = await this.prisma.vente.findMany({
                where: {
                    client: {
                        nomClient: client.nomClient,
                        contact: client.contact,
                    },
                },
            });
            return {
                status: true,
                response: res.reverse(),
            };
        }
        catch (error) {
            console.error(error);
            return {
                status: false,
                error: error,
            };
        }
    }
    async historiqueClientInIntervalle(client) {
        try {
            const c = {
                nomClient: client.nomClient,
                contact: client.contact,
            };
            const { status: statusClientExist } = await this.clientExist(c);
            if (statusClientExist == false) {
                throw new Error('client introuvable');
            }
            const clients = await this.prisma.vente.findMany({
                where: {
                    dateVente: {
                        gte: this.momentService.moment(client.debut),
                        lt: this.momentService.moment(client.fin),
                    },
                    client: {
                        nomClient: client.nomClient,
                        contact: client.contact,
                    },
                },
            });
            return {
                status: true,
                data: clients,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async frequenceEachClientMonth(date) {
        try {
            const hist = [];
            await this.prisma.$transaction(async (prisma) => {
                const clients = await prisma.client.findMany({
                    select: {
                        nomClient: true,
                        contact: true,
                    },
                });
                for (const cl of clients) {
                    const tmpClient = {
                        nomClient: cl.nomClient,
                        contact: cl.contact,
                        visite: 0,
                    };
                    for (let i = 0; i < +(await this.momentService.diffDate(date.debut, date.fin)); i++) {
                        const newDate = this.momentService.addDate(date.debut, i, "month");
                        const len = (await this.frequenceClientOneMonth(cl, newDate)).filter((e) => e == true).length;
                        tmpClient.visite += len;
                    }
                    hist.push(tmpClient);
                }
            });
            const nMax = hist.reduce((oMax, ob) => oMax.visite > ob.visite ? oMax : ob).visite;
            return {
                hist: hist,
                visiteMax: hist.filter((e) => e.visite == nMax),
            };
        }
        catch (error) {
            return error;
        }
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ClientService);
//# sourceMappingURL=client.service.js.map