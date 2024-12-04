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
exports.SortantService = void 0;
const common_1 = require("@nestjs/common");
const moment_service_1 = require("../moment/moment.service");
const stock_service_1 = require("../stock/stock.service");
const client_1 = require("@prisma/client");
let SortantService = class SortantService {
    momentService;
    stockService;
    prisma = new client_1.PrismaClient();
    constructor(momentService, stockService) {
        this.momentService = momentService;
        this.stockService = stockService;
    }
    async addInSortant(id, body) {
        try {
            const { nombre, prix_unitaire } = body;
            const add = await this.prisma.sortant.create({
                data: {
                    idProduit: id,
                    nombre: nombre,
                    prix_unitaire: prix_unitaire,
                    prixTotal: String(+nombre * +prix_unitaire),
                    DateAchat: this.momentService.nowFormat(),
                },
            });
            if (!add) {
                throw new Error('erreur dans l achat du produit');
            }
            return {
                status: true,
                data: add,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async acheterProduitFournisseur(body) {
        try {
            const { nom_produit, nombre, prix_unitaire } = body;
            const { status: statusStockService, data: dataStockService } = await this.stockService.getAllInfoProduct(nom_produit);
            if (statusStockService == false) {
                throw new Error('produit n existe pas encore');
            }
            else {
                const produit = {
                    news: {
                        quantite: String(+dataStockService.quantite + +nombre),
                        newName: dataStockService.nomProduit,
                        prixProduit: dataStockService.prixProduit,
                        quantiteMin: dataStockService.quantiteMin,
                    },
                    nomProduit: nom_produit,
                };
                const update = await this.stockService.alterProduct(produit);
                const data = await this.addInSortant(dataStockService.id_produit, {
                    nom_produit: nom_produit,
                    nombre: nombre,
                    prix_unitaire: prix_unitaire,
                });
                if (data.status == false) {
                    throw new Error(data.error);
                }
                return {
                    status: true,
                    data: data,
                    update: update,
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
    async sumOneMonth(date) {
        try {
            const request = await this.prisma.sortant.findMany({
                where: {
                    DateAchat: {
                        gte: this.momentService.dateStartOf(date, "month"),
                        lt: this.momentService.dateEndOf(date, "month"),
                    },
                },
            });
            let somme = 0;
            request.forEach((e) => {
                somme += +e.prixTotal;
            });
            return {
                status: true,
                data: somme,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async sumManyMonth(dateDebut, dateFin) {
        try {
            const months = await this.momentService.getMonths(dateFin, -1 * this.momentService.diff(dateFin, dateDebut, "month") + 1);
            const res = [];
            for (const month of months) {
                res.push({
                    month: this.momentService.formatWith(month, 'YYYY-MM'),
                    somme: (await this.sumOneMonth(month)).data,
                });
            }
            return {
                status: true,
                data: res.reverse(),
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
exports.SortantService = SortantService;
exports.SortantService = SortantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [moment_service_1.MomentService,
        stock_service_1.StockService])
], SortantService);
//# sourceMappingURL=sortant.service.js.map