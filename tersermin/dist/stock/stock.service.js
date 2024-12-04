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
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const moment_service_1 = require("../moment/moment.service");
let StockService = class StockService {
    prisma = new client_1.PrismaClient();
    momentService = new moment_service_1.MomentService();
    constructor() { }
    async addProduct(produit) {
        try {
            if (await this.productExists(produit.nomProduit)) {
                const info = await this.getAllInfoProduct(produit.nomProduit);
                const newData = {
                    newName: produit.nomProduit,
                    prixProduit: produit.prixProduit,
                    quantite: String(+info.data.quantite + +produit.quantite),
                    quantiteMin: produit.quantiteMin,
                };
                const { status, data, error } = await this.alterProduct({
                    news: newData,
                    nomProduit: produit.nomProduit,
                });
                if (status == false) {
                    throw new Error(error);
                }
                return {
                    status: true,
                    data: data,
                };
            }
            const prod = await this.prisma.stock.create({
                data: {
                    nomProduit: produit.nomProduit,
                    prixProduit: produit.prixProduit,
                    quantite: produit.quantite,
                    quantiteMin: produit.quantiteMin,
                    updatedAt: this.momentService.nowFormat(),
                    dateAjout: this.momentService.nowFormat(),
                },
            });
            return {
                status: true,
                data: prod,
            };
        }
        catch {
            return {
                status: false,
                message: 'produit existe deja',
            };
        }
    }
    async getInfoProduct(filter) {
        const attr = ['prixProduit', 'nomProduit', 'quantite', 'quantiteMin'];
        const dataStock = await this.prisma.stock.findMany();
        if (attr.includes(filter)) {
            const setElement = [];
            dataStock.forEach((row) => {
                setElement.push(row[filter]);
            });
            return setElement;
        }
        return dataStock;
    }
    async productExists(nomProduit) {
        const prod = await this.prisma.stock.findUnique({
            where: {
                nomProduit: nomProduit,
            },
        });
        if (!prod) {
            return false;
        }
        return true;
    }
    async getAllInfoProduct(nomProduit) {
        try {
            if (!(await this.productExists(nomProduit))) {
                throw new Error('produit n existe pas');
            }
            const prod = await this.prisma.stock.findUnique({
                where: {
                    nomProduit: nomProduit,
                },
            });
            return {
                status: true,
                data: prod,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async alterProduct(body) {
        try {
            const { nomProduit, news } = body;
            if (await this.productExists(nomProduit)) {
                const { data: oldProduct } = await this.getAllInfoProduct(nomProduit);
                Object.assign(news, {
                    nomProduit: news.newName ?? nomProduit,
                    prixProduit: news.prixProduit ?? oldProduct.prixProduit,
                    quantite: news.quantite ?? oldProduct.quantite,
                    quantiteMin: news.quantiteMin ?? oldProduct.quantiteMin,
                });
                const updated = await this.prisma.stock.update({
                    where: {
                        id_produit: oldProduct.id_produit,
                    },
                    data: {
                        nomProduit: news.newName,
                        prixProduit: news.prixProduit,
                        quantite: news.quantite,
                        quantiteMin: news.quantiteMin,
                        updatedAt: this.momentService.nowFormat(),
                    },
                });
                if (updated == undefined) {
                    throw new Error('erreur dans la mise a jour du produit');
                }
                return {
                    status: true,
                    data: updated,
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
    async quantiteMinAvailable() {
        let stocks = await this.prisma.stock.findMany();
        stocks = stocks.filter((produit) => {
            if (+produit.quantite <= +produit.quantiteMin) {
                return true;
            }
            return false;
        });
        return stocks;
    }
    async bestProductInRange(body) {
        try {
            const { debut, fin } = body;
            const data = await this.prisma.vente.findMany({
                where: {
                    dateVente: {
                        gte: this.momentService.dateStartOf(debut, "day"),
                        lt: this.momentService.dateEndOf(fin, "day"),
                    },
                },
            });
            const setProduct = {};
            const indexProduct = {};
            for (const produit of data) {
                if (indexProduct[produit.idProduit] == undefined) {
                    const { status: statusNomProduit, data, error, } = await this.getNamePoductUsingId({ id: produit.idProduit });
                    if (statusNomProduit == false) {
                        throw new Error(error);
                    }
                    indexProduct[produit.idProduit] = data.nomProduit;
                }
                const name = indexProduct[produit.idProduit];
                if (setProduct[name] == undefined) {
                    setProduct[name] = produit.nombre;
                }
                else {
                    setProduct[name] = +setProduct[name] + +produit.nombre;
                }
            }
            const tab = [];
            for (const index in setProduct) {
                tab.push({
                    nomPoduit: index,
                    nombre: setProduct[index],
                    somme: 0,
                });
            }
            tab.sort((a, b) => b.nombre - a.nombre);
            for (const data of tab) {
                data.somme =
                    +(await this.getAllInfoProduct(data.nomPoduit)).data.prixProduit *
                        data.nombre;
            }
            return {
                status: true,
                data: tab,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async getNamePoductUsingId({ id }) {
        try {
            const data = await this.prisma.stock.findFirst({
                where: {
                    id_produit: id,
                },
                select: {
                    nomProduit: true,
                },
            });
            if (data == undefined) {
                throw new Error('produit n existe pas');
            }
            return {
                status: true,
                data: data,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async bestProductInManyMonths(body) {
        try {
            const { date, n } = body;
            const listMonth = this.momentService.getMonths(date, n);
            const list = [];
            for (const month of listMonth) {
                const { status, data, error } = await this.bestProductInRange({
                    debut: this.momentService.dateStartOf(month, "month"),
                    fin: this.momentService.dateEndOf(month, "month"),
                });
                if (status == false) {
                    throw new Error(error);
                }
                list.push(data[0]);
            }
            return {
                status: true,
                data: list,
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
exports.StockService = StockService;
exports.StockService = StockService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StockService);
//# sourceMappingURL=stock.service.js.map