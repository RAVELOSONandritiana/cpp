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
exports.EmployeService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const moment_service_1 = require("../moment/moment.service");
let EmployeService = class EmployeService {
    prisma = new client_1.PrismaClient();
    momentService = new moment_service_1.MomentService();
    constructor() { }
    async verifyEmploye(body) {
        try {
            const data = await this.prisma.employe.findFirst({
                where: {
                    nom: body.nom,
                    prenom: body.prenom,
                    contact: body.contact,
                    role: body.role,
                },
            });
            if (data) {
                return {
                    status: true,
                    data: data,
                };
            }
            throw new Error('erreur lors de la verification de l existence d un emplye');
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async addEmploye(body) {
        try {
            const { status: statusExists, error } = await this.verifyEmploye(body);
            if (statusExists == true) {
                throw new Error(error);
            }
            const data = await this.prisma.employe.create({
                data: {
                    nom: body.nom,
                    prenom: body.prenom,
                    contact: body.contact,
                    role: body.role,
                    createdAt: this.momentService.nowFormat(),
                    updatedAt: this.momentService.nowFormat(),
                },
            });
            if (data == undefined) {
                throw new Error('erreur dans l aojot de l employe');
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
    async getAllEmploye() {
        try {
            const data = await this.prisma.employe.findMany({
                include: {
                    presence: true,
                },
            });
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
    async alterEmploye(body) {
        try {
            const { oldEmploye, newEmploye } = body;
            if (newEmploye) {
                Object.assign(newEmploye, {
                    nom: newEmploye.nom ?? oldEmploye.nom,
                    prenom: newEmploye.prenom ?? oldEmploye.prenom,
                    contact: newEmploye.contact ?? oldEmploye.contact,
                    role: newEmploye.role ?? oldEmploye.role,
                });
            }
            const updatedData = await this.prisma.$transaction(async (prisma) => {
                const { status, data: infoEmploye } = await this.verifyEmploye(oldEmploye);
                if (status == false) {
                    throw new Error('employe n existe pas');
                }
                const updatedData = await prisma.employe.update({
                    where: {
                        id_employe: infoEmploye.id_employe,
                    },
                    data: {
                        nom: newEmploye.nom,
                        prenom: newEmploye.prenom,
                        contact: newEmploye.contact,
                        role: newEmploye.role,
                        updatedAt: this.momentService.nowFormat(),
                    },
                });
                return updatedData;
            });
            return {
                status: true,
                data: updatedData,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async deleteEmploye(body) {
        try {
            const { status, data, error } = await this.verifyEmploye(body);
            if (status == false) {
                throw new Error(error);
            }
            const d = await this.prisma.employe.delete({
                where: {
                    id_employe: data.id_employe,
                },
            });
            if (d) {
                return {
                    status: true,
                    data: d,
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
    async checkEmploye(body) {
        try {
            const { status, error, data } = await this.verifyEmploye(body);
            if (status == false) {
                throw new Error(error);
            }
            const checked = await this.prisma.$transaction(async (prisma) => {
                const checked = await prisma.employe.update({
                    where: {
                        id_employe: data.id_employe,
                    },
                    data: {
                        disponibilite: !data.disponibilite,
                    },
                });
                return checked;
            });
            return {
                status: true,
                data: checked,
                message: checked.disponibilite
                    ? 'employe maintenant disponible'
                    : 'liberation de l employe',
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async getEmployeDisponible() {
        try {
            const data = await this.prisma.employe.findMany({
                where: {
                    disponibilite: true,
                },
            });
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
    async statEmploye(date) {
        try {
            const days = this.momentService.getDaysInAMonth(date);
            const employe = (await this.getAllEmploye()).data;
            const total = [];
            for (const e of employe) {
                let cpt = 0;
                for (const day of days) {
                    const tmpPresenceDay = await this.prisma.presenceEmploye.findFirst({
                        where: {
                            createdAt: {
                                gte: this.momentService.dateStartOf(day, "day"),
                                lt: this.momentService.dateEndOf(day, "day"),
                            },
                        },
                    });
                    if (tmpPresenceDay) {
                        cpt += 1;
                    }
                }
                total.push({
                    nom: e.nom,
                    prenom: e.prenom,
                    contact: e.contact,
                    role: e.role,
                    presence: cpt,
                });
            }
            return {
                status: true,
                data: total,
            };
        }
        catch (error) {
            return {
                satus: false,
                error: error.message,
            };
        }
    }
    async falseDisponibility() {
        try {
            const data = await this.prisma.employe.updateMany({
                where: {
                    disponibilite: true,
                },
                data: {
                    disponibilite: false,
                },
            });
            if (data) {
                return {
                    status: true,
                    data: data,
                };
            }
            throw new Error('Vous n avez aucun employe');
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async getAllDisponible() {
        try {
            const all = await this.prisma.employe.findMany({
                where: {
                    disponibilite: true,
                },
            });
            return {
                status: true,
                data: all,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async getAllRoles() {
        try {
            const allRoles = await this.prisma.employe.findMany({
                select: {
                    role: true,
                },
            });
            return {
                status: true,
                data: allRoles,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async triDisponibleByRoles() {
        try {
            const { status: statusRoles, data: dataRoles, error: errorRoles, } = await this.getAllRoles();
            if (statusRoles == false) {
                throw errorRoles;
            }
            const { status: statusDisponibilite, data: dataDisponible, error: errorDisponible, } = await this.getAllDisponible();
            if (statusDisponibilite == false) {
                throw errorDisponible;
            }
            const res = {};
            for (const role of dataRoles) {
                res[role.role] = dataDisponible.filter((a) => a.role == role.role);
            }
            return {
                status: true,
                data: res,
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
exports.EmployeService = EmployeService;
exports.EmployeService = EmployeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EmployeService);
//# sourceMappingURL=employe.service.js.map