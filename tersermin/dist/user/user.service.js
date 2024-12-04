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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const moment_service_1 = require("../moment/moment.service");
let UserService = class UserService {
    prisma = new client_1.PrismaClient();
    momentService = new moment_service_1.MomentService();
    constructor() { }
    async verifyUser(user) {
        try {
            const u = await this.prisma.user.findFirst({
                where: {
                    username: user.username,
                    type: user.type,
                },
            });
            if (await bcrypt.compare(user.password, u.password)) {
                return {
                    status: true,
                    data: u,
                };
            }
            throw new Error('mot de passe ne correpons pas');
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async createUser(user) {
        try {
            if ((await this.verifyUser(user)).status) {
                throw new Error('compte existe deja');
            }
            const userCreated = await this.prisma.user.create({
                data: {
                    username: user.username,
                    password: await bcrypt.hash(user.password, 10),
                    type: user.type,
                    createdAt: this.momentService.nowFormat(),
                    updatedAt: this.momentService.nowFormat(),
                },
            });
            if (userCreated == undefined) {
                throw new Error('Erreur lors de la creation de Compte');
            }
            return {
                status: true,
                data: userCreated,
            };
        }
        catch (error) {
            return {
                status: false,
                error: error.message,
            };
        }
    }
    async deleteUser(user) {
        try {
            const u = await this.verifyUser(user);
            if (u.status) {
                const data = await this.prisma.user.delete({
                    where: {
                        id_user: u.data.id_user,
                    },
                });
                return {
                    status: true,
                    data: data,
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
    async getId(user) {
        const compte = await this.prisma.user.findFirst({
            where: {
                username: user.username,
                type: user.type,
            },
        });
        if (compte) {
            if (await bcrypt.compare(user.password, compte.password)) {
                return { status: true, id_user: compte.id_user };
            }
        }
        return { status: false };
    }
    async alterUser(body) {
        try {
            const { oldUser, newUser } = body;
            if ((await this.verifyUser(oldUser)).status == false) {
                throw new Error('ancien mot de passe erreur');
            }
            Object.assign(newUser, {
                username: newUser.username ?? oldUser.username,
                password: newUser.password ?? oldUser.password,
                type: newUser.type ?? oldUser.type,
            });
            const userUpdated = await this.prisma.user.update({
                where: {
                    id_user: (await this.getId(oldUser)).id_user,
                },
                data: {
                    username: newUser.username,
                    password: await bcrypt.hash(newUser.password, 10),
                    type: newUser.type,
                    updatedAt: this.momentService.nowFormat(),
                },
            });
            return {
                status: true,
                data: userUpdated,
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
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UserService);
//# sourceMappingURL=user.service.js.map