import { AlterEmployeTypeValidation, EmployeTypeValidation } from './dto/employe-types.dto';
export declare class EmployeService {
    private readonly prisma;
    private readonly momentService;
    constructor();
    private verifyEmploye;
    addEmploye(body: EmployeTypeValidation): Promise<{
        status: boolean;
        data: {
            contact: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            prenom: string;
            role: string;
            id_employe: string;
            disponibilite: boolean;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    private getAllEmploye;
    alterEmploye(body: AlterEmployeTypeValidation): Promise<{
        status: boolean;
        data: {
            contact: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            prenom: string;
            role: string;
            id_employe: string;
            disponibilite: boolean;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    deleteEmploye(body: EmployeTypeValidation): Promise<{
        status: boolean;
        data: {
            contact: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            prenom: string;
            role: string;
            id_employe: string;
            disponibilite: boolean;
        };
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    checkEmploye(body: EmployeTypeValidation): Promise<{
        status: boolean;
        data: {
            contact: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            prenom: string;
            role: string;
            id_employe: string;
            disponibilite: boolean;
        };
        message: string;
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
        message?: undefined;
    }>;
    private getEmployeDisponible;
    statEmploye(date: string): Promise<{
        status: boolean;
        data: any[];
        satus?: undefined;
        error?: undefined;
    } | {
        satus: boolean;
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    falseDisponibility(): Promise<{
        status: boolean;
        data: import("@prisma/client").Prisma.BatchPayload;
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
    private getAllDisponible;
    private getAllRoles;
    triDisponibleByRoles(): Promise<{
        status: boolean;
        data: {};
        error?: undefined;
    } | {
        status: boolean;
        error: any;
        data?: undefined;
    }>;
}
