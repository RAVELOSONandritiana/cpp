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
exports.VenteService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const stock_service_1 = require("../stock/stock.service");
const moment_service_1 = require("../moment/moment.service");
let VenteService = class VenteService {
    prisma = new client_1.PrismaClient();
    stockService = new stock_service_1.StockService();
    momentService = new moment_service_1.MomentService();
    constructor() { }
    async verifQuantity(vente) {
        let status = false;
        if (vente.contact.length != 10) {
            return {
                status: false,
                message: 'numero incomplet',
            };
        }
        const { data: infoProduct } = await this.stockService.getAllInfoProduct(vente.nomProduit);
        if (!infoProduct) {
            return { status: status, message: 'product not found' };
        }
        if (+infoProduct.quantite >= +vente.nombre && +vente.nombre > 0) {
            status = true;
        }
        else if (+vente.nombre <= 0) {
            return {
                status: false,
                message: 'nombre negatif ou null',
            };
        }
        else {
            return {
                status: false,
                message: 'Produit insuffisant',
                reste: infoProduct.quantite,
                manquant: '' + Math.abs(+infoProduct.quantite - +vente.nombre),
            };
        }
        return { status: status, infoProduct: infoProduct };
    }
    async ActionVente(vente) {
        const all = await this.verifQuantity(vente);
        const { status, infoProduct } = all;
        if (status == false && all.manquant == undefined) {
            return {
                status: status,
                infoProduct: infoProduct,
                message: all.message,
            };
        }
        else if (all.manquant) {
            return {
                status: status,
                message: all.message,
                reste: all.reste,
                manquant: all.manquant,
            };
        }
        const v = {
            nombre: vente.nombre,
            prixTotal: '' + +infoProduct.prixProduit * +vente.nombre,
            idProduit: infoProduct.id_produit,
        };
        const action = await this.prisma.$transaction(async (prisma) => {
            const cl = await prisma.client.findMany({
                where: {
                    contact: vente.contact,
                    nomClient: vente.nomClient,
                },
            });
            if (!cl.length) {
                await prisma.client.create({
                    data: {
                        nomClient: vente.nomClient,
                        contact: vente.contact,
                        createdAt: this.momentService.nowFormat(),
                        updatedAt: this.momentService.nowFormat(),
                    },
                });
            }
            const c = await prisma.client.findFirst({
                where: {
                    contact: vente.contact,
                    nomClient: vente.nomClient,
                },
            });
            const dataVente = await prisma.vente.create({
                data: {
                    nombre: v.nombre,
                    prixTotal: v.prixTotal,
                    idProduit: v.idProduit,
                    idClient: c.id_client,
                    dateVente: this.momentService.nowFormat(),
                },
            });
            const stockUpdated = await prisma.stock.update({
                data: {
                    quantite: (+infoProduct.quantite - +vente.nombre).toString(),
                    updatedAt: this.momentService.nowFormat(),
                },
                where: {
                    id_produit: infoProduct.id_produit,
                    nomProduit: vente.nomProduit,
                },
            });
            return {
                status: status,
                vente: dataVente,
                stock: stockUpdated,
            };
        });
        return action;
    }
    async prixTotalDay(date) {
        const produtTotal = await this.prisma.$queryRaw `select * from Vente where date(dateVente) = ${date}`;
        const prix = [];
        produtTotal.forEach((vente) => {
            prix.push(vente.prixTotal);
        });
        return prix;
    }
    async getPrixTotal(body) {
        let { date, n } = body;
        if (n == undefined) {
            n = 3;
        }
        if (date == undefined) {
            date = this.momentService.now();
        }
        const tab = this.momentService.getDaysInManyMonths(date, n);
        const res = [];
        for (const month of tab) {
            let somme = 0;
            for (const day of month) {
                const tabDays = await this.prixTotalDay(day);
                somme += tabDays.reduce((acc, pr) => acc + +pr, 0);
            }
            res.push(somme);
        }
        return res;
    }
    async getHistoriqueClient(client) {
        try {
            const { status, message } = await this.verifyIdentity(client);
            if (status == false) {
                throw new Error(message);
            }
            const historique = await this.prisma.client.findMany({
                where: {
                    nomClient: client.nomClient,
                    contact: client.contact,
                },
                include: {
                    vente: true,
                },
            });
            if (historique) {
                return {
                    status: true,
                    data: historique.reverse(),
                };
            }
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async verifyIdentity(client) {
        let status = false;
        let message = 'client not found';
        const cl = await this.prisma.client.findMany({
            where: {
                nomClient: client.nomClient,
                contact: client.contact,
            },
        });
        if (cl.length) {
            status = true;
            message = 'client found';
        }
        return {
            status: status,
            message: message,
        };
    }
    async clearHistoriqueClient(client) {
        try {
            const { status, message } = (await this.verifyIdentity(client));
            if (status == false) {
                throw new Error(message);
            }
            const data = await this.prisma
                .$queryRaw `delete from Vente where nomClient = ${client.nomClient} and contact = ${client.contact}`;
            if (data) {
                return {
                    status: status,
                    message: message,
                };
            }
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async getProductOneDay(date) {
        const product = await this.prisma.vente.findMany({
            select: {
                nombre: true,
            },
            where: {
                dateVente: {
                    gte: this.momentService.dateStartOf(date, "day"),
                    lt: this.momentService.dateEndOf(date, "day"),
                },
            },
        });
        const somme = product.reduce((a, b) => +a + +b, 0);
        return somme;
    }
    async getProductNMonth(body) {
        const { date, n } = body;
        const daysInManyMonths = await this.momentService.getDaysInManyMonths(date, n);
        const res = [];
        for (const month of daysInManyMonths) {
            const somme = await Promise.all(month.map(async (day) => await this.getProductOneDay(day))).then((res) => res.reduce((a, b) => a + b, 0));
            res.push(somme);
        }
        return res;
    }
    async getClientOneDay(date) {
        const data = await this.prisma.$transaction(async (prisma) => {
            const vente = await prisma.vente.findMany({
                where: {
                    dateVente: {
                        gte: this.momentService.dateStartOf(date, "day"),
                        lt: this.momentService.dateEndOf(date, "day"),
                    },
                },
            });
            const tab = new Set();
            vente.forEach((venteDay) => {
                tab.add(venteDay.idClient);
            });
            return tab.size;
        });
        return data;
    }
    async getClientNmonth(body) {
        const { date, n } = body;
        const daysInManyMonths = await this.momentService.getDaysInManyMonths(date, n);
        const res = [];
        for (const month of daysInManyMonths) {
            const somme = await Promise.all(month.map((day) => this.getClientOneDay(day))).then((res) => res.reduce((a, b) => a + b, 0));
            res.push(somme);
        }
        return res;
    }
    async getHistoriqueVente() {
        return (await this.prisma.vente.findMany()).reverse();
    }
    async historiqueVenteInRange(body) {
        try {
            const { debut, fin } = body;
            const histo = await this.prisma.vente.findMany({
                where: {
                    dateVente: {
                        gte: this.momentService.dateStartOf(debut, "day"),
                        lt: this.momentService.dateEndOf(fin, "day"),
                    },
                },
            });
            return { status: true, data: histo.reverse() };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async deleteHistoriqueVenteWithId(id) {
        try {
            const del = await this.prisma.vente.delete({
                where: {
                    id_vente: id,
                },
            });
            return {
                status: true,
                data: del,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async clearHistoriqueVenteInRange(body) {
        try {
            const { status: statusVente, data: tab, error, } = await this.historiqueVenteInRange(body);
            if (!statusVente) {
                throw new error(error);
            }
            tab.forEach(async (e) => {
                await this.deleteHistoriqueVenteWithId(e.id_vente);
            });
            return {
                status: true,
                nombre: tab.length,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
};
exports.VenteService = VenteService;
exports.VenteService = VenteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], VenteService);
//# sourceMappingURL=vente.service.js.map